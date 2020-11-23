// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

// CONSTRUCTING SUBCLASS OF EMPLOYEE
class Intern extends Employee{
    constructor(name, role, id, email, school){
        super(name, role, id, email)
        this.school = school
    }
};

// TESTING
// var Ted = new Intern("Ted", "manager", 001, "ted@me.com", "UC Irvine");
// console.log(Ted);


// EXPORTING CLASS
module.exports = Intern;