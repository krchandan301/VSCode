//callbacks & forEach
// const myFunc = (callbackFunc) => {
//     let value = 50;
//     callbackFunc(value);
// };
// myFunc(function(value)
// {
//     console.log(value);
// })

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};
myFunc(value =>
{
    console.log(value);
})

// let people = ["Chandan","Anjani","Suraj","Vikash"];
// people.forEach(function(person){
//     console.log(person);
// });

let people = ["Chandan","Anjani","Suraj","Vikash"];
// people.forEach((person, index) => {
//     console.log(index, person);
// });
const logPerson  = ((person, index)=>{
    console.log(`${index} - Hello ${person}`);
});

people.forEach(logPerson);