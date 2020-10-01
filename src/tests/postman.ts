
const { pm } = require('postman-collection')

let response = pm.response.json()
pm.global.set("uuid", response.uuid) // use {{ }} to access var in request body

// for path param same as Node JS, use :attr and add value in params section

// check JSON key-value pairs
pm.test("Correct name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Cheng");
    //... more assertions
});

// if the response returns code 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// set global var for multiple requests
pm.global.set('key', 'value')

