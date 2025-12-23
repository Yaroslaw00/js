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
