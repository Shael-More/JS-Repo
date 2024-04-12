// for 

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }


let myArr = ['flash', 'Batman', 'Superman']

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
    
}

// for (let i = 0; i <= 10; i++) {
// //    console.log(`Outer loop value: ${i}`);
//    for (let j = 0; j <= 10; j++) {
//         // console.log(`Inner loop value: ${j} and outer loop ${i}`);
//         // console.log(i + '*' + j + ' = ' + i * j);
//    }
// }

// break and continue

for (let index = 1; index <= 10; index++) {

    // if (index == 5) {
    //     console.log(`Detected 5`);
    //     break
    // }
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${index}`);
    
}