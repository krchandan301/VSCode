// Adding methods to objects

let user = {
    name : "Chandan",
    age : 23,
    email : "krchandan301@gmail.com",
    location : "India",
    blogs : ["My name is Chandan", "I belongs to Sitamarhi"],
    login : function()
    {
        console.log("The user is logged in");
    },
    logout : function()
    {
        console.log("The user is logged out");
    },
    logBlogs : function(){
        
    }
};

user.login();
user.logout();

// const name = "Chandan";
// name.toUpperCase();
