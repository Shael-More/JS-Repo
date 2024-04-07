// Objects
// ================= 2 ways to create an object
// 1.Object Literals
// 2.constructor method


const mySym = Symbol("Key1")  //Symbol

const jsUser = {
    name:"Hitman",
    [mySym]: "MyKey1",
    age: 18,
    location: "Delhi",
    email: "hit@google.com",
    isLoggedIn: false,
    lastLogginDays: ["Mon", "Wed"]
}

// console.log(jsUser.age)

jsUser.name = "Hole"
jsUser.greeting = function() {
    console.log("Hello JS User")
}


jsUser.greeting()
console.log(jsUser)