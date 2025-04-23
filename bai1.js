var massMark1 = 78;
var heightMark1 = 1.69;
var massJohn1 = 92;
var heightJohn1 = 1.95; 

var markBMI1 = (massMark1/(heightMark1*heightMark1));
var johnBMI1 = (massJohn1/(heightJohn1*heightJohn1));

var markHigherBMI1 = markBMI1 > johnBMI1;

console.log("Data 1: Mark's BMI = " + markBMI1.toFixed(2) + ", John's BMI = " + johnBMI1.toFixed(2));
console.log(markHigherBMI1);

var massMark2 = 95;
var heightMark2 = 1.88;
var massJohn2 = 85;
var heightJohn2 = 1.76;

var markBMI2 = (massMark2/(heightMark2*heightMark2));
var johnBMI2 = (massJohn2/(heightJohn2*heightJohn2));

var markHigherBMI2 = markBMI2 > johnBMI2;

console.log("Data 2: Mark's BMI = " + markBMI2.toFixed(2) + ", John's BMI = " + johnBMI2.toFixed(2));
console.log(markHigherBMI2);

