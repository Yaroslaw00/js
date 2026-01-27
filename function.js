// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

const students = ["firstStas", "secondStas", "Oleksiy", "Egor", "Yaroslav"];
let a = "";
for (let i = 0; i < students.length; i++) {
  a += students[i];
  if (i !== students.length - 1) {
    a += ", ";
  }
}
console.log(a);
// const message = "Пусть каждый день приносит радость снова";
// function changeString(message) {
//   if (message.length > 30) {
//     console.log(message.slice(0, 30) + "...");
//   } else {
//     console.log(message);
//   }
// }
// changeString(message);
// const message1 = "Пусть каждый день";

// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

function calculateEngravingPrice(message, pricePerWord) {
  const tomassiv = message.split(" ");

  const wordnumber = tomassiv.length;
  return pricePerWord * wordnumber;
}
const TotalPrice = calculateEngravingPrice("Хочу піти додому дуже сильно", 15);
console.log(TotalPrice);

// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

function findLongestWord(string) {
  const stringmassiv = string.split(" ");
  let longword = stringmassiv[0];
  for (let i = 0; i < stringmassiv.length; i++) {
    const word = stringmassiv[i];
    if (longword.length < word.length) {
      longword = word;
    }
  }
  return longword;
}
const longestword = findLongestWord("Я не можу грати в футбол");
console.log(longestword);

// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.

function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
}

const STtring = formatString(
  "Це дуже довгий рядок який точно має більше ніж сорок символів",
);
console.log(STtring);

// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

function checkForSpam(message) {
  if (message.includes("spam") || message.includes("sale")) {
    return true;
  } else {
    return false;
  }
}
const Message = checkForSpam(
  "This message is not spam, it’s a limited-time sale with huge discounts just for you!",
);
console.log(Message);

// Напиши скрипт з наступним функціоналом:

// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.

const input = prompt("Введіть число");
const numbers = [];
let Continue = true;
while (Continue) {
  numbers.push(input);
  if (input == null) {
    Continue = false;
    console.log(Continue);
  }
}
console.log(numbers);
