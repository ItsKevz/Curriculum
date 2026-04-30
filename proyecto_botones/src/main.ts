import {
    createDivButton,
    createSpanButton,
    createImageButton,
    createParagraphButton,
    createLinkButton,
    createArticleButton,
    createHeaderButton,
    createListButton,
    createSectionButton
} from './buttons';

const container = document.getElementById('buttons-container');

if (container) {
    // Crear todos los botones
    container.appendChild(createDivButton('Botón DIV'));
    container.appendChild(createSpanButton('Botón SPAN'));
    
    // Para la imagen usamos una imagen placeholder
    container.appendChild(createImageButton('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JTUc8L3RleHQ+PC9zdmc+'));
    
    container.appendChild(createParagraphButton('Botón PARAGRAPH'));
    container.appendChild(createLinkButton('Botón LINK'));
    container.appendChild(createArticleButton('Botón ARTICLE'));
    container.appendChild(createHeaderButton('Botón HEADER'));
    container.appendChild(createListButton('Botón LIST'));
    container.appendChild(createSectionButton('Botón SECTION'));
}

