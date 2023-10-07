const student = {
    name: 'Catalina',
    yearsOld: 25,
    //arrow function -> se limiteaza la contextul din functie
    printName: () => {
        console.log(student.name)
        // console.log(this.name)
    },

    printName2:  function() {
        console.log(this.name);
    }
}

student.lastName = 'Pescaru'
console.log(student);
// console.log(student.name);
// console.log(student['name'])
student.printName()
student.printName2()

console.log(Object.keys(student))
console.log(Object.values(student))
