const arr = [1,2,3,4];

//for (let i=0; i < arr.length; i++){
//    console.log(arr[i])
//}

//short version pentru ce e mai sus - for of - elementele din array
// for (let el of arr){
//     console.log(el)
// }
// for in - index ul elementelor (returneaza strings)
// for (let index in arr){
//     console.log(index)
// }

arr.forEach((el, index) => {
    // console.log(el);
    //  console.log('El:'+ el + '; index:' + index);
    console.log(`El: ${el} index: ${index}`)
})

arr.map((el, index) => {
    // console.log(el);
    //  console.log('El:'+ el + '; index:' + index);
    console.log(`El: ${el} index: ${index}`)
})

const arr2 = arr.forEach((el, index) => {
    // console.log(el);
    // console.log('El:'+ el + '; index:' + index);
    // console.log(`El: ${el} index: ${index}`)
})

console.log(arr2)

const arr3 = arr.map((el, index) => {
    // console.log(el);
    //  console.log('El:'+ el + '; index:' + index);
    // console.log(`El: ${el} index: ${index}`)

    return el *2;
})

console.log(arr3)


