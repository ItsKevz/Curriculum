export function createDivButton(text: string): HTMLElement {
    const button = document.createElement('div');
    button.textContent = text;
    button.classList.add('button');
    button.addEventListener('click', () => {
        console.log(`Botón DIV presionado`);
    })
    return button;
}

export function createSpanButton(text: string): HTMLElement {
    const button = document.createElement('span');
    button.textContent = text;
    button.classList.add('button');
    button.addEventListener('click', () => {
        console.log(`Botón SPAN presionado`);
    })
    return button;
}

export function createImageButton(src: string): HTMLElement {
    const button = document.createElement('img');
    (button as HTMLImageElement).src = src;
    (button as HTMLImageElement).alt = 'Botón imagen';
    button.classList.add('button', 'button-image');
    button.addEventListener('click', () => {
        console.log(`Botón IMG presionado`);
    })
    return button;
}

export function createParagraphButton(text: string): HTMLElement {
    const button = document.createElement('p');
    button.textContent = text;
    button.classList.add('button');
    button.addEventListener('click', () => {
        console.log(`Botón PARAGRAPH presionado`);
    })
    return button;
}

export function createLinkButton(text: string): HTMLElement {
    const button = document.createElement('a');
    button.textContent = text;
    button.classList.add('button');
    button.href = '#';
    button.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`Botón LINK presionado`);
    })
    return button;
}

export function createArticleButton(text: string): HTMLElement {
    const button = document.createElement('article');
    button.textContent = text;
    button.classList.add('button');
    button.addEventListener('click', () => {
        console.log(`Botón ARTICLE presionado`);
    })
    return button;
}

export function createHeaderButton(text: string): HTMLElement {
    const button = document.createElement('h2');
    button.textContent = text;
    button.classList.add('button');
    button.addEventListener('click', () => {
        console.log(`Botón HEADER presionado`);
    })
    return button;
}

export function createListButton(text: string): HTMLElement {
    const button = document.createElement('li');
    button.textContent = text;
    button.classList.add('button');
    button.addEventListener('click', () => {
        console.log(`Botón LIST presionado`);
    })
    return button;
}

export function createSectionButton(text: string): HTMLElement {
    const button = document.createElement('section');
    button.textContent = text;
    button.classList.add('button');
    button.addEventListener('click', () => {
        console.log(`Botón SECTION presionado`);
    })
    return button;
}
