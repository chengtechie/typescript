class Department {
    name: string

    constructor(n: string) {
        this.name = n
    }

    describe() { // object method

    }
}
const accounting = new Department('Accounting')
console.log(accounting)

class Product { // short cut
    private isListed: boolean
    constructor(public title: string, public price: number) {
        this.isListed = true
    }
}

class ProductA extends Product {
    constructor(price: number) {
        super('A', price);
    }
}