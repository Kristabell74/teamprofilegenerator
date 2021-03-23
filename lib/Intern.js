// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//this gets the class of the intern
const Employee = require("./Employee")

//this gets the information of the intern and returns it to the user
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        // new to intern
        this.school = school

    }
    //returns the school
    getSchool() {
        return this.school
    }
    //gets the role of the intern
    getRole() {
        return "Intern"
    }
}

// gives back the class of the intern
module.exports = Intern