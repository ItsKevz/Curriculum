# Autor:Kevin Omar Camacho Sanchez
# Proyecto: Simulación de Botones

## Descripción

Este proyecto implementa una simulación de botones funcionales utilizando diferentes elementos HTML que originalmente no fueron diseñados como botones. 

Se demuestra cómo combinar **HTML**, **CSS**, **TypeScript** y **eventos del DOM** para crear componentes interactivos que se comportan como botones verdaderos.

## Ejecución

### 1.- Construccion y despligue:
bun build ./src/main.ts --outdir ./dist --target browser && bunx http-server


### 2.- Abrir en el navegador
- Abre tu navegador en: `http://localhost:8000`


## Cómo funciona

1. **buttons.ts**: Define 9 funciones que crean cada uno de los botones
2. **main.ts**: Importa las funciones y las utiliza para generar los botones en el DOM
3. **index.html**: Contiene la estructura base, estilos CSS y carga el script compilado

En la consola del navegador al presionar los botones se mostrara el texto correspondiente.

Botón DIV presionado
Botón SPAN presionado
Botón IMG presionado
Botón PARAGRAPH presionado
Botón LINK presionado
Botón ARTICLE presionado
Botón HEADER presionado
Botón LIST presionado
Botón SECTION presionado

