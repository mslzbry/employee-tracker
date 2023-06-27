const prompt = require('../index.js')
const connection = require('../config/connection')
const table = require('console.table')

const queryDb = response => {
  switch (response.options) {
    case 'View All Departments':
      viewAllDepartments()
      break
    // case 'View All Roles':
    //   viewAllRoles()
    //   break
    // case 'View All Employees':
    //   viewAllEmployees()
    //   break
    // case 'View Employees By Manager':
    //   getManager()
    //   break
    // case 'View Employees By Department':
    //   getDepartmentToView()
    //   break
    case 'Add Department':
      addDepartment()
      break
    // case 'Add Role':
    //   addRolePrompt()
    //   break
    // case 'Add Employee':
    //   addEmployeePrompt()
    //   break
    // case 'Update Employee Role':
    //   selectEmployeeToUpdate()
    //   break
    // case 'Update Employee Manager':
    //   selectManager()
    //   break
    // case 'Delete Department':
    //   getDepartmentsToDelete()
    //   break
    // case 'Delete Role':
    //   getRolesToDelete()
    //   break
    // case 'Delete Employee':
    //   getEmployeesToDelete()
    //   break
    // case 'Quit':
    //   quit()
    //   break
  }
}

// ======================= VIEW =================================

// View all Departments
const viewAllDepartments = () => {
  console.log('view all departments')
  connection.query('SELECT * FROM department', function (err, results) {
    console.table(results)
    prompt.promptUser()
  })
}

// ======================= ADD ===================================

// Add a new department
const addDepartment = () => {}

module.exports = queryDb
