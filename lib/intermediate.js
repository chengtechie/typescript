"use strict";
const se1 = {
    name: 'Cheng',
    privileges: ['Eat pizza'],
    startDate: new Date()
};
const printInfo = (e) => {
    console.log(`Name: ${e.name}`);
    // if (typeof e === 'Employee') not gonna work because not default TS data type
    // same as hasOwnProperty('key') except IN returns true for inherited properties
    if ('privileges' in e) { // good but might have typo, can use for types
        console.log(`Privilege 1: ${e.privileges[0]}`);
    }
    // instanceof cannot be used in interfaces and types, only CLASSES!
};
