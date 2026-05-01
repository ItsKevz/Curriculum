// HI.ts
function createButtonEvP(text, id, css_class, evt) {
  const buttonHi = document.createElement("button");
  buttonHi.textContent = text;
  buttonHi.id = id;
  buttonHi.classList.add(css_class);
  buttonHi.addEventListener(evt.event, evt.handler);
  return buttonHi;
}
function createInjectorButton(text, html) {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", () => {
    const appDiv = document.getElementById("App");
    if (appDiv) {
      appDiv.innerHTML = html;
    }
  });
  document.body.appendChild(button);
}
function createInjectorButtonAdvanced(text, html, b) {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", () => {
    const appDiv = document.getElementById("App");
    if (appDiv) {
      appDiv.innerHTML = "";
      appDiv.appendChild(b);
    }
  });
  document.body.appendChild(button);
  return button;
}
var button3 = createButtonEvP("console", "03", "clb", {
  event: "click",
  handler: () => {
    console.log("evento ejecutado");
  }
});
document.body.appendChild(button3);
createInjectorButton("Inyectar HTML", "<p style='background-color: yellow; padding: 20px;'>¡HTML inyectado!</p>");
createInjectorButton("Página Azul", "<p style='background-color: blue; color: white; padding: 20px;'>Contenido Azul</p>");
createInjectorButton("Página Roja", "<div style='background-color: red; color: white; padding: 20px;'>Contenido Rojo</div>");
var button1 = createButtonEvP("Botón Inyectado", "btn1", "clb", {
  event: "click",
  handler: () => {
    console.log("Botón 1 presionado");
  }
});
var bx = createInjectorButtonAdvanced("Inyectar HTML", "<p><strong>¡HTML inyectado!</strong></p>", button1);
createInjectorButtonAdvanced("2 Inyectar HTML", "<div style='background-color: #FF0000; padding: 20px; color: white;'>Este div tiene un fondo rojo.</div>", bx);
var experimentBtn1 = createButtonEvP("Experimento: Multi-Componentes", "exp1", "clb", {
  event: "click",
  handler: () => {
    const appDiv = document.getElementById("App");
    if (appDiv) {
      appDiv.innerHTML = "";
      let comp1 = document.createElement("p");
      comp1.textContent = "Componente 1";
      comp1.style.backgroundColor = "#e3f2fd";
      comp1.style.padding = "10px";
      comp1.style.margin = "10px 0";
      let comp2 = document.createElement("p");
      comp2.textContent = "Componente 2";
      comp2.style.backgroundColor = "#f3e5f5";
      comp2.style.padding = "10px";
      comp2.style.margin = "10px 0";
      appDiv.appendChild(comp1);
      appDiv.appendChild(comp2);
    }
  }
});
document.body.appendChild(experimentBtn1);
var chain1 = createButtonEvP("Chain 1", "chain1", "clb", {
  event: "click",
  handler: () => {
    console.log("Presionado: Chain 1");
  }
});
var chain2 = createInjectorButtonAdvanced("Chain 2 (inyecta Chain 1)", "", chain1);
var chain3 = createInjectorButtonAdvanced("Chain 3 (inyecta Chain 2)", "", chain2);
var clearButton = createButtonEvP("Limpiar #App", "clear", "clb", {
  event: "click",
  handler: () => {
    const appDiv = document.getElementById("App");
    if (appDiv) {
      appDiv.innerHTML = "aqui se inyecta el html";
    }
  }
});
document.body.appendChild(clearButton);
