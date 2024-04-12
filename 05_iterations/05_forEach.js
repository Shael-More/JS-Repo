// forEach

const coding = ['js', 'ruby','java','python', "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// +++++++++++arrow function  as callback

// coding.forEach((item) => {
//     console.log(item);
// })

// +++++++++++++++
// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)


// +++++++++++++++++++

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })



// +++++++++++++++++++++++++++

const myCoding = [
    {
        languageName: "Javascript",
        fileName: "js"
    },
    {
        languageName: "Python",
        fileName: "py"
    },
    {
        languageName: "Java",
        fileName: "java"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})