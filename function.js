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
