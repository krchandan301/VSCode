// Premitive Type

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`ScoreOne : ${scoreOne}`, `ScoreTwo : ${scoreTwo}`);

scoreOne = 100;
console.log(`ScoreOne : ${scoreOne}`, `ScoreTwo : ${scoreTwo}`);

//refrence typr
const userOne = {name: "Chandan", age: 25};
const userTwo = userOne;
console.log(userOne, userTwo);

userOne.age = 30;
console.log(userOne, userTwo);