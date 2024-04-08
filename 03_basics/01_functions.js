// function addTwoNums(n1, n2) {
//     console.log( n1 + n2)
// }


function addTwoNums(n1, n2) {
    return n1 + n2
}

const result = addTwoNums(3, 5)
// console.log("Result: ",result)

// rest operator-  to have multiple parameters and returns an array of values
function calculateCartPrice(val1, val2, ...n1) {
    return n1
}

// console.log(calculateCartPrice(2,3,4,5,7))  // [4,5,7]

// passing object to function
const user = {
    username: "hitman",
    price: 299
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
} 

handleObject(user)


// passing array to function

const numbers = [1,2,3,4]

function secondVal(arr) {
    return arr[2]
}

// console.log(secondVal(numbers))
console.log(secondVal([100,200,300,400]))