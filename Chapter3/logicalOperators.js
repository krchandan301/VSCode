// logical Operators - OR || and AND &&
const password = "p@ssword1234";
if(password.length >= 12 && password.includes("@"))
{
    console.log("The password is mighty strong.");
}
else if(password.length >= 8)
{
    console.log("The password is Strong enough.");
}
else
{
    console.log("The password is not long enough.");
}
const pass = "p@ss";
if(pass.length >= 12 && pass.includes("@"))
{
    console.log("The password is mighty strong.");
}
else if(pass.length >= 8 || pass.includes("@") && pass.length >= 5)
{
    console.log("The password is Strong enough.");
}
else
{
    console.log("The password is not long enough.");
}