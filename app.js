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

// const users = [
// 	{
// 		name: "Tayyaba",
// 		rollNo:123
// 	},
// 	{
// 		name: "Umra",
// 		rollNo:345
// 	}
// 	, {
// 		name: "Wajeeha",
// 		rollNo:990
// 	}
// ]

// const [ {name}, , {rollNo} ] = users;
// console.log(name,rollNo);

// console.table(users)
// for (let user of users) {
// 	console.log(user.name,user.rollNo);
// }

// const books = [
// 	{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
// 	{ title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
// 	{ title: '1984', author: 'George Orwell', year: 1949 },
// ];

// let [ { title: booTitle, author: bookuthor } ] = books;

// console.log(booTitle, bookuthor);

// const students = [
// 	{ name: 'Alice', age: 18, grades: [85, 90, 92] },
// 	{ name: 'Bob', age: 19, grades: [72, 68, 75] },
// 	{ name: 'Charlie', age: 20, grades: [88, 90, 92] },
// ];

// let [ ,, { name: studentName, grades: [,secondGrade] } ] = students

// console.log(studentName, secondGrade);

// const employees = [
// 	{ name: 'John', position: 'Manager', salary: 5000 },
// 	{ name: 'Alice', position: 'Developer', salary: 4000 },
// 	{ name: 'Bob', position: 'Designer', salary: 3500 },
// ];

// let [ , { name: employeeName, position: employeePosition } ] = employees;
// console.log(employeeName, employeePosition);

// const menu = [
// 	{ name: 'Burger', price: 10, ingredients: ['beef', 'lettuce', 'cheese'] },
// 	{ name: 'Pizza', price: 12, ingredients: ['tomato', 'cheese', 'pepperoni'] },
// 	{ name: 'Salad', price: 8, ingredients: ['lettuce', 'tomato', 'cucumber'] },
// ];

// // let [ , , { name: itemName, ingredients: [ , secondIngredient ], price: itemPrice } ] = menu;

// // console.log(itemName, secondIngredient, itemPrice);

// const cart = [
// 	{ product: 'Laptop', price: 1000, quantity: 2 },
// 	{ product: 'Phone', price: 800, quantity: 1 },
// 	{ product: 'Headphones', price: 100, quantity: 3 },
// ];

// let [ , { product, price: itemPrice, quantity: itemQuantity } ] = cart;

// console.log(product,itemPrice,itemQuantity);

// console.log("hello world");

// function singHappyBirthday() {
// 	console.log("Happy Birthday");
// }

// singHappyBirthday()

// function sum(a, b,c) {
// 	return a+b+c
// }

// console.log(sum(9,8,10));

// let userNum = +prompt("Enter number of which you want  factorial");

// let result = 1;

// for (let i = userNum; i >=1;i-- ){
// 	result *= i
// }
// console.log(result);

// function isEven(num) {
// 	return num%2===0
// }

// function isOdd(num) {
// 	return num%2!== 0
// }

// console.log(isEven(23));
// console.log(isEven(22));
// console.log(isEven(21));
// console.log(isEven(2));
// console.log(isOdd(34));
// console.log(isOdd(33));

// function firstChar(string) {
// 	return string[0]
// }

// console.log(firstChar("Tayyaba"));
// console.log(firstChar("Umra"));

// function findingNum(arr, target) {
// 	let flag = false;
// 	for (var index in arr) {
// 		if (arr[index] === target) {
// 			flag = true;
// 		}
// 	}
// 	if (flag) {
// 		return 'We have found your targeted number at '+index;
// 	}
// 	return "didn't find";
// }

// function findingNum(arr, target) {
// 	for (var i = 0; i < arr.length; i++){
// 		if (arr[ i ] === target) {
// 			return `Your target num is at index ${i}`
// 		}
// 	}
// 	return -1
// }

// console.log(findingNum([1, 2, 3, 5], 5));

//  function expression

// const sumTwoNumbers = function (a,b) {
// 	return a+b
// }

// console.log(sumTwoNumbers(4,5));
// console.log(sumTwoNumbers(5,5));

// arrow functions

// const sumTwoNumbers = (a, b) => a + b;
// console.log(sumTwoNumbers(2, 6));
// console.log(sumTwoNumbers(2, 9));

// const singHappyBirthday = name => `Happy Birthday ${name}`;

// console.log(singHappyBirthday("tayyaba"));

// const isEven = num => num % 2 === 0;
// console.log(isEven(9));
// console.log(isEven(8));

