// 1 уровень сложности: Создание класса Employee: Создайте класс Employee с конструктором, который принимает три параметра: name, age, position.Конструктор должен инициализировать соответствующие свойства объекта.
class Employee {
    constructor(name, age, position) {
        this.name = name
        this.age = age
        this.position = position
    }

    // Добавление метода getInfo(): Добавьте в класс Employee метод getInfo(), который возвращает строку с информацией о сотруднике в формате "Имя: Возраст, Должность".
    getInfo() {
        return console.log(`Имя: ${this.name}, Возраст${this.age}, Должность${this.position}`);
    }
}

// Фильтрация сотрудников по должности:
// Напишите функцию filterEmployeesByPosition, которая принимает два параметра: список сотрудников(employees) и должность(position).
// Отфильтруйте список сотрудников по заданной должности.
// Используйте метод map, чтобы преобразовать отфильтрованный список в список имен сотрудников.
// Функция должна возвращать массив имен сотрудников с заданной должностью.

// Создайте несколько объектов сотрудников, используя класс Employee.

// Используйте функцию filterEmployeesByPosition для фильтрации сотрудников по их должности.

// Результат фильтрации в вывести на страницу во втором модальном окне на вашем сайте pallas cat studio.результат выложить на гитхаб в прошлый проект, но разделите новый код комментариями!!


function filterEmployeesByPosition(employees, position) {

    const filteredEmployees = getInfo().filter(employees => employees.position === position)
    const names = filteredEmployees.map(employee => employee.name);
    return names;
}
// console.log(filterEmployeesByPosition());

const employee1 = new Employee("Vasia", 20, "Fotograf")
const employee2 = new Employee("Petia", 25, "Cameraman")
const employee3 = new Employee("Vitia", 30, "Redactor")
const employee4 = new Employee("Olia", 35, "Director")
const employee5 = new Employee("Valia", 35, "Cameraman")
const employee6 = new Employee("Jenia", 34, "Cameraman")

const filteredNames = filterEmployeesByPosition(position, "Developer");

console.log(filteredNames)