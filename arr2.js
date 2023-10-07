const arr = [1,2,3,4];

arr.push(5);

// arr = [1]


// console.log(arr);
// // sterge pozitia 5 -> indexarea incepe de pe pozitia 0
// console.log(arr.pop(4))

// console.log(arr);

console.log(arr.find(el => el == 2))

const newArr = arr.filter(el => el > 2)

console.log(newArr)     