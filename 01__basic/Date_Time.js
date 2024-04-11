// Dates

let myDate = new Date()

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

let myCreatedDate = new Date(2023, 2, 25, 5, 3)
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())

//console.log(Math.floor(Date.now()/1000)) // take floor y around only not ceil

let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());

newDate.toLocaleString('default', {
    weekday:  "long"
})