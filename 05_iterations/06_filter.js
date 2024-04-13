// const coding = ['js', 'ruby','java','python', "cpp"]

// // 
// const values = coding.forEach((item) => {
//     // console.log(item)
//     return item
// })

// console.log(values) // undefined because forEach doesnt return anything

// filter
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = nums.filter( (num) => num > 4)
// console.log(newNums)

// +++++++++++++++++with forEach
// const newNums = []

// nums.forEach( (item) => {
//     if (item > 4) {
//         newNums.push(item)
//     }
// } )

// console.log(newNums)

const books = [
    {title:"One", genre:"Fiction", publish:1981, edition:2004},
    {title:"Two", genre:"Non-Fiction", publish:1991, edition:2008},
    {title:"Three", genre:"History", publish:1999, edition:2007},
    {title:"Four", genre:"Non-Fiction", publish:1989, edition:2010},
    {title:"Five", genre:"Science", publish:2009, edition:2014},
    {title:"Six", genre:"Fiction", publish:1987, edition:2010},
    {title:"Seven", genre:"History", publish:1986, edition:1996},
    {title:"Eight", genre:"Science", publish:2011, edition:2016},
    {title:"Nine", genre:"Non-Fiction", publish:1981, edition:1989},
    {title:"Ten", genre:"History", publish:1990, edition:2010},
];


// const userBooks = books.filter( (bk) => bk.genre === "History")

const userBooks = books.filter( (bk) => { return bk.publish >= 1995 && bk.genre === "History"})

console.log(userBooks)