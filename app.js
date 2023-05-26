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

// Create two arrays:
// a) fruits1 with the initial elements: "apple", "banana", "cherry"
// b) fruits2 with the initial elements: "orange", "kiwi", "mango"
// Concatenate the two arrays using the slice() method and store the result in a new variable called concatenatedArray1. Make sure the original arrays (fruits1 and fruits2) are not modified.

// Print the concatenatedArray1 to the console.

// const fruits1 = ['apple', 'banana', 'cherry'];
// const fruits2 = ['orange', 'kiwi'];

// const concatenatedArray1 = [...fruits1.slice(0), ...fruits2.slice(0)];
// console.log(concatenatedArray1);

// const concatenatedArray2 = fruits1.concat(fruits2);
// console.log(concatenatedArray2);

// const concatenatedArray3 = [...fruits1, ...fruits2];
// console.log(concatenatedArray3);

// Exercise 1: Printing Array Elements
// a) Create an array called numbers with the following elements: 1, 2, 3, 4, 5.
// b) Use a for loop to iterate over the numbers array and print each element to the console.

// Exercise 2: Summing Array Elements
// a) Create an array called scores with the following elements: 75, 80, 90, 85, 95.
// b) Use a for loop to iterate over the scores array and calculate the sum of all the elements.
// c) Print the sum to the conso

// const numbers = [ 1, 2, 3, 4, 5 ];

// for (var i = 0; i < numbers.length; i++){
// 	console.log(numbers[i]);
// }

// const scores = [ 75, 80, 90, 85, 95 ];

// let sum = 0;

// for (var i = 0; i < scores.length; i++){
// 	sum += scores[i]
// }
// console.log(sum);

// const numbers = [ 2, 5, 8, 11, 14, 17 ];

// let count = 0;

// for (var i = 0; i < numbers.length; i++){
// 	if (numbers[ i ] % 2 === 0) {
// 		count++
// 	}
// }
// console.log(count);

// const numbers = [ 10, 7, 15, 22, 9, 13 ];

// let maxValue = numbers[ 0 ];
// for (var i = 0; i < numbers.length; i++){
// 	if (numbers[ i ] > maxValue) {
// 		maxValue=numbers[i]
// 	}
// }
// console.log(maxValue);

// const numbers = [3, 8, 5, 12, 7, 10];
// let oddNumbers = [];
// for (var i = 0; i < numbers.length; i++){
// 	if (numbers[ i ] % 2 !== 0) {
// 		oddNumbers.push(numbers[i])
// 	}
// }
// console.log(oddNumbers);

// let userPass = prompt("Enteryour password!")
// while (userPass !== "Tayyaba12") {
// 	userPass = prompt('Enteryour password!');
// }
// console.log(userPass);

// for of

// let fruits = [ "apple", "mango", "bannaa","grapes" ];
// let uppercaseArray = [];

// // for (let fruit of fruits) {
// // 	uppercaseArray.push(fruit.toUpperCase())
// // 	// console.log(fruit);
// // }

// // console.log(uppercaseArray);

// for (let index in fruits) {
// 	uppercaseArray.push(  fruits[index].toUpperCase());
// }
// console.log(uppercaseArray);

// const myArray = [ 1, 2, 3, 4, 5, 6 ];

// let [ num1, num2,,num4,...num5 ] = myArray;
// console.log(num1, num2, num4, num5);

// num5.push(9);
// console.log(num5);

// objects

const key = 'phone no';

const obj = {
	'my name': 'tayyaba',
	rollNo: 123,
	course: 'web development',
	hobbies: ['gaming', 'reading'],
	anotherObj: {
		name: 'Micheal',
		roll: 1245,
	},
};
// iteration in objects

// for (let key in obj) {
// 	console.log(obj[key]);
// }

// console.log(Object.keys(obj));

// let objCreate = Object.keys(obj);

// for (let i = 0; i < objCreate.length; i++){
// 	console.log(obj[i]);
// }

// for (let key of Object.keys(obj)) {
// 	console.log(obj[key]);
// }

// obj[key]="tayyaba@gamil.com"

// console.log(obj["my name"]);
// console.log(obj["rollNo"]);
// console.log(obj.course);
// console.log(obj.hobbies);
// console.log(obj.anotherObj.name);
// console.log(obj.anotherObj.roll);

// obj.gender = "female";
// obj[ "mine" ] = true;
// console.log(obj);

// computed properties

// const key1 = 'keymy1';
// const key2 = 'keymy2';

// const value1 = 'value1';
// const value2 = 'value2';

// const myObj = {
// 	[key1]: value1,
// 	[key2]: value2,
// };
// console.log(myObj);

// const car = {
// 	make: "hello",
// 	model: 2021,
// 	year: 2023,
// 	color:"black"
// }

// for (let key in car) {
// 	console.log(car[key]);
// }

// console.log({...["Tayyaba","Umra"]});

// object destructuring

// const student = {
// 	name: "Tayyaba",
// 	rollNo: 123,
// 	course: "Web dev",
// 	gender: "female",
// 	batch:2
// }

// let { name:studentName, course,...restProps } = student;

// console.log(studentName, course, restProps.batch);


// Array of objects

const users = [
	{
		name: "Tayyaba",
		rollNo:123
	},
	{
		name: "Umra",
		rollNo:345
	}
	, {
		name: "Wajeeha",
		rollNo:990
	}
]

const [ {name}, , {rollNo} ] = users;
console.log(name,rollNo);

// console.table(users)
// for (let user of users) {
// 	console.log(user.name,user.rollNo);
// }