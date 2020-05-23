"use strict";
// javascript -> dynamic-typed, typescript -> static-typed
let triplet; // tuple, triple can be defined
triplet = [3, 'Cheng', 5];
console.log(triplet[2]); // 5
var Role;
(function (Role) {
    Role[Role["STUDENT"] = 0] = "STUDENT";
    Role[Role["TEACHER"] = 1] = "TEACHER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
let combine; // combine var could be string or number or json object
// in TS, Function is a type (like string, number, ...)
// define type of function, good for callback (same as Kotlin)
let combinedValues;
const hobbies = ['Hiking', 'Reading'];
const moreHobbies = ['Cooking'];
moreHobbies.push(...hobbies); // concat the array 'hobbies'
const [hobby1, hobby2, ...remaining] = hobbies; // destructure array
const person = {
    firstName: 'Cheng',
    age: 23
};
const { firstName, age } = person; // destructure object
const add = (...numbers) => {
    return numbers.reduce((currResult, currValue) => {
        return currResult + currValue;
    }, 0);
};
