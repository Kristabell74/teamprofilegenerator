//gets the class for the Employee
const Employee = require("./Employee");

//this gets the employee class engineers information. the name id email and github iformation
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    //gets the role of the engineer 
    getRole() {
        return "Engineer";
    }
    //gets the github of the employee
    getGithub() {
        return this.github;
    }
}

//gives back a the class of engineer
module.exports = Engineer;