'use strict';

// Starting Javascript
// comments

// console.log("hello world");
// console.log('Tayyaba');
// console.log(`hi my name is tayyaba`);

// var myName = "Tayyaba";
// console.log(myName);

// var myName = "Umra";
// console.log(myName);

// var student = "tayyaba";
// console.log(typeof student);
// console.log(this);

// console.log(window.student);

// rules for naming variables
// camelcase is standard

// var $myName = "Tayyaba";
// console.log($myName);

// let

// let myName = "Tayyaba";
// // let myName = "Umra";
// myName = "Umra";

// console.log(myName);

// constants

// const pi = 3.142;

// console.log(pi);

// string indexing

// let myName = "tayyaba";

// console.log(myName[3]);
// console.log(myName[6]);
// // console.log(myName[7]);

// //last index
// console.log(myName[myName.length-1]);
// console.log(myName[myName.length-2]);
// console.log(myName[myName.length-3]);
// console.log(myName[myName.length-4]);

// string methods

// let myName = "  Tayyaba   ";
// console.log(myName.length);

// let trimmedName=name.trim()
// console.log(trimmedName.length);

// name = name.trim().length
// console.log(name);

// myName.toUpperCase()

// string concatenation

// let firstName = '15';
// let lastName = 15;

// let fullName = firstName-lastName;
// console.log( typeof fullName);

// console.log("hello");

// template literals

// let fsName = "Tayyaba";
// let lsName = "Ali";

// let fullName = `My name is ${fsName} and my father name is ${lsName}`

// console.log(fullName);

// let uniqueNumber;

// console.log(typeof uniqueNumber,uniqueNumber);

// let value = null;

// console.log(value,typeof value);

//  BigInt

// var myNumber = BigInt(12387306306304630);
// var secondNumber = 52852851485214n;
// var normalNumber = 437437;
// console.log(typeof myNumber,myNumber);
// console.log(typeof secondNumber, secondNumber);

// console.log(myNumber+secondNumber);
// console.log(myNumber+normalNumber);

// == vs ===

// console.log(8>7);
// console.log(8<7);
// console.log(8=="8");
// console.log(8==="8");
// console.log(8!==9);
// console.log(18%3);
// console.log(18%5);
// console.log(7 != "7");
// console.log("7" !== "7");

//  truthy and falsy values

// falsy

// 0 "" null undefined false

//  ternery operator

// let age = 14;

// let drink = age >= 18 ? "coffee":age < 15 ? "choc" : "milk"
// console.log(drink);

// if else condition

// let num = 22;
// if (num % 2 === 0) {
// 	console.log("number is even");

// }
// else {
// 	console.log("number is odd");

// }

// console.log("number is odd");

// let day = 7;

// switch (day) {
// 	case 7:
// 		console.log('Today is Monday');
// 		break;
// 	case 'Tuesday':
// 		console.log('Today is Tuesday');
// 		break;
// 	default:
// 		console.log('Today is Friday');
// }

// while loop

// let num = 0;
// while (num < 10) {
// 	console.log(num);
// 	num++;
// }
// console.log(num);

// let num = 0;

// while (num <= 4) {
// 	console.log(num);
// 	num++;
// }

// sum of first 10 natural numbers

// let num = 1;

// let total = 0;

// while (num <= 10) {
// 	total += num+total;
// 	num++;
// }
// console.log(total);

// let num = 1;
// let total = 0;
// while (num <= 10) {
// 	total = total + num;
// 	num++
// }
// console.log(total);

// 1 = 0 + 1;
// 3 = 1 + 2;
// 6 = 3 + 3;
// 10 = 6 + 4;
// 15 = 10 + 5;
// 21 = 15 + 6;
// 28 = 21 + 7;
// 36 = 28 + 8;
// 45 = 36 + 9;
// 55 = 45 + 10;
// console.log(total);

// var i = 0;
// for (; i <= 10; i++){
// 	console.log(i);
// }

// console.log(i);

// let total = 0;

// for (let i = 0; i <= 10; i++){
// 	total = total + i;
// }
// console.log(total);

// 0+1 == 0

// break

// for (var i = 0; i <= 10; i++){
// 	if (i === 5) {
// 		continue;
// 	}
// 	console.log(i);
// }
// console.log(i);
// Write a while loop that prints even numbers from 2 to 20.

// let num = 2;
// while (num <= 20) {
// 	if (num % 2 === 0) {
// 		console.log(num);
// 	}
// 	num++;
// }

// Write a do-while loop that calculates the sum of squares of numbers from 1 to 5.

// let num = 1;
// let sum = 0;
// do {
// 	sum += num * num;
// 	num++;
// } while (num <= 5);

// console.log(sum);

// Reverse a string

// const str = 'Hello World!';

// let reversedStr="";

// for (let i = str.length-1; i >= 0; i--) {
// 	reversedStr += str[i];
// }
// console.log(reversedStr);

// let str = "My name is Tayyaba";

// let reversedStr = "";

// for (var i = str.length - 1; i >= 0; i--){
// 	reversedStr += str[i]
// }

// console.log(reversedStr);

// Write a while loop that prompts the user to enter a password until they enter the correct password ("password123").

// let password ;
// while (password !== "password123") {
// 	password=prompt("Enter password again")
// }

// console.log("your password is true");

// Write a do-while loop that calculates the factorial of a given number.

// let num = 5;
// let factorial=1;

// do {
// 	factorial *= num;
// 	num--
// }
// while (num >= 1)

// console.log(factorial);

// const fruits = [ "apple", "mango", "banana" ];

// console.log(fruits[2], fruits[1]);
// console.table(fruits);
// modifying array

// fruits[ 1 ] = "Tayyaba";
// console.log(fruits);

// const hello = {
// 	name :"Tayyaba"
// }

// console.log(typeof fruits);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(hello));

// Exercise 3: Modifying Array Elements
// a) Create an array called colors with the following initial elements: "red", "green", "blue", "yellow", "orange".
// b) Replace the element at index 2 with the value "purple" using the splice method.

// const colors = [ "red", "green", "blue", "yellow", "orange" ];

// colors.splice(2,1,"purple")
// console.log(colors);

// concatenation of two arrays

// let array1 = ['apple', 'mango', 'banana', 'grapes'];
// let arrys2 = ['js', 'html', 'css'];

// let mergedArray = array1.concat(arrys2);
// console.log(mergedArray);

//  how to clone an array

// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let array2 = [...array1];
// let array2 = [ 1, 2, 3, 4, 5 ];

// let array2 = array1.slice(0);
// let array2 = [].concat(array1);
// spread operator

// let array2 = [ ...array1 ];

// let array2 = array1.slice(0).concat(['tayyaba', 'umra',...array1]);

// array1.push("5");
// console.log('array 1 is', array1);
// console.table('array 2 is', array2);

// console.log(array1 === array2);
