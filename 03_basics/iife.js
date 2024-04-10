// Immediately Invoked Function Expression (IIFE) 


// normal function calling
// function code() {
//     console.log("DB CONNECTION ")
// }

// code()

// named IIFE
(function chai() {
    console.log("DB CONNECTION ESTABLISHED")
})();


// unnamed iife
(() => {
    console.log("DB CONNECTION ESTABLISHED RESTARTED")
})();

// unnamed iife with parameter
((name) => {
    console.log(`DB CONNECTION ESTABLISHED RESTARTED ${name}`)
})("Hitman")