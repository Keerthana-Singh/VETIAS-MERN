console.log("Welcome to Primitive Datatypes ");


// Numbers 
console.log("DT Numbers");
var age = 30; 
console.log(age); // Output: 30 

// Strings
console.log("DT Strings");
var name = "John"; 
console.log(name); // Output: John

// Booleans
console.log("DT Booleans");
var isStudent = true;  
console.log(isStudent); // Output: true 

// Null
console.log("DT Null");
var emptyValue = null; 
console.log(emptyValue); // Output: null 

// Undefined 
console.log("DT Undefined");
var undefinedValue;
console.log(undefinedValue); // Output: undefined 

// Symbols 
console.log("DT Symbols");
var symbolValue = Symbol('symbol');
console.log(symbolValue); // Output: Symbol(symbol) 

// BigInt 
console.log("DT BigInt");
var bigIntValue = 1234567890123456789012345678901234567890n;
console.log(bigIntValue); // Output: 1234567890123456789012345678901234567890n 



console.log("Welcome to Non Primitive Datatype");

// Objects 
console.log("DT Objects");
var person = {  
  name: "John",
  age: 30
};
console.log(person.age); // Output: { name: 'John', age: 30 }

// Arrays  
console.log("DT Arrays");
var numbers = ["kiwi", "fig", "pine", "apple", "orange"];
console.log(numbers.length); // Output: 5
console.log(numbers[4]); // Output: orange
