// const tinderUser = new Object() --------- singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname : {
            firstname: 'Hit',
            lastname : 'man'
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

// merge objects

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1, ...obj2} // spread operator is main concept for merging objects
// console.log(obj3)


// values from database

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "hi@gmail.com"
    },
    {
        id: 3,
        email: "hit@gmail.com"
    },

]

// console.log(tinderUser)


// Object.keys(tinderUser) // returns array
// Object.values(tinderUser) // array
// Object.entries(tinderUser) // array
// tinderUser.hasOwnProperty("isLoggedIn") // true