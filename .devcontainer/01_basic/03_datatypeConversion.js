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

// Coversion other input to boolean
// number to boolean
let input1 = 1;
let input2 = 0;
let input3 = 122;
console.table([input1,input2,input3]) // 1,0,122
console.table([typeof input1, typeof input2, typeof input3])// number, number, number

let input1ToBoolean = Boolean(input1);
let input2ToBoolean = Boolean(input2);
let input3ToBoolean = Boolean(input3);

console.table([input1ToBoolean, input2ToBoolean, input3ToBoolean])// true, false, true.
console.table([typeof input1ToBoolean,typeof input2ToBoolean,typeof input3ToBoolean])// boolean, boolean, boolean

// String to Boolean
let input4 = "";
let input5 = "Hozefa";
let input6 = "true";
let input7 = null;
console.table([input4,input5,input6,input7]) // undefined,Hozefa,true,null
console.table([typeof input4, typeof input5, typeof input6, typeof input7])// string, string, string, object

let input4ToBoolean = Boolean(input4);
let input5ToBoolean = Boolean(input5);
let input6ToBoolean = Boolean(input6);
let input7ToBoolean = Boolean(input7);

console.table([input4ToBoolean, input5ToBoolean, input6ToBoolean, input7ToBoolean])// false, true, true, false
console.table([typeof input4ToBoolean,typeof input5ToBoolean,typeof input6ToBoolean, typeof input7ToBoolean])// boolean, undefined, boolean, boolean

//conversion of inputs to String
// number to string
let num1 = 11;
let num2 = 0;
let num3 = null;

console.table([num1,num2,num3])// 11,0,null
console.log([typeof num1,typeof num2,typeof num3])// number,number,object

let num1ToString = String(num1);
let num2ToString = String(num2);
let num3ToString = String(num3);

console.table([num1ToString,num2ToString,num3ToString])// 11,0,null.
console.table([typeof num1ToString,typeof num2ToString,typeof num3ToString])// string, string, string

//Boolean to STring
let bool1 = true;
let bool2 = false;

console.table([bool1,bool2])// true, false
console.log([typeof bool1,typeof bool1])// boolean, boolean

let bool1ToString = String(bool1);
let bool2ToString = String(bool2);

console.table([bool1ToString,bool2ToString])// true, false.
console.table([typeof bool1ToString,typeof bool1ToString])// string, string