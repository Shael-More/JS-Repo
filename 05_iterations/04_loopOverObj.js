// for in loop for object

const myObject = {
    js: "javascript",
    cpp:"C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
//   console.log(myObject[key]);
}

// for in loop for array prints array keys i.e index

const prog = ['js', 'py', 'cpp', 'ajava', 'rb']

for (const key in prog) {
    console.log(prog[key]);
}