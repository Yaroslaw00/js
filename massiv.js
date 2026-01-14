// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
// const numbers = [1, 20, 45];
// numbers[1] = 10;
// console.log(numbers);

// Створити масив із трьох рядків. Додати до масиву ще одну рядків.
// const strings = ["apple", "banana", "cherry"];
// strings.push("ovosch");
// console.log(strings);

// Створити скрипт який поверне суму всіх чисел в масиві.
// const Number1 = [10, 20, 30, 40];
// let um = 0;

// for (let i = 0; i < Number1.length; i++) {
//   um += Number1[i];
// }
// console.log(um);

// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

// const numbers = [3, 7, 12, 25, 40];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
// const words = ["яблуко", "банан", "вишня", "груша", "слива"];
// let i = 0;
// while (i < words.length) {
//   if (words[i].length > 5) {
//     console.log(words[i]);
//   }
//   i++;
// }

// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

// const Number1 = [5, 12, 7, 20, 33, 18, 41, 6, 9, 24];

// console.log(Math.max(...Number1));
// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

const numbers = [12, 7, 5, 20, 33, 18, 41, 6, 9, 24];
let i = 0;
while (i < numbers.length) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
  i++;
}
