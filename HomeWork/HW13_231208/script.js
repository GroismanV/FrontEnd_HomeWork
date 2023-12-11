/*  Создать 3 input поле и также 4 кнопки, каждая кнопка будет выполнять определённое действие и будет вызывать свой метод */

/* Создать функцию checkEquality с помощью которого проверяем равны ли все 3 значение внутри input-ов или нет
Например если 3, 3, 3 то в результате должны получать "Все поле равны" если нет то пишем "Все поле не равны" */

function checkEquality() {
  let input1 = +document.querySelector(".input-1").value;
  let input2 = +document.querySelector(".input-2").value;
  let input3 = +document.querySelector(".input-3").value;
  let result = "";

  if (input1 === input2 && input2 === input3) {
    result = "Все поля равны";
  } else {
    result = "Все поля не равны";
  }
  return document.querySelector(".result").innerText;
}

/* Создать функцию hasZero с помощью которого проверяем есть ли поле которое равно 0 если есть пишем "Да, есть", если нет пишем просто "Нет"
Например если будет 1, 2, 0 то результат будет "Да, есть", а если будет 1, 2, 3 то результат "Нет" */
function hasZero() {
  let input1 = +document.querySelector(".input-1").value;
  let input2 = +document.querySelector(".input-2").value;
  let input3 = +document.querySelector(".input-3").value;
  let result = "";
  if (input1 === 0 || input2 === 0 || input3 === 0) {
    result = "Да есть";
  } else {
    result = "Нет";
  }
  return document.querySelector(".result").innerText;
}

/* Создать функцию sameOne с помощью которого проверяем есть ли поле которое совпадают, если есть пишем "Да, есть", если нет пишем просто "Нет"
Например если будет 1, 1, 0 то результат будет "Да, есть", а если будет 1, 2, 3 то результат "Нет" */
function sameOne() {
  let input1 = +document.querySelector(".input-1").value;
  let input2 = +document.querySelector(".input-2").value;
  let input3 = +document.querySelector(".input-3").value;
  let result = "";
  if (input1 === input2 || input1 === input3 || input2 === input3) {
    result = "Да, есть";
  } else {
    result = "Нет";
  }
  return document.querySelector(".result").innerText;
}
