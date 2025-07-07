
console.log(l);
const name = 'mulham';
console.log(name);
const age = 17;
console.log(age);
const isStudent = true;
console.log(isStudent);
result = 2+ 3;
console.log(result); 
const massage = 'Hello, ' + name
console.log(massage);
const myArray = ['red', 'green', 'blue'];
console.log(myArray);
ourArray=myArray[1];
myArray.push('yellow') ; // Adding a new element to the array 
console.log(myArray);
myArray[1]= 'purple'; // Changing the second element
console.log(myArray);
myArray.shift(); // Removing the first element from the array
console.log(myArray);
console.log(ourArray);
function add(){
    console.log(5 + 5);
}
add();
function isEven (number){
    if (number %2===0) {
        console.log('True');
    } 
    else {
        console.log('False');
    }  
} 
console.log(isEven(10)); 
console.log(isEven(11)); 
function greet(Name) {
    console.log('Hello, ' + Name + '!');
}
console.log(greet('Mulham'));
console.log(greet('John'));
const pi = 3.14; // Constant for the value of π
function calculateArea (radius) {
    return pi * radius** 2; // Area of a circle = π * r^2
}
console.log(calculateArea(10));
function reverseString(str) {
    return str.split('').reverse().join(''); // Split the string into an array, reverse it, and join it back
}
console.log(reverseString('hello')); 
 if (5 > 3) {
    console.log('5 is greater than 3');
}
if (5%2 === 0) { // == compares values, === compares values and types
    console.log('5 is even');
} else {    
    console.log('5 is odd');    
 }
  let student = 75; 
 if (student>=0){
 if (student >= 60) {
    console.log('You passed the exam!');
 } else{
    console.log('You failed the exam.');
 }
 }else{
    console.log('Invalid student score.');
 }
 let day = 5
 switch (day) {
 case 1:
    console.log('sunday');
    break;
     case 2:
    console.log('munday');
    break;
     case 3:
    console.log('tuesday');
    break;
     case 4:
    console.log('wednesday'); 
    break;
     case 5:
    console.log('thursuday');
    break;
     case 6:
    console.log('friday');
    break;
     case 7:
    console.log('saturday');
    break;
     default:
    console.log("Unknown");
 }
 let Age = 17;
 let votingAge = (age>=18);
 console.log(votingAge ? 'You can vote.' : 'You cannot vote.'); 
  i=1
while (i <= 5) {
    console.log(i);
    i++;}
while (i <= 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}
let NUMBER;

do {
  NUMBER = parseInt(prompt("Enter a number:"));
} while (NUMBER >= 0);

console.log("You entered a negative number:", NUMBER);
let NAMES = ["Sara", "Ali", "Zain", "Omar"];

for (let i = 0; i < NAMES.length; i++) {
  console.log(NAMES[i]);
}
let NUmbers = [5, 10, 15, 20];
let Sum = 0;

for (let i = 0; i < NUmbers.length; i++) {
  Sum += NUmbers[i];
}

console.log("Sum:", Sum); 
