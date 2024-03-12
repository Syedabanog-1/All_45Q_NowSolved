/* Conditional Tests: You don’t have to limit the number of tests you
 create to 10. If you want to try more comparisons, write more tests.
  Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and
 less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/

let chars1: string ='Efficiency';
let chars2: string ='efficiency';
//const Result1: Boolean = true;
//let Result2: Boolean = false;


console.log(chars1 == chars2,);
console.log(chars1 !== chars2);
console.log(chars1.toLowerCase() == chars2);

let num1: number = 15;
let num2: number = 20;
 
console.log(num1 == num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 <= num2);
console.log(num1 >= num2);


let a: number =25;
let b:number =35;
let c: number = 50

console.log(a == b && b == c);
console.log(a !== b && b !== c);
console.log(a == b || b == c);
console.log(a !== b || b !== c);
console.log(a > b && b > c);
console.log(a < b && b < c);
console.log(a >= b && b >= c);
console.log(a <= b && b <= c);
console.log(a > b || b > c);
console.log(a < b || b < c);
console.log(a >= b || b >= c);
console.log(a <= b || b <= c);
let fruitsArray: string [] = ['strawbery','orange','guava','melo','banana'];
console.log(fruitsArray.includes('cherry'));
console.log(fruitsArray.includes('strawbery'));

let colorArray: string [] = ['red','orange','yellow','purple','black','white'];
console.log(colorArray.includes('white'));
console.log(colorArray.includes('blue'));













