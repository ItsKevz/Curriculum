import { JSDOM } from "jsdom"

const htmlPath = `${import.meta.dir}/index.html`
const html: string = await Bun.file(htmlPath).text()
const dom: JSDOM = new JSDOM(html)
const document: Document = dom.window.document
document.body.innerHTML = ""

globalThis.window = dom.window as unknown as Window & typeof globalThis
globalThis.document = document

const {
  CreateDiv,
  CreateSpan,
  CreateSection,
  CreateHeader,
  CreateFooter
} = await import('./lib')

// header
const header = CreateHeader('pageHeader') as HTMLElement;
header.textContent = 'Mi Sitio Web';

// Div
const container = CreateDiv('container', 'mainContainer') as HTMLDivElement;

// Section
const aboutSection = CreateSection('about') as HTMLElement;
aboutSection.innerHTML = '<h2>Acerca De</h2><p>prueba</p>';

// Span
const textSpan = CreateSpan('highlight', 'Texto resaltado') as HTMLSpanElement;

// footer
const footer = CreateFooter('pageFooter') as HTMLElement;
footer.textContent = 'Pie de página';

// Agregar elementos al contenedor
container.appendChild(aboutSection);
container.appendChild(textSpan);

// Renderizar en el DOM
document.body.appendChild(header);
document.body.appendChild(container);
document.body.appendChild(footer);

await Bun.write(htmlPath, dom.serialize())
