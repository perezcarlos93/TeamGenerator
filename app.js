const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const question = require("./lib/question")

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var array = [];
var amount;


const manQuestion = (answers) => {
    var number;
    inquirer.prompt([
        {
            type: 'input',
            message: "Please enter Manager's office number",
            name: 'number',
        },
    ]).then((manager) => { number = manager.number; return number})
    .catch(error => {
        if(error.isTtyError) {
          console.log(error)
        } else {
            // Something else when wrong
            console.log(error)
        }
      });

    var Man = new Manager(answers.name, answers.role, answers.id, answers.email, number);
    array.push(Man);
    console.log("Current Employee Array: " + array)
}

const engQuestion = (answers) => {
    inquirer.prompt([
        {
            type: 'input',
            message: "Please enter the Engineer's github username",
            name: 'github',
        }
    ]).then((engineer) => { return github = engineer.github})
    .catch(error => {
        if(error.isTtyError) {
          console.log(error)
        } else {
            // Something else when wrong
            console.log(error)
        }
      });

    var Eng = new Engineer(answers.name, answers.role, answers.id, answers.email, github);
    array.push(Eng);
    console.log("Current Employee Array: " + array)
}

const intQuestion = (answers) => {
    inquirer.prompt([
        {
            type: 'input',
            message: "Please enter the Intern's School",
            name: 'school'
        }
    ]).then((intern) => { return school = intern.school})
    .catch(error => {
        if(error.isTtyError) {
          console.log(error)
        } else {
            // Something else when wrong
            console.log(error)
        }
      });


    var Int = new Intern(answers.name, answers.role, answers.id, answers.email, school);
    console.log("New Intern added: " + JSON.stringify(Int))
    array.push(Int);
    console.log("Current Employee Array: " + array)
}

const ask = function(){
    inquirer.prompt(question)
    .then((answers) => {
        if(answers.role === "manager"){
            manQuestion(answers)
        }else if
        (answers.role === "engineer"){
            engQuestion(answers)
        }else if
        (answers.role === "intern"){
            intQuestion(answers)
        }
        
        // finalize(answers);

        console.log("Current Employee Array: " + array)
    
    })}


// const finalize = function(answers){
//     ask();
//     if(answers.finalize){
//         ask();
//     }
// }

// finalize();
ask()

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

const roster = render(array);

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// fs.writeFileSync(roster, "team.html")

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!
