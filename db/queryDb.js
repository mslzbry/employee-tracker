const prompt = require('../index.js')
const connection = require('../config/connection')
const table = require('console.table')
const inquirer = require('inquirer')
const { validateString, validateSalary } = require('../validate.js')

const queryDb = response => {
  switch (response.options) {
    case 'View All Departments':
      viewDepartments()
      break
    case 'View All Roles':
      viewRoles()
      break
    case 'View All Employees':
      viewEmployees()
      break
    // case 'View Employees By Manager':
    //   getManager()
    //   break
    // case 'View Employees By Department':
    //   getDepartmentToView()
    //   break
    case 'Add Department':
      addDepartment()
      break
    case 'Add Role':
      addRole()
      break
    case 'Add Employee':
      addEmployee()
      break
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

// Generic function that takes in a query and returns output in a table format
const viewQuery = queryString => {
  connection.query(queryString, function (err, results) {
    console.table(results)
    prompt.promptUser()
  })
}

const viewDepartments = () => {
  viewQuery(
    'SELECT department.id AS id, department.department_name AS department FROM department'
  )
}

const viewRoles = () => {
  viewQuery(
    'SELECT role.id, role.title, department.department_name AS department FROM role INNER JOIN department ON role.department_id = department.id'
  )
}

const viewEmployees = () => {
  viewQuery(
    "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name AS 'department', role.salary FROM employee, role, department WHERE department.id = role.department_id AND role.id = employee.role_id ORDER BY employee.id ASC"
  )
}

// ======================= ADD ===================================

// Add a new department
const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: 'department',
        type: 'input',
        message: 'Enter name of new department:',
        validate: validateString
      }
    ])
    .then(response => {
      const sql = 'INSERT INTO department (department_name) VALUES (?)'
      connection.query(sql, response.department, (error, response) => {
        if (error) {
          throw error
        } else {
          console.log(`${response.department} Department successfully created!`)
          viewDepartments()
          prompt.promptUser()
        }
      })
    })
}

// Add a new role
const addRole = () => {
  // need to get all departments first to present to the user
  let depts = []
  let deptId = -1
  const sql = 'SELECT * FROM department'
  connection.query(sql, (error, response) => {
    if (error) throw error
    response.forEach(dept => {
      depts.push(dept.department_name)
    })

    inquirer
      .prompt([
        {
          name: 'role',
          type: 'input',
          message: 'Enter name of new role:',
          validate: validateString
        },
        {
          name: 'salary',
          type: 'input',
          message: 'Enter salary for new role:',
          validate: validateSalary
        },
        {
          type: 'list',
          name: 'department',
          message: 'Select department that the role belong to:',
          choices: depts
        }
      ])
      .then(input => {
        response.forEach(dept => {
          if (input.department == dept.department_name) {
            deptId = dept.id
          }
        })
        const sql =
          'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)'
        connection.query(
          sql,
          [input.role, input.salary, deptId],
          (error, response) => {
            if (error) {
              throw error
            } else {
              console.log(`${input.role} Role successfully created!`)
              viewRoles()
              prompt.promptUser()
            }
          }
        )
      })
  })
}

// Add an employee
const addEmployee = () => {
  // first need to query for all roles and managers
  let managers = []
  connection.query('SELECT * FROM employee', function (err, results) {
    results.forEach(person => {
      managers.push({
        name: person.first_name + ' ' + person.last_name,
        id: person.id
      })
    })

    console.log(managers)
  })

  let roles = []
  connection.query('SELECT title, id FROM role', function (err, results) {
    results.forEach(role => {
      roles.push({ name: role.title, id: role.id })
    })

    inquirer
      .prompt([
        {
          type: 'input',
          name: 'firstName',
          message: "Enter employee's first name:"
        },
        {
          type: 'input',
          name: 'lastName',
          message: "Enter employee's last name:"
        },
        {
          type: 'list',
          name: 'role',
          message: "Select employee's role:",
          choices: roles
        },
        {
          type: 'list',
          name: 'manager',
          message: "Select employee's manager:",
          choices: managers
        }
      ])
      .then(input => {
        let roleId = -1
        roles.forEach(role => {
          if (input.role == role.name) {
            roleId = role.id
          }
        })
        let mgrId = -1
        managers.forEach(mgr => {
          if (input.manager == mgr.name) {
            mgrId = mgr.id
          }
        })

        console.log([input.firstName, input.lastName, roleId, mgrId])
        const sql =
          'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)'
        connection.query(
          sql,
          [input.firstName, input.lastName, roleId, mgrId],
          error => {
            if (error) throw error
            console.log('Employee has been added!')
            viewEmployees()
          }
        )
      })
  })
}
module.exports = queryDb
