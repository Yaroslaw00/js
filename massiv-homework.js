// 1
// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// let a = "";
// for (let i = 0; i < friends.length; i++) {
//   a += friends[i];
//   if (i !== friends.length - 1) {
//     a += ",";
//   }
//   console.log(a);
// }
// const number = [1, 2, 3, 4, 5];
// console.log(number.join(","));

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
const index = cards.indexOf("Карточка-3");

if (index !== -1) {
  cards.splice(index, 1);
}
console.log(cards);
const card6 = "Карточка-6";
const indexToPush = cards.indexOf("Карточка-6");
if (indexToPush == -1) {
  console.log(cards.push(card6));
}

const indexToUpdate = cards.indexOf("Карточка-4");
if (indexToUpdate !== -1) {
  cards[indexToUpdate] = "Карточка-43";
  console.log(cards);
}
