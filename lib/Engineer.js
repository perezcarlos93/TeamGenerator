// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, role, id, email, github){
        super(name, role, id, email)
        this.github = github
    }
};

// TESTING
// var Ted = new Engineer("Ted", "manager", 001, "ted@me.com", "562-219-6987");
// console.log(Ted);

// EXPORTING CLASS
module.exports = Engineer;