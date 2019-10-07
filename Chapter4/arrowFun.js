// const calcArea = function(radius)
// {
//     return 3.14*radius**2;
// };

// arrow function
const calcArea = (radius) =>{
    return 3.14*radius**2;
};


const area = calcArea(5);
console.log(area);

//This block is applicabele only if there is a single parameter
const calcArea1 = radius => 3.14*radius**2;

const area1 = calcArea1(5);

console.log("Area is : ",area1);

//practise arrow function
// const greet = function()
// {
//     return "Hello World";
// }
// const result = greet();
// console.log(result);

const greet = () => "Hello World";
const result = greet();
console.log(result);

// const bill = function(products, tax)
// {
//     let total = 0;
//     for(let i=0; i<products.length; i++)
//     {
//         total+=products[i] + products[i] * tax;
//     }
//     return total;
// }
const bill = (products, tax) => {
    let total = 0;
    for(let i=0; i<products.length; i++)
    {
        total+=products[i] + products[i] * tax;
    }
    return total;
}
console.log(bill([10,15,30], 0.2));