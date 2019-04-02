(function(){
    'use strict'
class Person{
    constructor(){
        this.username="kiran";
        this.lastName="PVS";
        this.firstName="kiran";
    }
    getFullName(){
        return this.firstName + this.lastName;
    }
}
var person = new Person();
console.log(person.getFullName());

class Company extends Person{
    constructor(){
        super();
    this.companyName="XYZ";
    }
}
var company = new Company();
console.log(company);
})();