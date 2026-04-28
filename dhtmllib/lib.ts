// div
export function CreateDiv(id?: string, clase?: string): HTMLDivElement {
  const element = document.createElement('div');
  if (id) element.id = id;
  if (clase) element.className = clase;
  return element;
}
// span
export function CreateSpan(clase?: string, content?: string): HTMLSpanElement {
  const element = document.createElement('span');
  if (clase) element.className = clase;
  if (content) element.textContent = content;
  return element;
}
// section
export function CreateSection(id?: string): HTMLElement {
  const element = document.createElement('section');
  if (id) element.id = id;
  return element;
}
// header
export function CreateHeader(clase?: string): HTMLElement {
  const element = document.createElement('header');
  if (clase) element.className = clase;
  return element;
}
// footer
export function CreateFooter(clase?: string): HTMLElement {
  const element = document.createElement('footer');
  if (clase) element.className = clase;
  return element;
}