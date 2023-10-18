//Написать программу, которая через prompt считывает число и выводит в консоль число равное 10 % от введенного числа

const number = +prompt("Задание 1. Введите число- ")
const percent = 10
const numberAfterCounting = number / 100 * percent
console.log(`10% от числа ${number} - это ${numberAfterCounting}`)

//Написать программу, которая получает два числа и выводит наименьшее

const number1 = 10
const number2 = 30
console.log ("Задание 2.")
if(number1<number2){
    console.log(`Наименьшее число ${number1}`)
} else if (number1>number2) {
    console.log(`Наименьшее число ${number2}`)
} else  {
    console.log(`Числа равны`)
}

//Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

const numberNew = prompt("Задание 3. Введите число- ")
if (numberNew < 100) {
    console.log(`Число ${numberNew} меньше 100 `)
} else if (numberNew > 100) {
    console.log(`Число ${numberNew} больше 100`)
} else {
    console.log(`Число равно 100`)
}

//Написать программу, которая запрашивает у пользователя его имя и возраст(в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.

const name = prompt("Задание 4. Введите Ваше имя-")
const age = +prompt("Введите кол-во Ваших полных лет-")

if (age >= 18) {
    console.log(`Hello, ${name} `)
} else {
    console.log(`Hi, ${name} `)

}