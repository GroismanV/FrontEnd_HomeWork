// уровень сложности: Напишите класс Circle, который принимает радиус в качестве параметра конструктора. Добавьте метод area, который возвращает площадь круга, и метод circumference, возвращающий длину окружности.

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return 3.14 * this.radius ** 2;
  }
  circumference() {
    return 2 * 3.14 * this.radius;
  }
}

// Создайте класс Book, который принимает название книги, автора и количество страниц в качестве параметров конструктора. Добавьте метод info, который выводит информацию о книге в формате "Книга: [название], Автор: [автор], Страниц: [количество]".

class Book {
  constructor(bookName, autorName, numberPages) {
    this.bookName = bookName;
    this.autorName = autorName;
    this.numberPages = numberPages;
  }
  info() {
    return `Книга: ${this.bookName}, Автор: ${this.autorName}, Страниц: ${this.numberPages}`;
  }
}

// Напишите класс BankAccount, который принимает имя владельца и начальный баланс. Добавьте методы deposit и withdraw для управления счетом.

class BankAccount {
  constructor(cardholderName, startingBalance) {
    this.cardholderName = cardholderName;
    this.balance = startingBalance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`${amount} внесено на счёт ${this.cardholderName}`);
      console.log(`Текущий счёт составляет ${this.balance}`);
    } else {
      console.log(`Невозможно внести нулевую или отрицательную сумму`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`${amount} снято со счёта ${this.cardholderName}`);
      console.log(`Текущий счёт составляет ${this.balance}`);
    } else if (amount > this.balance) {
      console.log(`Недостаточно средств.`);
    } else {
      console.log(`Нельзя снять ноль или отрицательную сумму`);
    }
  }
}

const account = new BankAccount("Иван", 1000); // Создаем счет с именем "Иван" и начальным балансом 1000
account.deposit(500); // Вносим на счет 500
account.withdraw(200); // Снимаем со счета 200
account.withdraw(2000); // Пытаемся снять слишком много
account.deposit(-100); // Пытаемся внести отрицательную сумму

// Создайте класс Animal, который принимает имя и тип (например, "кот" или "собака") в качестве параметров конструктора. Добавьте метод sound, который выводит звук, производимый животным.

class Animal {
  constructor(animalName, animalType) {
    this.animalName = animalName;
    this.animalType = animalType;
  }
  sound() {
    switch (this.animalType) {
      case "Cat":
        console.log(`${this.animalName} мяукает`);
        break;
      case "Dog":
        console.log(`${this.animalName} лает`);
        break;
    }
  }
}

// Напишите класс Email, который принимает адрес электронной почты в качестве параметра конструктора. Добавьте методы send, receive, reply, чтобы моделировать основные функции электронной почты. Например, send - Отправка с адреса … получателю … произведена успешно, или можете поэксперементировать от себя

class Email {
  constructor(emailAddress) {
    this.emailAddress = emailAddress;
  }
  send(recipient, subject, text) {
    console.log(
      `Отправка с адреса ${this.emailAddress} на адрес ${recipient}:`
    );
    console.log(`Тема: ${subject}`);
    console.log(`Тело письма: ${text}`);
    console.log(`Письмо успешно отправлено.`);
  }
  receive(sender, subject, text) {
    console.log(`Получено письмо от адреса ${sender}:`);
    console.log(`Тема: ${subject}`);
    console.log(`Тело письма: ${text}`);
  }

  reply(recipient, subject, text) {
    console.log(
      `Ответ на письмо от адреса ${this.emailAddress} на адрес ${recipient}:`
    );
    console.log(`Тема: ${subject}`);
    console.log(`Тело письма: ${text}`);
    console.log(`Ответ успешно отправлен.`);
  }
}
// Пример использования класса Email
const myEmail = new Email("myemail@example.com");

myEmail.send("friend@example.com", "Привет!", "Привет, как дела?");
myEmail.receive(
  "sender@example.com",
  "Важное сообщение",
  "Вам нужно срочно ответить на это письмо."
);
myEmail.reply(
  "friend@example.com",
  "Re: Привет!",
  "Привет, у меня все хорошо, спасибо за спрос."
);
