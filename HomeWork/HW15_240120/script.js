import {quotes} from './quotesArray'

// 1) Добавить файл quotes.js.к себе в проект
// 2) добавить у основого js файла type = "module"
// 3) импортировать к себе в файл  цитаты
// 4) создать кнопку, которая будет менять цитаты на страницу при помощт js dom
// 5) создать функцию, которая будет выбирать из массива рандомную цитату
// 6) создать контейнер для цитаты
// 7) функция возвращает объект, вам необходимо его обработать и отобразить на странице


// main.js
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
// main.js
function displayQuote(quote) {
    const quoteContainer = document.getElementById('quoteContainer');
    quoteContainer.innerHTML = `
    <p>"${quote.text}"</p>
    <p>- ${quote.author}</p>
  `;
}
// main.js
document.getElementById('changeQuoteBtn').addEventListener('click', () => {
    const randomQuote = getRandomQuote();
    displayQuote(randomQuote);
});

