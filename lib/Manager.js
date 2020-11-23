// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");


// CONSTRUCTING SUBCLASS OF EMPLOYEE
class Manager extends Employee{
    constructor(name, role, id, email, number){
        super(name, role, id, email)
        this.number = number
    }
};

// TESTING
// var Ted = new Manager("Ted", "manager", 001, "ted@me.com", "562-219-6987");
// console.log(Ted);


// EXPORTING CLASS
module.exports = Manager;