const user = {
    username : "hitman",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()

// console.log(this)

// function code() {
//     console.log(this)
// }
// code()

// function expression
// const code = function() {
//     let user = "hitesh"
//     console.log(this.user)
// }

// const code = () => {
//     let user = "google"
//     console.log(this.user)
// }

// code()



// basic arrow function 
// const addTwo = (n1, n2) => {
//     return n1 + n2
// }

// console.log(addTwo(2,3))

// implicit return
// const addTwo = (n1, n2) =>  (n1 + n2)

const addTwo = (n1, n2) =>  (n1 + n2)
console.log(addTwo(2,3))