// function odd (a, b) {
// 	return a+b
// }

// const multiply = function (a, b) {
// 	return a*b
// }

// const mutltiply = (a, b) => a * b

// functions inside functions

// const app = () => {

// 	const myFunc = () => {
// 		console.log("I m function inside function");
// 	}
// 	console.log("inside app");
// 	myFunc()
// }

// app()

// var is function scoped
// let and const are block scope

// function hello() {
// 	var myName = "Tayyaba";
// }

// console.log(myName);

// {
// 	var yourName = "Umra";
// }
// console.log(yourName);

// it means var will not accessible only outside of the functions
// in the blocks we can access this

// {
// 	let myName="Tayyaba"
// }
// console.log(myName);

// function hello() {
// 	let studentname="Umra"
// }

// console.log(studentname);

// rest parameters\

// function addNumbers(a, b, c,d,...e){
// 	console.log(a,b,c,d);
// 	console.log(e);
// 	for (var i = 0; i < e.length; i++){
// 		console.log(e[i]);
// 	}
// }

// addNumbers(1,2,3,5,3,4,)

// addAll

// const addAll = (...numbers) => {
// 	let sum = 0;
// 	for (let num of numbers) {
// 		sum+=num
// 	}
// 	return sum
// }

// console.log(addAll(6,3,4,2));

// params destructuring in objects

// const person = {
// 	name: "tayyaba",
// 	roll: 12,
// 	course:"WMA"
// }

// function destructure({name,course}) {
// 	console.log(name,course);
// }

// destructure(person)

// function printUserInfo({ name, age }) {
// 	console.log(name,age);
// }

// function productCard({ name, price, description }) {
// 	console.log(name,price,description);
// }

// const getPersonDetails = ({ name, location }) => console.log(name, location);

// const PostCard = function ({ title, author,date }) {
// 	console.log(title,author,date);
// }

// function calculateArea({ length, width }) {
// 	return length*width
// }

// for (var i = 10; i >= 1; i--){
// 	console.log(i)
// }

// let sum = 0;
// for (var i = 1; i <= 10; i++){
// 	sum +=i
// }
// let i = 0;
// while (i < 20) {
// 	i=i + 2;
// 	console.log(i);
// }

// let usertablel = +prompt('Write the table no ');
// for (var i = 1; i <= 10; i++){
// 	console.log(`${usertablel} X ${i} = ${usertablel*i}`);
// }

// let userFacNum = +prompt("Enter num of which you want factorial");

// let result = 1;

// for (var i = userFacNum; i >= 1; i--){
// 	result *= i
// }
// console.log(result);

// for (let i = 1; i <= 50; i++){
// 	if (i % i+1 === 0) {
// 		console.log(`prime number ${i}`);
// 	}
// }

// prime numbers

// for (var number= 2; number <= 50; number++){
// 	let isPrime = true;
// 	for (var i = 2; i < number; i++){
// 		if (number % i === 0) {
// 			isPrime = false;
// 			break;
// 		}
// 	}
// 	if (isPrime) {
// 		console.log(number);
// 	}
// }

// for (var i = 0; i <= 50; i++){
// 	if (i % 2 !== 0) {
// 		console.log(i);
// 	}
// }

// let userSeries = prompt("Enter series amoung which you want largest number").split(",");
// // console.log(userSeries);

// let largestNum = userSeries[ 0 ];

// for (var i = 0; i < userSeries.length; i++){
// 	if (userSeries[ i ] > largestNum) {
// 		largestNum= userSeries[i]
// 	}
// }
// console.log(largestNum);

// let palidronWord = prompt("Enter the word to be checked it is palidrome or not");

// let check = "";
// for (var i = palidronWord.length-1; i >= 0; i--){
// 	check += palidronWord[ i ];

// }
// if (palidronWord === check) {
// 	document.write('yes it is a palindrome word');
// } else {
// 	document.write('not a palidrome word ');
// }

// vowel check

// let userName = "Tayyaba".toLowerCase();
// let vowels = [ "a", "e", "i", "o", "u" ];
// let count = 0;

// for (var i = 0; i < userName.length; i++){
// 	if (vowels.includes(userName[i])) {
// 		count++
// 	}

// }
// console.log(count);

// let num = "55555";
// let arr = num.split("");
// let sum = 0;
// for (var i = 0; i < arr.length; i++){
// 	sum += +arr[i]
// }
// console.log(sum);

// let num = "900087";

