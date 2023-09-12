//Array 

//In jvascript arrays are based on objects internally

//Speical qualities:
// 1. Order is preserved
// 2. keys are present but are set internally unlike objects
// 3. can hold any type of data 

var myArray = [];

console.log(myArray);

var myList = [{fistName:"John",Age: 21, department:{role: "Software Developer"}},1,2,3,-4,0.1,[0.1,0.2,0.3,],"Brazil","Argentina",true,false];

console.log(myList);

console.log(myList.length);

console.log(myList[7]);

//Manipulating Array

// 1.Adding element to array
// 1. Method : 1
myList[myList.length] = "Australia";

console.log(myList);

myList.push("Nigeria");

console.log(myList);