// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

//this gets the class of the employee
const Employee = require("./Employee")

//this gets more information on the employee including the office number and the role that they are in the office.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        // adds the office number with the name id and email
        this.officeNumber = officeNumber

    }
    //gets the office number of the person that they are looking for
    getOfficeNumber() {
        return this.officeNumber
    }
    //gets the position of the employee

    getRole() {
        return "Manager"
    }
}

//gets the new subclass for the managers
module.exports = Manager