// let arr = num.split("");
// let reversedNum = "";
// for (var i = arr.length - 1; i >= 0; i--){
// 	reversedNum += +arr[i]
// }
// console.log(reversedNum);

// let computerNum = Math.floor(Math.random() * 100 + 1);
// console.log(computerNum);

// let userNum = +prompt('Enter your num');

// while (userNum !== computerNum) {
// 	if (userNum > computerNum) {
// 		console.log('Lower');
// 	} else if (userNum < computerNum) {
// 		console.log('Higher');
// 	}
// 	userNum = +prompt('Enter your num');
// }

// console.log('Correct');

// let choices = [ "rock", "paper", "scissor" ];
// let computerChoice = choices[ Math.floor(Math.random() * choices.length) ];

// let userChoice = "rock";
// if (userChoice === computerChoice) {
// 	console.log("matched");
// }

//  Callback functions (he functions that pass as an argument to a function)
//  Higher Order Function(The  functions that accept callback functions as a parameter)

// function meraKaam(callback){
// 	console.log("I am main function");
// 	callback("Umra")
// }

// function dostKaKaam(dostkaNaam) {
// 	console.log('Hi my name is ' + dostkaNaam);
// }

// meraKaam(dostKaKaam)

// function calculate(num1, num2, callback) {
// 	// console.log(num1,num2);
// 	let result = callback(num1, num2);
// 	console.log(result)
// 	return result
// }

// function operations(a, b) {
// 	let add = a + b;
// 	let sub = a - b;
// 	let mul = a * b;
// 	return[ add,sub,mul]
// }

// console.log(calculate(12, 23, operations));

// functions returning functions

// function myFunc() {
// 	function hello() {
// 		return("hello");
// 	}
// 	return hello
// }

// let ans = myFunc();

// console.log(ans());

// function additionGenerator(num1) {

// 	function another(num2) {
// 		return num1+num2
// 	}
// 	return another

// }

// let result = additionGenerator(9);
// console.log(result(10));

// function greetingGenerator(greetingMessage) {
// 	return function (name) {
// 		return `${greetingMessage} ${name}`;
// 	}
// }

// let result = greetingGenerator("Hello everyone!");
// let final = result("Tayaba");
// console.log(final);

// function count() {
// 	let count = 0;
// 	return function () {
// 		count++;
// 		return count
// 	}
// }

// let increment = count();
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());

// function count() {
// 	let count = 0;
// 	return function () {
// 		count++;
// 		return count

// 	}
// }
// let increment = count();
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());

// function count() {
// 	let count = 0;
// 	return function incre() {
// 		count++;
// 		return count
// 	}
// }

// let increment = count();
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());

// function powerCalculator(num) {
// 	return function (power) {
// 		return num **power
// 	}
// }

// let result = powerCalculator(3);
// console.log(result(4));

// let numbers = [ 1, 2, 3, 4 ];

// function myFunc(num,index) {
// 	console.log(`No is ${num} and index is ${index} and mul by 2 is ${num*2}`);
// }
// // for (var i = 0; i < numbers.length; i++){
// // 	myFunc(numbers[i],i)
// // }
// let result=[]

// numbers.forEach(function (number, index) {
// 	result.push(number)
// })
// console.log(result);

// let names = [ "Tayyaba", "Umra", "Wajeeha" ];

// function printName(name) {
// 	console.log(name);
// }
// names.forEach(printName)

// let numbers = [ 1, 2, 3, 4 ];

// function multiply(numbers) {
// 	let updatedArray = [];

// 	numbers.forEach(num => {
// 		updatedArray.push(num*2)
// 	});
// 	return updatedArray

// }
// let result = multiply(numbers);
// console.log(result);

// const books = [
// 	{
// 		title: 'Smarter way to learn javascript',
// 		author: 'XYZ',
// 	},
// 	{
// 		title: "python",
// 		author:"Micheal"
// 	},
// 	{
// 		title: "Js",
// 		author:"John"
// 	}
// ];
// books.forEach(function ({title,author}) {
// 	console.log(title, author);
// })

// let numbers = [1, 2, 3, 4, 5];
// let sum=0

// numbers.forEach((num) => {
// 	if (num % 2 === 0) {

// 		sum +=num
// 	}
// });
// console.log(sum);

// strings.forEach(str => {
// 	console.log(str.length);
// })

// let numbers = [ 45, 89, 900, 110, 70 ];

// let largestNum = numbers[ 0 ];

