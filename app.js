//The main application required
const inquirer = require("inquirer");

//Pages required
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");


//Paths
const path = require("path");
const fs = require("fs");
const Choice = require("inquirer/lib/objects/choice");
const Choices = require("inquirer/lib/objects/choices");

//Output paths
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


//An array to gather the employees in
let team = [];

//Assigns the manager to the team
function createMgr() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            required: "Managers name"
        },
        {
            type: "input",
            name: "idMbr",
            required: "Id number"
        },
        {
            type: "input",
            name: "officeNumber",
            required: "Contact number",
            default: "number",
        },
        {
            type: "input",
            name: "email",
            required: "Email"
        },


    ])
        //Gathers the information together to form the manager
        .then(function (data) {
            const manager = new Manager(
                data.name,
                data.idMbr,
                data.officeNumber,
                data.email,
            );
            team.push(manager);
            addMbr()

        })

};
//Gathers the manager
createMgr();
//Has simple questions to ask about the Engineer assigned to the team

function createEng() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            required: "Engineers name"
        },
        {
            type: "input",
            name: "idMbr",
            required: "Id number",
            default: "number",
        },
        {
            type: "input",
            name: "github",
            required: "Github username"
        },
        {
            type: "input",
            name: "email",
            required: "Email"
        },


    ])
        //Asks and gathers the data on the engineer assigned

        .then(function (data) {
            const engineer = new Engineer(
                data.name,
                data.idMbr,
                data.github,
                data.email,
            );
            team.push(engineer);
            addMbr()
        })

};


// //Takes the information on the Intern assigned
function createInt() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            required: "Interns name"
        },
        {
            type: "input",
            name: "idMbr",
            required: "Id number",
            default: "number",
        },
        {
            type: "input",
            name: "college",
            required: "Name of College"
        },
        {
            type: "input",
            name: "email",
            required: "Email",
        },



    ])

        //Gathers the data entered for the intern

        .then(function (data) {
            const intern = new Intern(
                data.name,
                data.idMbr,
                data.college,
                data.email,
            );
            team.push(intern);
            addMbr()
        })

};

//This joins all of the team mates together

function addMbr() {
    inquirer.prompt([
        {
            type: "list",
            name: "members",
            required: "Choose type of Employee",
            choices: ["Manager", "Engineer", "Intern"],

        }

        //this pushes the data to generate the team
    ])
        .then(function (data) {
            if (data.members === "Engineer") {
                createEng();
            } else if (data.members === "Intern") {
                createInt();
            } else {
                generateTeam()

            };
        })

};

// //This renders the team and returns data

function generateTeam() {
    const newTeam = render(team);
    // console.log(newTeam);
    fs.writeFile(outputPath, newTeam, (err) => {
        if (err) {
            console.log("error", err)
            return
        }
    })
}






// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
