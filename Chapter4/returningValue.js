// arguments & parametrs
// const speak = function(name="Chandan", time="morning")
// {
//     console.log(`Good ${time} ${name}`);
// };

const calcArea = function(radius)
{
    let area = 3.14*radius**2;
    return area;
};
console.log(calcArea(5));
const area = calcArea(5);
console.log(area);

const calcArea1 = function(radius)
{
    return 3.14*radius**2;
    
};
console.log(calcArea1(5));
const area1 = calcArea1(5);
console.log(area1);