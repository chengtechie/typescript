
const merge = <T extends object, U>(objA: T, objB: U) => {
    return Object.assign(objA, objB)
}

const mergedObj = merge({name: 'Cheng'}, {age: 23})
// Using generic, the object is dynamically set so their attributes could be used
console.log(mergedObj.age)

// *** IMP ***
const extractAndConvert = <T extends object, U extends keyof T>(obj: T, key: U) => {
    return `Value ${obj[key]}`
}

extractAndConvert({name: 'Cheng'}, 'name') // correct
// extractAndConvert({name: 'Cheng'}, 'age') // error

class MyStorage<T> {
    private data: T[] = []

    addItem(item: T) {
        this.data.push(item)
    }

    getItems() {
        return [...this.data]
    }
}

const myStorage = new MyStorage<string>()
myStorage.addItem('Cheng')
myStorage.addItem('Lim')
myStorage.getItems().forEach(data => {
    console.log(data)
})

const myStorage2 = new MyStorage<number>()
myStorage2.addItem(0)
myStorage2.addItem(1)

const names: Readonly<string[]> = ['Cheng', 'Lim']
// names.pop() or names.push('hahaha') error because cannot modify array
