const assert = require("assert");
const { access } = require("fs");

assert.equal(7 + 1, 8);

var nato =
  "The core principle of NATO is collective defense, as enshrined in Article 5 of the North Atlantic Treaty.\
  This article states that an attack on one NATO member\
  is considered an attack on all members, and they pledge\
  to come to the aid of the attacked country.";

console.log(nato);

x = 18;

console.log(x);

var employee = {
  firstName: "John",
  lastName: "Doe",
  Age: 21,
};

var employee2 = {
  firstName: "Jason",
  lastName: "Smith",
  Age: 21,
};

var manager = {
  managerDetails: "employee",
};

console.log("Employee: ", employee);

console.log("Employee: " + employee);

console.log("Manager: ", manager);

console.log(employee2);

//Manipulating objects

// 1.Adding new key-value pair
employee.id = 123;

//Accessing property
console.log("Employee Age: " +employee.Age);

//Adding Alternative with making use of String and if key has spaces
employee["Country State"] = "California"

//Accessing property with spaces
console.log("Country State: " ,employee["Country State"]);

// 2.Delete property (key-value pair)of object

delete employee.lastName;

//Output 
console.log("After Manipulating Employee: ", employee);

assert.equal(employee.firstName, "John");

//var literal = 18;

literal = 19;

console.log(literal);

//The assignment operator will NOT make a copy of employee2 and stoe in employee3 rather it will point to same location in heap memory
employee3 = employee2;

//So any changes made to employee3 will also get applied  to employee2
employee3.firstName = "Jack";

console.log("Empoyee3: ", employee3);

console.log("Employee2: ", employee2);

//To make an copy of object safely
//In the below cases changes made to employee4 ,employee5 and employee6 will not have "AFFECT" on employee3

var employee4 = Object.assign({}, employee3);

employee4.firstName = "Matt";

console.log("Empoyee3: ", employee3);

console.log("Empoyee4: ", employee4);

//Other altenatives:Both alternative has same behaviour as above
//technique

var employee5 = { ...employee3 };

var employee6 = JSON.parse(JSON.stringify(employee3));

console.log("JSON stringfy output: ", JSON.stringify(employee4));
