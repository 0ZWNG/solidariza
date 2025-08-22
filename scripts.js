// Funções para acessibilidade
let currentFontSize = 1;

function increaseFontSize() {
    currentFontSize += 0.1;
    document.body.style.fontSize = currentFontSize + 'em';
}

function decreaseFontSize() {
    if (currentFontSize > 0.5) {
        currentFont

