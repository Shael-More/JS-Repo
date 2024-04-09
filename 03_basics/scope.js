// var c = 300 //gloabal scope

let a = 300

// scope
if (true) { //block scope
    let a = 10
    const b = 20
}

// console.log(a)
// console.log(b)
// console.log(c)


// neseted scope

// function one() {
//     const username  ="hitman"

//     function two() {
//         const website = "youtube"
//         console.log(username)
//     }

//     // console.log(website)
//     two()
// }

// one()


// +++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++

console.log(addone(5))
function addone(num) {
    return num + 1
}


addTwo(3)
const addTwo = function(num) {
    return num + 2
}
