// Adding methods to objects

let user = {
    name : "Chandan",
    age : 23,
    email : "krchandan301@gmail.com",
    location : "India",
    blogs : ["My name is Chandan", "I belongs to Sitamarhi"],
    // login : function()
    // {
    //     console.log("The user is logged in");
    // },
    // logout : function()
    // {
    //     console.log("The user is logged out");
    // },
    // logBlogs : function(){
    //     // console.log(this);
    //     // console.log(this.blogs);
    //     console.log("This user has written the following blogs : ");
    //     this.blogs.forEach(blog => {
    //         console.log(blog);
    //     }); 
    // }
    login()
    {
        console.log("The user is logged in");
    },
    logout()
    {
        console.log("The user is logged out");
    },
    logBlogs(){
        // console.log(this);
        // console.log(this.blogs);
        console.log("This user has written the following blogs : ");
        this.blogs.forEach(blog => {
            console.log(blog);
        }); 
    }
};

user.logBlogs();

console.log(this);