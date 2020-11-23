
const question = [
{
    type: 'input',
    message: 'Please enter employee name',
    name: 'name'
},
{
    type: 'input',
    message: 'Please enter a unique id for employee',
    name: 'id'
},
{
    type: 'input',
    message: 'Please enter employees email',
    name: 'email'
},
{
    type: 'confirm',
    message: 'Is this employee the Manager?',
    name: 'roleManager'
},
{
    type: 'input',
    message: "Please enter Manager's office number",
    name: 'number',
    when: (answers) => { return answers.roleManager === true}
},
{
    type: 'confirm',
    message: 'Is this employee an Engineer?',
    name: 'roleEngineer',
    when: (answers) => { return answers.roleManager === false}
},
{
    type: 'input',
    message: "Please enter the Engineer's github username",
    name: 'github',
    when: (answers) => { return answers.roleEngineer === true}
},
{
    type: 'confirm',
    message: 'Is this employee an Intern?',
    name: 'roleIntern',
    when: (answers) => { return answers.roleManager === false && answers.roleEngineer === false }
},
{
    type: 'input',
    message: "Please enter the Intern's School",
    name: 'school',
    when: (answers) => { return answers.roleIntern === true}
},
{
    type: 'confirm',
    message: 'Would you like to add another employee?',
    name: 'finalize',
    default: true
}
]



module.exports = question;