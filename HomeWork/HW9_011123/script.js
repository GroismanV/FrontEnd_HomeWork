/* Домашнее задание 9. (после 22 урока)

Решить следующие задачи:
Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.
*/
const redSquare = document.querySelector(".red-square");
const actionButton = document.querySelector(".action-button");
actionButton.addEventListener("click", function () {
  redSquare.classList.add("green-square");
});

/* Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата. */
const pinkSquare = document.querySelector(".pink-square");
const blueButton = document.querySelector(".blue-button");
blueButton.addEventListener("click", function () {
  pinkSquare.style.backgroundColor = "blue";
  console.log(pinkSquare.style.backgroundColor);
});
/* 

Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px. */

const squareUp = document.querySelector(".square-up");
const buttonUp = document.querySelector(".button-up");
buttonUp.addEventListener("click", function (event) {
  const newWidth = squareUp.style.widht + 20;
  const newHeight = squareUp.style.height + 20;
  squareUp.style.widht = newWidth + "px";
  squareUp.style.height = newHeight + "px";
});

/* Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный. */

const root = document.querySelector(".root");
const rootButton = document.querySelector(".button-root");

rootButton.addEventListener("click", function () {
  const paragraph = document.createElement("p");
  paragraph.innerText = "Параграф синего цвета";
  paragraph.style.color = "blue";
  root.append(paragraph);
});

/* 
Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий. */

 
    document.addEventListener('DOMContentLoaded', function () {
      const addButton = document.getElementById('addParagraphBtn');
      const rootDiv = document.getElementById('root');
      let paragraphCount = 0;

      addButton.addEventListener('click', function () {
        const paragraph = document.createElement('p');
        
        if (paragraphCount % 2 == 0) {
          paragraph.textContent = 'Синий параграф';
          paragraph.classList.add('blue');
        } else {
          paragraph.textContent = 'Зеленый параграф';
          paragraph.classList.add('green');
        }

        rootDiv.appendChild(paragraph);
        paragraphCount++;
      });
    });