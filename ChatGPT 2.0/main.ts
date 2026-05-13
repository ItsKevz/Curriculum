import { CreateWebWorkerMLCEngine } from "https://esm.run/@mlc-ai/web-llm@0.2.83"

type Sender = "user" | "bot"

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

interface StreamChunk {
  choices: Array<{ delta: { content?: string } } | undefined>
}

interface MLCEngine {
  chat: {
    completions: {
      create: (opts: {
        messages: ChatMessage[]
        stream: true
      }) => Promise<AsyncIterable<StreamChunk>>
    }
  }
}

interface InitProgressReport {
  text: string
  progress: number
}

type TagName = keyof HTMLElementTagNameMap

function qs<T extends Element>(selector: string): T {
  const el = document.querySelector<T>(selector)
  if (!el) throw new Error(`Element not found: ${selector}`)
  return el
}

function createElement<K extends TagName>(
  tag: K,
  attrs: Partial<HTMLElementTagNameMap[K]> = {},
  children: (Node | string)[] = []
): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag)
  Object.assign(el, attrs)
  children.forEach((child) =>
    el.appendChild(typeof child === "string" ? document.createTextNode(child) : child)
  )
  return el
}

function createSpan(text: string): HTMLSpanElement {
  return createElement("span", { textContent: text })
}

function createParagraph(text: string): HTMLParagraphElement {
  return createElement("p", { textContent: text })
}

function createMessageItem(text: string, sender: Sender): [HTMLLIElement, HTMLParagraphElement] {
  const label = sender === "bot" ? "GPT" : "Tú"
  const span = createSpan(label)
  const p = createParagraph(text)
  const li = createElement("li", { className: `message ${sender}` }, [span, p])
  return [li, p]
}

function createLoadingItem(): HTMLLIElement {
  const spinner = createElement("i")
  const h4 = createElement("h4", { textContent: "Cargando..." })
  const h5 = createElement("h5", { textContent: "Esto puede tardar un poco. Paciencia." })
  return createElement("li", { className: "loading" }, [spinner, h4, h5])
}

const $form      = qs<HTMLFormElement>("form")
const $input     = qs<HTMLInputElement>("input")
const $messages  = qs<HTMLUListElement>("ul")
const $container = qs<HTMLElement>("main")
const $button    = qs<HTMLButtonElement>("button")
const $info      = qs<HTMLElement>("small")

const $loading = createLoadingItem()
$messages.appendChild($loading)

const messages: ChatMessage[] = []
let initialized = false

const SELECTED_MODEL = "TinyLlama-1.1B-Chat-v0.4-q4f32_1-MLC"

const engine = await (CreateWebWorkerMLCEngine as (
  worker: Worker,
  model: string,
  opts: { initProgressCallback: (info: InitProgressReport) => void }
) => Promise<MLCEngine>)(
  new Worker("./worker.js", { type: "module" }),
  SELECTED_MODEL,
  {
    initProgressCallback: (info: InitProgressReport) => {
      $info.textContent = info.text
      if (info.progress >= 1 && !initialized) {
        initialized = true
        $loading.remove()
        $button.removeAttribute("disabled")
        addMessage(
          "¡Hola! Soy un ChatGPT que se ejecuta completamente en tu navegador. ¿En qué puedo ayudarte hoy?",
          "bot"
        )
        $input.focus()
      }
    },
  }
)

$form.addEventListener("submit", async (event: SubmitEvent) => {
  event.preventDefault()
  const messageText = $input.value.trim()
  if (!messageText) return

  $input.value = ""
  addMessage(messageText, "user")
  $button.setAttribute("disabled", "")
  messages.push({ role: "user", content: messageText })

  const [, $botP] = addMessage("", "bot")
  let reply = ""

  const chunks = await engine.chat.completions.create({ messages, stream: true })

  for await (const chunk of chunks) {
    const content = chunk.choices[0]?.delta?.content ?? ""
    reply += content
    $botP.textContent = reply
  }

  $button.removeAttribute("disabled")
  messages.push({ role: "assistant", content: reply })
  $container.scrollTop = $container.scrollHeight
})

function addMessage(text: string, sender: Sender): [HTMLLIElement, HTMLParagraphElement] {
  const [li, p] = createMessageItem(text, sender)
  $messages.appendChild(li)
  $container.scrollTop = $container.scrollHeight
  return [li, p]
}