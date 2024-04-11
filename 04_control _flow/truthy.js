// truthy and false value


// falsy values - false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values - "0", 'false', "space", [], {}, function() {} empty function


const userEmail = []

if(userEmail.length === 0) {
    console.log("Array is empty");
}

const obj = {}

if(Object.keys(obj).length === 0) {
    console.log("object is empty");
}

// Nullishing Coalescing Operator (??): works on null and undefined

let val1;
val1 = null ?? 10  // 10
val1 = undefined ?? 10 // 10

console.log(val1);

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80 "): console.log("More than 80");
