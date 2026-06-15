//Arthimetic 
console.log("Arthimetic Operator");

var a = 10; 
var b = 20; 
console.log(a+b); // addition 
console.log(a-b); // subtraction
console.log(a*b); // multiplication       
console.log(a/b); // division
console.log(a%b); // modulus
console.log(a**b);// exponentiation

// Assignment 
console.log("Assignment Operator");
var c = 30; 
console.log(c+=10);
console.log(c-=10); 
console.log(c*=10);
console.log(c/=10);  

// Comparison Operator 
console.log("Comparison Operator");
console.log(a==b);
console.log(a!=b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a===b);

//Logical Operator 
console.log("Logical Operator");
console.log(a > 0 && b > 0); // o/p - true 
console.log(a > 0 && b < 0); // o/p - false 
console.log(a < 0 || b < 0); // o/p - false 
console.log(!(a > 0)); // o/p - false 

// Unary Operator 
console.log("Unary Operator");

console.log(c++); // 30  c - 31 
console.log(c--); // 31  c - 30  
console.log(--c); // 29 c - 29  
console.log(++c); // 30 c - 30 

// Ternary Operator 
console.log("Ternary Operator");

var result = (a > b) ? "a is greater" : "b is greater"; 
// var variableName = (condition) ? trueValue : falseValue; 
console.log(result); // o/p - b is greater 