// numbers.forEach(num => {

// 	if (num > largestNum) {
// 		largestNum=num
// 	}
// })
// console.log(largestNum);

// let strings = [ "Hellao", "Heaai", "Straing" ];
// let found = false;
// let count=0

// strings.forEach(str => {
// 	if(	str.includes("a")
// 	) {
// 		found = true;
// 		count++
// 	}
// })

// if (found) {
// 	console.log("found",count);
// }
// else {
// 	console.log("not found");
// }

// let names = [ 'Tayyaba', 'Umra', 'Maryam' ];

// function takingNames(names) {
// 	let string=[]
// 	names.forEach(name => {
// 		string.push(name)
// 	})
// 	return string
// }

// let result = takingNames(names);
// console.log(result);

// let numbers = [ -23, 45, 90, 34, 89, -90 ];

// function takingNumbers(numbers) {
// 	let updatedArray=[]
// 	numbers.forEach(num => {
// 		if (num > 0) {
// 		 updatedArray.push(num)
// 		}
// 	});
// 	return updatedArray
// }
// let result = takingNumbers(numbers);
// console.log(result);

// let names = [ 'Tayyaba', 'Umrajldld', 'Maryam',"Dua" ];
// function takingNames(names) {

// 	let updatedArray = [];
// 	names.forEach(name => {
// 		if (name.length > 5) {
// 			updatedArray.push(name)
// 		}

// 	});
// 	return updatedArray;
// }
// let result = takingNames(names);
// console.log(result);

// let numbers = [1, 2, 3, 4, 5];

// const square = num => console.log(num*num);;

// let result = numbers.map(square);
// console.log(result);

// const users = [
// 	{
// 		firstName: 'Tayyaba',
// 		rollNo: 12,
// 	},
// 	{
// 		firstName: 'Umra',
// 		rollNo: 678,
// 	},
// 	{
// 		firstName: "Wajeeha",
// 		rollNo:90
// 	},
// ];

// console.log(users.map(({ firstName }) => firstName));

// const names = [ "Tayyaba", 'umra', "saad" ];

// console.log(names.map(name=>name.toUpperCase()));

// const students = [
// 	{
// 		name: 'Tayyaba',
// 		age: 21,
// 	},
// 	{
// 		name: 'Umra',
// 		age: 67,
// 	},
// 	{
// 		name: 'Bisma',
// 		age: 18,
// 	},
// ];

// console.log(students.map(student => {

// 	for (var i = student.length - 1; i >= 0; i--){
// 		return student[i]
// 	}

// }));

// const strings = [ 'hello', "hi", "bye" ];

// console.log(strings.map(string => {
// 	return (string.split("").reverse().join(""));
// }));

// const books = [
// 	{
// 		title: "Js",
// 		author:"Tayyaba"
// 	}
// 	, {
// 		title: "Python",
// 		author:"Sara"
// 	}
// ]

// console.log(books.map(book => {
// 	return {
// 		...book,
// 		formattedTitle:`${book.title} and ${book.author}`
// 	}
// }));

// const numbers = [ 1, 2, 33, 45, 67 ];
// console.log(numbers.map(num=>String(num)));

// Filter Method

// const numbers = [ 1, 2, 3, 4, 5 ];

// console.log(numbers.filter(num => {
// 	return num%2!==0
// }));

// function filterByType(arr, type) {
// 	return arr.filter((element) => {
// 		return typeof element === type;
// 	});
// }

// console.log(filterByType([2, 'Tayyab', true, 5, 'Umra'], 'number'));

// const getUniqueValues = (arr) => {
// 	console.log(arr);
// 	arr.filter((num,index,self) => {
// 		console.log(num, index, self);
// 		if (self.indexOf(num) === index) {
// 			console.log('matched');
// 		}
// 	})

// }
// console.log(getUniqueValues([1,1,2,34]));

// Removing duplicate elements

// const numbers = [ 1, 2,2,3, 3, 4, 5, 5, 6, 7,7, 7 ];

// console.log(numbers.filter((num, index, array) => {
// 	if (array.indexOf(num) === index) {
// 		return num
// 	}
// }))

//Create a function that takes an array of numbers as input and uses the filter() method to return a new array containing only the prime numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10, 2, 3, 13];


console.log(numbers.filter(num => {
	if (num < 2) {
		return false
	}
	for (var i = 2; i < num; i++){
		if (num % i === 0) {
			return false
		}
	}
	return true;
	
}));