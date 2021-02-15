//COMM 644 Assignment 1
//Sara Powers
//2/17/2021


//STEP 1: camelCaseNotation

//  let someMonth;
//  function theMonth();
//  let currentMonth;
//  let summerMonth;
//  let myLibraryFunction;


//STEP 2: expression examples

//  numeric literal expression: 3.14
//  string literal expression: "Hello World"
//  Boolean literal expression: true
//  null literal expression: null


//STEP 3: complex/variable expressions

//  let milesPerGallon = 240 / 60;
//  let hoursInWeek = 7 * 24;


//STEP 4: declare identifiers

//  let sFirstName;
//  let sLastName;
//  let sAddress;
//  let sCity;
//  let sState;
//  let iZipCode;
//  let iYourAge;
//  let sReferralSource;
//  let bLetContact;


//STEP 5: declare and assign variables

//  let sFirstName = "Sara";
//  let sLastName = "Powers";
//  let bLetContact = false;


//STEP 6: coercion example of a string and number

//let date;
//date = "February " + 17;
//window.console.log(date);
//window.console.log(typeof date);


//STEP 7: coercion examples with Boolean type

//adding a string and a Boolean 
//let hwStatus;
//hwStatus = "completed " + false;
//window.console.log(hwStatus);
//window.console.log(typeof hwStatus);

//adding a number and a Boolean
//let theYear;
//theYear = 2021 + true;
//window.console.log(theYear);
//window.console.log(typeof theYear);


//STEP 8: This example is an invalid string literal because backslashes
//are needed to denote that the quotes and apostrophe in the string are 
//not end-of-string terminators.

//let someString = 'Who once said, \"Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former.\"?';
//window.console.log(someString);


//STEP 9: examples of variables with null and undefined values

//null value
//let nullVariable = null;
//window.console.log(nullVariable);

//undefined value
//let undefVariable;
//window.console.log(undefVariable);


//STEP 10: using unary typeof operator on literal types

//typeof string literal
//window.console.log(typeof "hello world");

//typeof number literal
//window.console.log(typeof 14);

//typeof Boolean literal
//window.console.log(typeof false);

//typeof object literal
//window.console.log(typeof {toys:3, grapes:5});

//typeof undefined literal
//window.console.log(typeof undefLiteral);


//STEP 11: using an alert box and concatenation operator

//window.alert("Hello " + "Zak Ruvalcaba" + ", welcome to the javaScript class!");


//STEP 12: substituting a variable into an alert with a concatenated string 

//let name = "Sara Powers";
//window.alert("Hello " + name + ", welcome to the javaScript class!");


//STEP 13: alert string with concatenated variables and hard coded text

//let name = "Sara Powers";
//let course = "JavaScript";
//window.alert("Hello " + name + ", welcome to the " + course + " class!");


//STEP 14: alert string with concatenated variables and hard coded text and
//a line break

//let name = "Sara Powers";
//let course = "JavaScript";
//window.alert("Hello " + name + ".\n" + "Welcome to the " + course + " class!");


//STEP 15: alert string with concatenated variables, hard coded text, a variable
//from a prompt response, and a line break

//let name = window.prompt("Enter your name: ");
//let course = "JavaScript";
//window.alert("Hello " + name + ".\n" + "Welcome to the " + course + " class!");


//STEP 16: alert string with concatenated variables, hard coded text, variables
//from prompt responses, and a line break

//let course = window.prompt("Enter the course you are taking: ");
//window.alert("Hello " + window.prompt("Enter your name: ") + ".\n" + "Welcome to \
//the " + course + " class!");


//STEP 17: declaring two variables and then adding and desplaying them in the console

//let x = 10;
//let y = 20;
//window.console.log(x + y);


//STEP 18: adding and assigning a number to a declared variable

//let x = 20;
//window.console.log(x += 20);


//STEP 19: multiplying and assigning a number to a declared variable

//let x = 20;
//window.console.log(x *= 5);


//STEP 20: finding the modulus and dividing and assigning 1

//let x = 20 % 3;
//window.console.log(x /= 1);


//STEP 21: comparison and logicial operator combination resulting in true

//let x = 3;
//let y = 5;
//window.console.log(x < y && y > x);


//STEP 22: comparison and logical operator combination resulting in false

//let x = 7;
//let y = 2;
//window.console.log(x === y || y > x);