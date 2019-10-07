const para = document.querySelector("p");

// console.log(para.innerHTML);
//para.innerHTML = "Chandan Kumar";
//para.innerHTML += " Chandan Kumar";

const paras = document.querySelectorAll("p");

// paras.forEach(para => {
//     console.log(para.innerHTML);
//     para.innerHTML += " Chandan";
// });

const content = document.querySelector(".content");

//console.log(content.innerHTML);
//content.innerHTML += `<h2>This is H2</h2>`
//content.innerHTML = `<h2>This is H2</h2>`;

const people = ["Choe", "Heon", "Choetiya"];

people.forEach(person => {
    content.innerHTML +=`<p>${person}</p>`;
});