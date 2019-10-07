// Callback function in action
// const ul = document.querySelector('.people');

// const people = ["Chandan", "ANjani", "Vikash", "Suraj", "Akash"];
// let html = ``;
// // people.forEach(function(person){
// //     //create an html template 
// //     html +=`<li style="color:purple">${person}</li>`;
// // });
// people.forEach(person=>{
//     //create an html template 
//     html +=`<li style="color:purple">${person}</li>`;
// });

// console.log(html);
// ul.innerHTML = html;

const ul = document.querySelector('.people1');
const people = ["Chandan", "ANjani", "Vikash", "Suraj", "Akash"];
let html = ``;
// people.forEach(function(person){
//     //create an html template 
//     html +=`<li style="color:purple">${person}</li>`;
// });
people.forEach(person=>{
    //create an html template 
    html +=`<option style="color:purple">${person}</option>`;
});

console.log(html);
ul.innerHTML = html;