// for of 

const arr = [1,2,3,4,5]

for (const val of arr) {
    // console.log(val);
}

const greetings = "Hello World"

for (const greet of greetings) {
    // console.log(greet);
}


// Maps data types

const map = new Map()

map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")

// console.log(map);

for (const [key, value ]of map) {
    console.log(key,' :- ', value);
}