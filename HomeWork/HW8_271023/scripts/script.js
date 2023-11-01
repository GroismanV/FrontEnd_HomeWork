/* Домашнее задание 8. (после 19 урока)

Решить следующие задачи:

    Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers. */

// const numDiv = document.querySelector(".numbers")

// for (let i = 100; i >= 50; i -= 10) {
//   const paragraph = document.createElement("p")
//   paragraph.textContent = i
//   numDiv.appendChild(paragraph)
// }

/* Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные. */

// let stringsArray = ["А роза ", "упала ", "на лапу ", "Азора. "]
// createElement(<div class="strings_container"></div>);

// for (let i = 0; i < stringsArray.length; i++) {
//   const paragraph = document.createElement(<p></p>)
// }

/* Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.
 */

const arrayUsers = [
  {
    first_name: "Vasia",
    last_name: "Ivanov",
    age: 33,
  },
  {
    first_name: "Fedia",
    last_name: "Petrov",
    age: 44,
  },
  {
    first_name: "Misha",
    last_name: "Sidorov",
    age: 16,
  },
  {
    first_name: "Gena",
    last_name: "Kuzin",
    age: 10,
  },
  {
    first_name: "Kuzia",
    last_name: "Muzin",
    age: 19,
  },
];

const usersArea = document.querySelector(".users_container");

for (let i = 0; i < arrayUsers.length; i++) {
  if (arrayUsers[i].age >= 18) {
    usersArea.insertAdjacentHTML(
      "beforeend",
      `<div class="user">
                    <h3>${arrayUsers[i].first_name} ${arrayUsers[i].last_name}</h3>
                    <p>Возраст: ${arrayUsers[i].age} лет</p>
                    </div>`
    );
  }
}