
type Admin = {
    name: string,
    privileges: string[]
}

type Employee = {
    name: string,
    startDate: Date
}

type SpecialEmployee = Admin & Employee // union of all attributes

const se1: SpecialEmployee = {
    name: 'Cheng',
    privileges: ['Eat pizza'],
    startDate: new Date()
}

type UnknownEmployee = Admin | Employee // One of the types

const printInfo = (e: UnknownEmployee) => {
    console.log(`Name: ${e.name}`)
    // if (typeof e === 'Employee') not gonna work because not default TS data type

    // same as hasOwnProperty('key') except IN returns true for inherited properties
    if ('privileges' in e) { // good but might have typo, can use for types
        console.log(`Privilege 1: ${e.privileges[0]}`)
    }
    // instanceof cannot be used in interfaces and types, only CLASSES!

    // type casting: <Type>... or ... as Type (React way)
}

// console.log(`Job: ${user?.job}`) null check identical to Kotlin

// ?? allows '', 0 or false to be valid, while || just use the 2nd option
// const PORT = serverPort ?? 8888 vs const PORT = serverPort || 8888
