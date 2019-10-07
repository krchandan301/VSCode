// Adding objects in array

// const blogs = [
//     {title : "My name is Chandan", likes : 30},
//     {title : "I belongs to Sitamarhi", likes : 50}
// ]

// console.log(blogs)

let user = {
    name : "Chandan",
    age : 23,
    email : "krchandan301@gmail.com",
    location : "India",
    blogs : [
        {title : "My name is Chandan", likes : 30},
    {title : "I belongs to Sitamarhi", likes : 50}
    ],
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
            console.log(blog.title, blog.likes);
        }); 
    }
};

user.logBlogs();