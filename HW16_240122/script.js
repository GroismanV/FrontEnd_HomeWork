// Описание задания.
//  1 уровень сложности: Задача 1
// Задача на понимание объектов, указан массив с данными пользователей

// getLoan - Отобразить только тех пользователей у кого зарплата больше 200$ и они старше 20 лет, так как банк остальным не одобряет кредит

const users = [
    {
        id: 1,
        username: "Jon",
        age: 20,
        status: "online",
        lastActivity: 0,
        salary: 150
    },
    {
        id: 2,
        username: "Anna",
        age: 32,
        status: "offline",
        lastActivity: 25,
        salary: 300
    },
    {
        id: 3,
        username: "Bob",
        age: 19,
        status: "offline",
        lastActivity: 120,
        salary: 100
    },
    {
        id: 4,
        username: "David",
        age: 46,
        status: "online",
        lastActivity: 120,
        salary: 1500
    },
    {
        id: 5,
        username: "Bill",
        age: 18,
        status: "offline",
        lastActivity: 8,
        salary: 2000
    },
];

// const getLoan = users.filter(user => user.salary > 200 && user.age > 20);

// console.log(getLoan);

// getUserNames - Отобразить в console имена тех пользователей кто сейчас в сети

const onlineUsers = users.filter(user => user.status === "online");
const getUserNames = onlineUsers.map(user => user.username);
console.log('Сейчас в сети-', getUserNames);

// getUserNames - Далее отобразить не только тех кто в онлайн, также добавить offline пользователей у кого активность была не больше 10 минут назад, и рядом с offline вывести имена
//    как в примере Jon 10 minutes ago

const onlineUsers1 = users.filter(user => user.status === "online" && user.lastActivity < 10);
const getUserNames1 = onlineUsers1.map(user => user.username);
console.log('Были не более 10 минут назад-', getUserNames1);


// Задача 2

// У вас есть класс Rectangle, представляющий прямоугольник.Ваша задача - добавить методы для вычисления площади и периметра прямоугольника.Также создайте несколько экземпляров класса и выведите результаты в консоль.


//     calculateArea - Метод для вычисления площади прямоугольника

// calculatePerimeter - Метод для вычисления периметра прямоугольника

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
// Создаем несколько экземпляров класса
const rectangle1 = new Rectangle(6, 8);
const rectangle2 = new Rectangle(5, 4);

// Выводим результаты в консоль
console.log("Rectangle 1 Area:", rectangle1.calculateArea());
console.log("Rectangle 1 Perimeter:", rectangle1.calculatePerimeter());

console.log("Rectangle 2 Area:", rectangle2.calculateArea());
console.log("Rectangle 2 Perimeter:", rectangle2.calculatePerimeter());
// Задача 3

// Ваша задача - создать класс TrafficLight, представляющий светофор.У светофора есть три цвета: красный, желтый и зеленый.Реализуйте методы для переключения цветов светофора.

// getCurrentColor - Метод для получения текущего цвета светофора
// switchColor - Метод для переключения цвета светофора

class TrafficLight {
    constructor() {
        this.colors = ['red', 'yellow', 'green'];
        this.currentColorIndex = 0;
    }

    getCurrentColor() {
        return this.colors[this.currentColorIndex];
    }

    switchColor() {
        // Увеличиваем индекс цвета, обеспечивая зацикливание на трех цветах
        this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
    }
}

// Создаем экземпляр класса TrafficLight
const trafficLight = new TrafficLight();

// Выводим в консоль текущий цвет и переключаем цвет светофора
console.log("Current Color:", trafficLight.getCurrentColor());

trafficLight.switchColor();
console.log("After switch, Current Color:", trafficLight.getCurrentColor());

trafficLight.switchColor();
console.log("After switch, Current Color:", trafficLight.getCurrentColor());

// Зацикливаем переключение цветов несколько раз
for (let i = 0; i < 5; i++) {
    trafficLight.switchColor();
    console.log("After switch, Current Color:", trafficLight.getCurrentColor());
}
