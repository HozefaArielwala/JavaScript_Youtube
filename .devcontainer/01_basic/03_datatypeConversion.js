let score = 33

console.log(typeof score); // Number

score = "33";
console.log(typeof score);// String

//Conversion from String to Number using Number method.
let stringToNum = Number(score) // it will convert string to Number

console.log(stringToNum);
console.log(typeof stringToNum) // number

// if you have given string as 33abc lets see what heppended if we convert it into number
let string1 = '33abc'
console.log(string1);
console.log(typeof string1); // string

let convertToNum = Number(string1);
console.log(convertToNum) // NaN(Not an Number) 
console.log(typeof convertToNum);// still it will give you as number because you applied Number method.

console.log(typeof NaN);

// what if the variable having null as a value and converting it into number
let string2 = null;
console.log(string2); //null
console.log(typeof string2);; // object
let nullToNumber = Number(string2);
console.log(nullToNumber); // 0 
console.log(typeof nullToNumber);// number

// what if the variable having undefined as a value and converting it into number 
let string3 = undefined;
console.log(string3); // undefined
console.log(typeof string3);; // undefined
let undefinedToNumber = Number(string3);
console.log(undefinedToNumber); // NaN
console.log(typeof undefinedToNumber);// number

// what if the variable having false as a value and converting it into number 
let string4 = true;
console.log(string4); // true
console.log(typeof string4);; // boolean
let booeleanToNumber = Number(string4);
console.log(booeleanToNumber); // 1  1 stands for true & 0 stands for false
console.log(typeof booeleanToNumber);// number

// what if the variable having false as a value and converting it into number 
let string5 = false;
console.log(string5); // false
console.log(typeof string5);; // boolean
let booeleanToNumber1 = Number(string5);
console.log(booeleanToNumber1); // 0   0 stands for false
console.log(typeof booeleanToNumber1);// number

