//if else statements
const password = "p@ssword";
if(password.length >= 12)
{
    console.log("The password is mighty strong.");
}
else if(password.length >= 8)
{
    console.log("The password is long enough.");
}
else
{
    console.log("The password is not long enough.");
}