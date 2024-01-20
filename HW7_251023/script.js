/* Домашнее задание 7. (после 17 урока)
Решить следующие задачи:

Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них. */

function comparison(number1, number2) {
  if (number1 > number2) {
    return number2;
  }
  return number1;
}

/* Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
 */
function printEvenNumbers(number1, number2) {
let maxNumber
let minNumber
  if (number1 < number2) {
     maxNumber = number2;
     minNumber = number1;
  } else {
    maxNumber = number1;
    minNumber = number2;
  }
  if (maxNumber % 2 != 0) {
    maxNumber = maxNumber - 1;
  }
  for (let index = maxNumber; index >= minNumber; index -= 2) {
    console.log(index);
  }
}
printEvenNumbers(30, 10);

/* Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень)
 и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
 */
function power(arg1, arg2=2) {
  return arg1 ** arg2;
}

console.log(power(3,3));

/* Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
 */
function sum(n) {
   let sum = 0;
  for (let i = 1; i < n; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sum(4))

/* Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел  и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных). */
number(10,20)
function number(n, m) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = n; i <= m; i++) {
    if ((i % 2) == 0) {
      sumEven = sumEven + i;
    } else {
      sumOdd = sumOdd + i;
    }
  }
  return sumEven, sumOdd;
}

console.log(`Сумма чётных- ${sumEven}
            Сумма нечётных- ${sumOdd}`)

/* Напишите функцию, которая принимает в качестве аргументов массив строк,
 а возвращает первый самый длинный элемент массива. Если входной массив пуст,
 функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.
Пример: [ 'one', 'two', 'three' ] => 'three'
 */


let arg = ["one", "two", "three"];
function maxString(arg) {
  if (arg.length==0) {
    return null
  }
  let lengthMaxString = "";
  for (let i = 0; i < arg.length; i++) {
    if (lengthMaxString.length < arg[i].length) {
      lengthMaxString = arg[i];
    }
  }
  return lengthMaxString;
}
console.log(maxString(arg));