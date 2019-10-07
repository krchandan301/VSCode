// const content = document.querySelector("p");

// console.log(content.classList);
// content.classList.add("error");
// content.classList.remove("error");
// content.classList.add("error");

const paras = document.querySelectorAll("p");

paras.forEach(para => {
    // console.log(para.innerText);
    // console.log(para.textContent);
    if(para.textContent.includes("error"))
    {
        para.classList.add("error");
    }
    if(para.innerText.includes("success"))
    {
        para.classList.add("success");
    }
})

const title = document.querySelector(".title");

title.classList.toggle("test");
title.classList.toggle("test");