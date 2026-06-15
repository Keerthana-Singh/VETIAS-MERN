// ES5 vs ES6

// let
let studentCount = 10;
studentCount = 11;

console.log("Student Count:", studentCount);

// const
const collegeName = "VETIAS";

console.log("College Name:", collegeName);

// Template Literals
let studentName = "Arun";

console.log(`Welcome ${studentName} to ${collegeName}`);

// Object
const student = {
    name: "Arun",
    age: 20,
    department: "IT"
};
console.log(student);

// Destructuring
const { name, age, department } = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("Department:", department);

// Arrow Function
const displayStudent = () => {
    console.log(`Student Name: ${name}`);
};

displayStudent();

// Arrays
const students = [
    "Arun",
    "Priya", 
    "Devadharshini"
];

console.log(students);


// Spread Operator
const updatedStudents = [
    ...students,
    "Rahul"
];

console.log(updatedStudents);

// // Rest Operator
function maximumMarks(...marks) {

    let max =  Math.max(...marks);

    return max;
}

console.log("Maximum Marks:", maximumMarks(80,90,70)); 