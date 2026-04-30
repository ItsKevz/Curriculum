// src/buttons.ts
function createDivButton(text) {
  const button = document.createElement("div");
  button.textContent = text;
  button.classList.add("button");
  button.addEventListener("click", () => {
    console.log(`Botón DIV presionado`);
  });
  return button;
}
function createSpanButton(text) {
  const button = document.createElement("span");
  button.textContent = text;
  button.classList.add("button");
  button.addEventListener("click", () => {
    console.log(`Botón SPAN presionado`);
  });
  return button;
}
function createImageButton(src) {
  const button = document.createElement("img");
  button.src = src;
  button.alt = "Botón imagen";
  button.classList.add("button", "button-image");
  button.addEventListener("click", () => {
    console.log(`Botón IMG presionado`);
  });
  return button;
}
function createParagraphButton(text) {
  const button = document.createElement("p");
  button.textContent = text;
  button.classList.add("button");
  button.addEventListener("click", () => {
    console.log(`Botón PARAGRAPH presionado`);
  });
  return button;
}
function createLinkButton(text) {
  const button = document.createElement("a");
  button.textContent = text;
  button.classList.add("button");
  button.href = "#";
  button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(`Botón LINK presionado`);
  });
  return button;
}
function createArticleButton(text) {
  const button = document.createElement("article");
  button.textContent = text;
  button.classList.add("button");
  button.addEventListener("click", () => {
    console.log(`Botón ARTICLE presionado`);
  });
  return button;
}
function createHeaderButton(text) {
  const button = document.createElement("h2");
  button.textContent = text;
  button.classList.add("button");
  button.addEventListener("click", () => {
    console.log(`Botón HEADER presionado`);
  });
  return button;
}
function createListButton(text) {
  const button = document.createElement("li");
  button.textContent = text;
  button.classList.add("button");
  button.addEventListener("click", () => {
    console.log(`Botón LIST presionado`);
  });
  return button;
}
function createSectionButton(text) {
  const button = document.createElement("section");
  button.textContent = text;
  button.classList.add("button");
  button.addEventListener("click", () => {
    console.log(`Botón SECTION presionado`);
  });
  return button;
}

// src/main.ts
var container = document.getElementById("buttons-container");
if (container) {
  container.appendChild(createDivButton("Botón DIV"));
  container.appendChild(createSpanButton("Botón SPAN"));
  container.appendChild(createImageButton("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JTUc8L3RleHQ+PC9zdmc+"));
  container.appendChild(createParagraphButton("Botón PARAGRAPH"));
  container.appendChild(createLinkButton("Botón LINK"));
  container.appendChild(createArticleButton("Botón ARTICLE"));
  container.appendChild(createHeaderButton("Botón HEADER"));
  container.appendChild(createListButton("Botón LIST"));
  container.appendChild(createSectionButton("Botón SECTION"));
}
