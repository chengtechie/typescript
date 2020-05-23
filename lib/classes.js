"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
}
const accounting = new Department('Accounting');
console.log(accounting);
class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        this.isListed = true;
    }
}
