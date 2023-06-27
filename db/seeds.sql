INSERT INTO department (department_name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO roles (role_title, salary, department_id)
VALUES ("Software Engineer", 160000, 1),
       ("Full Stack Engineer", 180000, 1),
       ("Financial Analyst", 120000, 2),
       ("Accountant", 120000, 2),
       ("Counsel", 300000, 3),
       ("Lawyer", 300000, 3);
      

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Doe", 1, null),
       ("Sarah", "Smith", 1, 1),
       ("Mark", "Adams", 2, 2),
       ("Mike", "Daniel", 2, 3),
       ("Melissa", "Williams", 3, 3),
       ("Erika", "Lee", 3, 3);