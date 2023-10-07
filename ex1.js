// const arr = ['a','b','c','d'];

// const arrJoin = (arr) => {
//     return arr.join('')
// }

// console.log(arrJoin(arr))

// const lengthCheck

//ex2


// function diffChars(str1, str2){
//     if (str1.length !== str2.length){
//         return -1;
//     }

//     let counter = 0;
//     for (let i=0; i < str1.length; i++){
//         if (str1[i] !== str2[i]) {
//             counter++;
//         }
//     }
//     console.log(counter);
         

// }

// diffChars('abcd', 'xycz');

// ex3

// function countLetter(str1, char){

//     let counter = 0;
//     for (let i=0; i < str1.length; i++){
//         if (str1[i] === char) {
//             counter++;
//         }
//     }
//     console.log(counter);
         

// }

// countLetter('abcda', 'a');

// ex4

function concatArray(arr1, arr2){
    if arr1.length !== arr2.length{
        return[];
    }

    let newArr = [];

    for (let i=0; i < arr1.length; i++){
        newArr.push(arr1[i]);
        newArr.push(arr2[i]);
    }
    return newArr;
}

console.log(concatArray([1,2,3],['a','b','c']))

// ex5

// function calcMedie(arr){
//     let sum =  0;

//     for(let el of arr){
//         sum += el;
//     }
//     return sum/arr.length;
// }
// console.log(calcMedie([1,2,3,4]))