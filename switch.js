// 1. Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch
const drink = "Кава";
switch (drink) {
  case "Кава":
    console.log("Користувач обрав каву");
    break;
  case "Чай":
    console.log("Користувач обрав чай");
    break;
  case "Сік":
    console.log("Користувач обрав сік");
    break;
  default:
    console.log("Такого в меню нема");
    break;
}

// 2.Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.
const day = "Monday";
switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Це робочий день");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Це вихідний");
    break;
  default:
    console.log("Такого дня не існує");
    break;
}

// 3.Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.

const month = 0;
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Пора року Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Пора року Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Пора року Літо");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Пора року Осінь");
    break;

  default:
    console.log("Такої пори року нема, братиш");
    break;
}

// 4.Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

const color = "green";
switch (color) {
  case "green":
    console.log("Йти");
    break;
  case "red":
    console.log("Стоп");
    break;
  case "yellow":
    console.log("Чекати");
    break;

  default:
    console.log("Такого кольору нема, братиш");
    break;
}

// 5.Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попереджен
let a = 10;
let b = 0;
let operator = "/"; // "+", "-", "*", "/"

let result;

switch (operator) {
  case "+":
    result = a + b;
    break;

  case "-":
    result = a - b;
    break;

  case "*":
    result = a * b;
    break;

  case "/":
    result = a / b;
    console.warn("Помилка: ділення на нуль!");

    break;

  default:
    console.warn("Невідомий оператор");
}
