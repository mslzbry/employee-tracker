const inquirer = require('inquirer')
const logo = require('asciiart-logo')
const queryDb = require('./db/queryDb')

const question = [
  {
    type: 'list',
    name: 'options',
    message: 'What would you like to do?',
    choices: [
      'View All Departments',
      'View All Roles',
      'View All Employees',
      'Add Department',
      'Add Role',
      'Add Employee',
      'Update Employee Role',
      'Quit'
    ]
  }
]

const promptUser = () => {
  inquirer.prompt(question).then(response => queryDb(response))
}

// Create a function to initialize app
const init = () => {
  // Display ascii art showing the name of the app
  console.log(
    logo({
      name: 'Employee Tracker'
    }).render()
  )
  promptUser()
}

// Function call to initialize app
init()

exports.promptUser = promptUser
