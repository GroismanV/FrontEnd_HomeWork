/* function duplicateEncode(word) {
  // ...

  let myArray = word.split("");
}
for (let i = 0; i < myArray.lenght; i++) {
  for (let j = 0; j < myArray.lenght; j++) {
    if (myArray[i] == myArray[j] && i !== j) {
      newArray[i] = newArray[i].push("(");
    } else if (i == j || myArray[i] !== myArray[j]) {
      newArray[i] = newArray[i].push(")");
    }
  }
}
console.log(duplicateEncode("testosteron"));
 */

// Функция, возвращающая отсортированный массив подстрок a1, которые являются подстроками строк из a2
function inArray(a1, a2) {
    let result = []; // Итоговый массив
    // Перебираем каждую строку из a1
    for (let s1 of a1) {
        // Перебираем каждую строку из a2
        for (let s2 of a2) {
            // Проверяем, является ли s1 подстрокой s2 и не была ли уже добавлена в результат
            if (s2.includes(s1) && !result.includes(s1)) {
                result.push(s1); // Добавляем подстроку в результат, если она удовлетворяет условиям
            }
        }
    }
    return result.sort(); // Возвращаем отсортированный результат
}

// Пример 1
let a1 = ["arp", "live", "strong"];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
console.log(inArray(a1, a2));  // Вывод: ['arp', 'live', 'strong']

// Пример 2
a1 = ["tarp", "mice", "bull"];
a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
console.log(inArray(a1, a2));  // Вывод: []
