// Objects Literals
let user = {
    name : "Chandan",
    age : 23,
    email : "krchandan301@gmail.com",
    location : "India",
    blogs : ["My name is Chandan", "I belongs to Sitamarhi"]
};

console.log(user);
console.log(user.name);

// user.age = 24;
console.log(user.age);

console.log(user["name"]);
console.log(user["email"]);

user["name"] = "Chandan Yadav";

console.log(user["name"]);

const key = "location";
console.log(user[key]);

console.log(typeof user);