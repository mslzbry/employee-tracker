INSERT INTO department (department_name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 160000, 1),
       ("Full Stack Engineer", 180000, 1),
       ("Financial Analyst", 120000, 2),
       ("Accountant", 120000, 2),
       ("Counsel", 300000, 3),
       ("Lawyer", 300000, 3);
      

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Doe", 1, null),
       ("Sarah", "Smith", 2, 1),
       ("Mark", "Adams", 3, 2),
       ("Mike", "Daniel", 4, 3),
       ("Melissa", "Williams", 5, 3),
       ("Erika", "Lee", 6, 3);