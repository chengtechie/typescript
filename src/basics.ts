// javascript -> dynamic-typed, typescript -> static-typed

let triplet: [number, string, number] // tuple, triple can be defined
triplet = [3, 'Cheng', 5]
console.log(triplet[2]) // 5

enum Role {
    STUDENT, TEACHER, AUTHOR
}
// Role.AUTHOR (similar to Java)

type Combined = string | number | {title: string}
let combine: Combined // combine var could be string or number or json object

// in TS, Function is a type (like string, number, ...)
// define type of function, good for callback (same as Kotlin)
let combinedValues: (a: number, b: number) => number 

const hobbies = ['Hiking', 'Reading']
const moreHobbies = ['Cooking']
moreHobbies.push(...hobbies) // concat the array 'hobbies'
const [hobby1, hobby2, ...remaining] = hobbies // destructure array
const person = {
    firstName: 'Cheng',
    age: 23
}
const { firstName, age } = person // destructure object

const add = (...numbers: number[]) => { // can add flexible no of params
    return numbers.reduce((currResult, currValue) => {
        return currResult + currValue
    }, 0)
}