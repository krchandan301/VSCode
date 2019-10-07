//variables & Block Scope

const age = 30;
//let age = 40; //Uncought error : age already declared.

if(true)
{
    let age = 40; //inside a block, re declaration is allowed.
    let name = "chandan";
    console.log("inside code block: ", age, name);

    if(true)
    {
        let age = 50;
        console.log("Inside the 2nd code block : ", age);
        var test = "hello";
    }
}

console.log("Outside code block: ", age, name, test);