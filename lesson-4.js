// const number = Number(prompt("Введіть число"));
// if (number >= 50 && number <= 100) {
//   console.log("Все кул");
// } else {
//   console.log("Погано");
// }

// 1
const x = "";
const y = "";
if (x !== "" && y !== "") {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

// 2
const number1 = 10;
const number2 = 5;
const summe = number1 + number2;
if (summe >= 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}

// 3
const zminna = " Я використовую JavaScript";
if (zminna.includes("JavaScript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

// 4
const counter = prompt("Введіть число від 10 до 20");
if (counter >= 10 && counter <= 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}

//5
const Name = "Yaroslav";
const mail = "dmytro1337@gmail.com";
const passwort = "dimon1234";
if (
  Name.length >= 3 &&
  mail.includes("@") &&
  mail.includes(".") &&
  passwort.length >= 6
) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка: неправильне заповнення");
}
