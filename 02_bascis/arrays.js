// Arrays and Notes 


// declare array
const arr = [0,1,2,3,4,5]

// or
const arr2 = new Array(1,2,3)
 
// Array Methods
arr.push(7)
arr.pop()

arr.unshift(0) //add infornt of array
arr.shift()

// console.log(arr.includes(8));  //true or false 
// console.log(arr.indexOf(2)); // index / -1 if not present

arr.join() // returns string


// slice, splice

const arrslice = [1,2,3,4,5,6]

let slicedarr = arrslice.slice(1,3)

console.log("sliced ", slicedarr)
console.log("original ",arrslice)


const arrsplice = [9,8,7,6,5,4]

let splicearr = arrsplice.splice(1,3)

console.log("spliced ", splicearr)
console.log("original ", arrsplice)

// console 
// console.log(arr)