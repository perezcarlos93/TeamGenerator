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

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const collectAnswers = async (inputs = []) => {
    
    const {finalize, ...answers} = await inquirer.prompt(question)
    const newInputs = [...inputs, answers]
    console.log(newInputs);
    if(answers.roleManager === true){
        Man = new Manager(answers.name, "Manager", answers.id, answers.email, answers.number);
        inputs.push(Man);
        console.log("New Manager added: " + Man)
        return Man
    }else if(answers.roleEngineer === true){
        Eng = new Engineer(answers.name, "Engineer", answers.id, answers.email, answers.github);
        inputs.push(Eng);
        console.log("New Engineer added: " + Eng)
        return Eng
    }else if (answers.roleIntern === true){
        Int = new Intern(answers.name, "Intern", answers.id, answers.email, answers.school);
        inputs.push(Int);
        console.log("New Intern added: " + JSON.stringify(Int))
        return Int
    }
    return finalize ? collectAnswers(newInputs): newInputs; 
};

const run = async () => {
    const inputs = await collectAnswers();
    console.log(inputs)
}

run();

// inquirer.prompt(question).then(function(answers){
//     if(answers.roleManager === true){
//         Man = new Manager(answers.name, "Manager", answers.id, answers.email, answers.number);
//         array.push(Man);
//     }else if(answers.roleEngineer === true){
//         Eng = new Engineer(answers.name, "Engineer", answers.id, answers.email, answers.github);
//         array.push(Eng);
//     }else if (answers.roleIntern === true){
//         Int = new Intern(answers.name, "Intern", answers.id, answers.email, answers.school);
//         array.push(Int);
//     }
//     console.log("Current team array: " + JSON.stringify(array))
// }).catch((error) => { if(error){console.log( "An error occurred: " + error )} })

    


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// const roster = render(array);

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
// for the provided `render` function to work! ```
