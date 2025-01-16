// // // // // // // // 'use strict';


// // // // // // // // // Starting Javascript
// // // // // // // // // comments

// // // // // // // // // console.log("hello world");
// // // // // // // // // console.log('Tayyaba');
// // // // // // // // // console.log(`hi my name is tayyaba`);

// // // // // // // // // var myName = "Tayyaba";
// // // // // // // // // console.log(myName);

// // // // // // // // // var myName = "Umra";
// // // // // // // // // console.log(myName);

// // // // // // // // // var student = "tayyaba";
// // // // // // // // // console.log(typeof student);
// // // // // // // // // console.this);

// // // // // // // // // console.log(window.student);

// // // // // // // // // rules for naming variables
// // // // // // // // // camelcase is standard

// // // // // // // // // var $myName = "Tayyaba";
// // // // // // // // // console.log($myName);

// // // // // // // // // let

// // // // // // // // // let myName = "Tayyaba";
// // // // // // // // // // let myName = "Umra";
// // // // // // // // // myName = "Umra";

// // // // // // // // // console.log(myName);

// // // // // // // // // constants

// // // // // // // // // const pi = 3.142;

// // // // // // // // // console.log(pi);

// // // // // // // // // string indexing

// // // // // // // // // let myName = "tayyaba";

// // // // // // // // // console.log(myName[3]);
// // // // // // // // // console.log(myName[6]);
// // // // // // // // // // console.log(myName[7]);

// // // // // // // // // //last index
// // // // // // // // // console.log(myName[myName.length-1]);
// // // // // // // // // console.log(myName[myName.length-2]);
// // // // // // // // // console.log(myName[myName.length-3]);
// // // // // // // // // console.log(myName[myName.length-4]);

// // // // // // // // // string methods

// // // // // // // // // let myName = "  Tayyaba   ";
// // // // // // // // // console.log(myName.length);

// // // // // // // // // let trimmedName=name.trim()
// // // // // // // // // console.log(trimmedName.length);

// // // // // // // // // name = name.trim().length
// // // // // // // // // console.log(name);

// // // // // // // // // myName.toUpperCase()

// // // // // // // // // string concatenation

// // // // // // // // // let firstName = '15';
// // // // // // // // // let lastName = 15;

// // // // // // // // // let fullName = firstName-lastName;
// // // // // // // // // console.log( typeof fullName);

// // // // // // // // // console.log("hello");

// // // // // // // // // template literals

// // // // // // // // // let fsName = "Tayyaba";
// // // // // // // // // let lsName = "Ali";

// // // // // // // // // let fullName = `My name is ${fsName} and my father name is ${lsName}`

// // // // // // // // // console.log(fullName);

// // // // // // // // // let uniqueNumber;

// // // // // // // // // console.log(typeof uniqueNumber,uniqueNumber);

// // // // // // // // // let value = null;

// // // // // // // // // console.log(value,typeof value);

// // // // // // // // //  BigInt

// // // // // // // // // var myNumber = BigInt(12387306306304630);
// // // // // // // // // var secondNumber = 52852851485214n;
// // // // // // // // // var normalNumber = 437437;
// // // // // // // // // console.log(typeof myNumber,myNumber);
// // // // // // // // // console.log(typeof secondNumber, secondNumber);

// // // // // // // // // console.log(myNumber+secondNumber);
// // // // // // // // // console.log(myNumber+normalNumber);

// // // // // // // // // == vs ===

// // // // // // // // // console.log(8>7);
// // // // // // // // // console.log(8<7);
// // // // // // // // // console.log(8=="8");
// // // // // // // // // console.log(8==="8");
// // // // // // // // // console.log(8!==9);
// // // // // // // // // console.log(18%3);
// // // // // // // // // console.log(18%5);
// // // // // // // // // console.log(7 != "7");
// // // // // // // // // console.log("7" !== "7");

// // // // // // // // //  truthy and falsy values

// // // // // // // // // falsy

// // // // // // // // // 0 "" null undefined false

// // // // // // // // //  ternery operator

// // // // // // // // // let age = 14;

// // // // // // // // // let drink = age >= 18 ? "coffee":age < 15 ? "choc" : "milk"
// // // // // // // // // console.log(drink);

// // // // // // // // // if else condition

// // // // // // // // // let num = 22;
// // // // // // // // // if (num % 2 === 0) {
// // // // // // // // // 	console.log("number is even");

// // // // // // // // // }
// // // // // // // // // else {
// // // // // // // // // 	console.log("number is odd");

// // // // // // // // // }

// // // // // // // // // console.log("number is odd");

// // // // // // // // // let day = 7;

// // // // // // // // // switch (day) {
// // // // // // // // // 	case 7:
// // // // // // // // // 		console.log('Today is Monday');
// // // // // // // // // 		break;
// // // // // // // // // 	case 'Tuesday':
// // // // // // // // // 		console.log('Today is Tuesday');
// // // // // // // // // 		break;
// // // // // // // // // 	default:
// // // // // // // // // 		console.log('Today is Friday');
// // // // // // // // // }

// // // // // // // // // while loop

// // // // // // // // // let num = 0;
// // // // // // // // // while (num < 10) {
// // // // // // // // // 	console.log(num);
// // // // // // // // // 	num++;
// // // // // // // // // }
// // // // // // // // // console.log(num);

// // // // // // // // // let num = 0;

// // // // // // // // // while (num <= 4) {
// // // // // // // // // 	console.log(num);
// // // // // // // // // 	num++;
// // // // // // // // // }

// // // // // // // // // sum of first 10 natural numbers

// // // // // // // // // let num = 1;

// // // // // // // // // let total = 0;

// // // // // // // // // while (num <= 10) {
// // // // // // // // // 	total += num+total;
// // // // // // // // // 	num++;
// // // // // // // // // }
// // // // // // // // // console.log(total);

// // // // // // // // // let num = 1;
// // // // // // // // // let total = 0;
// // // // // // // // // while (num <= 10) {
// // // // // // // // // 	total = total + num;
// // // // // // // // // 	num++
// // // // // // // // // }
// // // // // // // // // console.log(total);

// // // // // // // // // 1 = 0 + 1;
// // // // // // // // // 3 = 1 + 2;
// // // // // // // // // 6 = 3 + 3;
// // // // // // // // // 10 = 6 + 4;
// // // // // // // // // 15 = 10 + 5;
// // // // // // // // // 21 = 15 + 6;
// // // // // // // // // 28 = 21 + 7;
// // // // // // // // // 36 = 28 + 8;
// // // // // // // // // 45 = 36 + 9;
// // // // // // // // // 55 = 45 + 10;
// // // // // // // // // console.log(total);

// // // // // // // // // var i = 0;
// // // // // // // // // for (; i <= 10; i++){
// // // // // // // // // 	console.log(i);
// // // // // // // // // }

// // // // // // // // // console.log(i);

// // // // // // // // // let total = 0;

// // // // // // // // // for (let i = 0; i <= 10; i++){
// // // // // // // // // 	total = total + i;
// // // // // // // // // }
// // // // // // // // // console.log(total);

// // // // // // // // // 0+1 == 0

// // // // // // // // // break

// // // // // // // // // for (var i = 0; i <= 10; i++){
// // // // // // // // // 	if (i === 5) {
// // // // // // // // // 		continue;
// // // // // // // // // 	}
// // // // // // // // // 	console.log(i);
// // // // // // // // // }
// // // // // // // // // console.log(i);
// // // // // // // // // Write a while loop that prints even numbers from 2 to 20.

// // // // // // // // // let num = 2;
// // // // // // // // // while (num <= 20) {
// // // // // // // // // 	if (num % 2 === 0) {
// // // // // // // // // 		console.log(num);
// // // // // // // // // 	}
// // // // // // // // // 	num++;
// // // // // // // // // }

// // // // // // // // // Write a do-while loop that calculates the sum of squares of numbers from 1 to 5.

// // // // // // // // // let num = 1;
// // // // // // // // // let sum = 0;
// // // // // // // // // do {
// // // // // // // // // 	sum += num * num;
// // // // // // // // // 	num++;
// // // // // // // // // } while (num <= 5);

// // // // // // // // // console.log(sum);

// // // // // // // // // Reverse a string

// // // // // // // // // const str = 'Hello World!';

// // // // // // // // // let reversedStr="";

// // // // // // // // // for (let i = str.length-1; i >= 0; i--) {
// // // // // // // // // 	reversedStr += str[i];
// // // // // // // // // }
// // // // // // // // // console.log(reversedStr);

// // // // // // // // // let str = "My name is Tayyaba";

// // // // // // // // // let reversedStr = "";

// // // // // // // // // for (var i = str.length - 1; i >= 0; i--){
// // // // // // // // // 	reversedStr += str[i]
// // // // // // // // // }

// // // // // // // // // console.log(reversedStr);

// // // // // // // // // Write a while loop that prompts the user to enter a password until they enter the correct password ("password123").

// // // // // // // // // let password ;
// // // // // // // // // while (password !== "password123") {
// // // // // // // // // 	password=prompt("Enter password again")
// // // // // // // // // }

// // // // // // // // // console.log("your password is true");

// // // // // // // // // Write a do-while loop that calculates the factorial of a given number.

// // // // // // // // // let num = 5;
// // // // // // // // // let factorial=1;

// // // // // // // // // do {
// // // // // // // // // 	factorial *= num;
// // // // // // // // // 	num--
// // // // // // // // // }
// // // // // // // // // while (num >= 1)

// // // // // // // // // console.log(factorial);

// // // // // // // // // const fruits = [ "apple", "mango", "banana" ];

// // // // // // // // // console.log(fruits[2], fruits[1]);
// // // // // // // // // console.table(fruits);
// // // // // // // // // modifying array

// // // // // // // // // fruits[ 1 ] = "Tayyaba";
// // // // // // // // // console.log(fruits);

// // // // // // // // // const hello = {
// // // // // // // // // 	name :"Tayyaba"
// // // // // // // // // }

// // // // // // // // // console.log(typeof fruits);
// // // // // // // // // console.log(Array.isArray(fruits));
// // // // // // // // // console.log(Array.isArray(hello));

// // // // // // // // // Exercise 3: Modifying Array Elements
// // // // // // // // // a) Create an array called colors with the following initial elements: "red", "green", "blue", "yellow", "orange".
// // // // // // // // // b) Replace the element at index 2 with the value "purple" using the splice method.

// // // // // // // // // const colors = [ "red", "green", "blue", "yellow", "orange" ];

// // // // // // // // // colors.splice(2,1,"purple")
// // // // // // // // // console.log(colors);

// // // // // // // // // concatenation of two arrays

// // // // // // // // // let array1 = ['apple', 'mango', 'banana', 'grapes'];
// // // // // // // // // let arrys2 = ['js', 'html', 'css'];

// // // // // // // // // let mergedArray = array1.concat(arrys2);
// // // // // // // // // console.log(mergedArray);

// // // // // // // // //  how to clone an array

// // // // // // // // // let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // // // // // // // // let array2 = [...array1];
// // // // // // // // // let array2 = [ 1, 2, 3, 4, 5 ];

// // // // // // // // // let array2 = array1.slice(0);
// // // // // // // // // let array2 = [].concat(array1);
// // // // // // // // // spread operator

// // // // // // // // // let array2 = [ ...array1 ];

// // // // // // // // // let array2 = array1.slice(0).concat(['tayyaba', 'umra',...array1]);

// // // // // // // // // array1.push("5");
// // // // // // // // // console.log('array 1 is', array1);
// // // // // // // // // console.table('array 2 is', array2);

// // // // // // // // // console.log(array1 === array2);

// // // // // // // // // Create two arrays:
// // // // // // // // // a) fruits1 with the initial elements: "apple", "banana", "cherry"
// // // // // // // // // b) fruits2 with the initial elements: "orange", "kiwi", "mango"
// // // // // // // // // Concatenate the two arrays using the slice() method and store the result in a new variable called concatenatedArray1. Make sure the original arrays (fruits1 and fruits2) are not modified.

// // // // // // // // // Print the concatenatedArray1 to the console.

// // // // // // // // // const fruits1 = ['apple', 'banana', 'cherry'];
// // // // // // // // // const fruits2 = ['orange', 'kiwi'];

// // // // // // // // // const concatenatedArray1 = [...fruits1.slice(0), ...fruits2.slice(0)];
// // // // // // // // // console.log(concatenatedArray1);

// // // // // // // // // const concatenatedArray2 = fruits1.concat(fruits2);
// // // // // // // // // console.log(concatenatedArray2);

// // // // // // // // // const concatenatedArray3 = [...fruits1, ...fruits2];
// // // // // // // // // console.log(concatenatedArray3);

// // // // // // // // // Exercise 1: Printing Array Elements
// // // // // // // // // a) Create an array called numbers with the following elements: 1, 2, 3, 4, 5.
// // // // // // // // // b) Use a for loop to iterate over the numbers array and print each element to the console.

// // // // // // // // // Exercise 2: Summing Array Elements
// // // // // // // // // a) Create an array called scores with the following elements: 75, 80, 90, 85, 95.
// // // // // // // // // b) Use a for loop to iterate over the scores array and calculate the sum of all the elements.
// // // // // // // // // c) Print the sum to the conso

// // // // // // // // // const numbers = [ 1, 2, 3, 4, 5 ];

// // // // // // // // // for (var i = 0; i < numbers.length; i++){
// // // // // // // // // 	console.log(numbers[i]);
// // // // // // // // // }

// // // // // // // // // const scores = [ 75, 80, 90, 85, 95 ];

// // // // // // // // // let sum = 0;

// // // // // // // // // for (var i = 0; i < scores.length; i++){
// // // // // // // // // 	sum += scores[i]
// // // // // // // // // }
// // // // // // // // // console.log(sum);

// // // // // // // // // const numbers = [ 2, 5, 8, 11, 14, 17 ];

// // // // // // // // // let count = 0;

// // // // // // // // // for (var i = 0; i < numbers.length; i++){
// // // // // // // // // 	if (numbers[ i ] % 2 === 0) {
// // // // // // // // // 		count++
// // // // // // // // // 	}
// // // // // // // // // }
// // // // // // // // // console.log(count);

// // // // // // // // // const numbers = [ 10, 7, 15, 22, 9, 13 ];

// // // // // // // // // let maxValue = numbers[ 0 ];
// // // // // // // // // for (var i = 0; i < numbers.length; i++){
// // // // // // // // // 	if (numbers[ i ] > maxValue) {
// // // // // // // // // 		maxValue=numbers[i]
// // // // // // // // // 	}
// // // // // // // // // }
// // // // // // // // // console.log(maxValue);

// // // // // // // // // const numbers = [3, 8, 5, 12, 7, 10];
// // // // // // // // // let oddNumbers = [];
// // // // // // // // // for (var i = 0; i < numbers.length; i++){
// // // // // // // // // 	if (numbers[ i ] % 2 !== 0) {
// // // // // // // // // 		oddNumbers.push(numbers[i])
// // // // // // // // // 	}
// // // // // // // // // }
// // // // // // // // // console.log(oddNumbers);

// // // // // // // // // let userPass = prompt("Enteryour password!")
// // // // // // // // // while (userPass !== "Tayyaba12") {
// // // // // // // // // 	userPass = prompt('Enteryour password!');
// // // // // // // // // }
// // // // // // // // // console.log(userPass);

// // // // // // // // // for of

// // // // // // // // // let fruits = [ "apple", "mango", "bannaa","grapes" ];
// // // // // // // // // let uppercaseArray = [];

// // // // // // // // // // for (let fruit of fruits) {
// // // // // // // // // // 	uppercaseArray.push(fruit.toUpperCase())
// // // // // // // // // // 	// console.log(fruit);
// // // // // // // // // // }

// // // // // // // // // // console.log(uppercaseArray);

// // // // // // // // // for (let index in fruits) {
// // // // // // // // // 	uppercaseArray.push(  fruits[index].toUpperCase());
// // // // // // // // // }
// // // // // // // // // console.log(uppercaseArray);

// // // // // // // // // const myArray = [ 1, 2, 3, 4, 5, 6 ];

// // // // // // // // // let [ num1, num2,,num4,...num5 ] = myArray;
// // // // // // // // // console.log(num1, num2, num4, num5);

// // // // // // // // // num5.push(9);
// // // // // // // // // console.log(num5);

// // // // // // // // // objects

// // // // // // // // const key = 'phone no';

// // // // // // // // const obj = {
// // // // // // // // 	'my name': 'tayyaba',
// // // // // // // // 	rollNo: 123,
// // // // // // // // 	course: 'web development',
// // // // // // // // 	hobbies: ['gaming', 'reading'],
// // // // // // // // 	anotherObj: {
// // // // // // // // 		name: 'Micheal',
// // // // // // // // 		roll: 1245,
// // // // // // // // 	},
// // // // // // // // };
// // // // // // // // // iteration in objects

// // // // // // // // // for (let key in obj) {
// // // // // // // // // 	console.log(obj[key]);
// // // // // // // // // }

// // // // // // // // // console.log(Object.keys(obj));

// // // // // // // // // let objCreate = Object.keys(obj);

// // // // // // // // // for (let i = 0; i < objCreate.length; i++){
// // // // // // // // // 	console.log(obj[i]);
// // // // // // // // // }

// // // // // // // // // for (let key of Object.keys(obj)) {
// // // // // // // // // 	console.log(obj[key]);
// // // // // // // // // }

// // // // // // // // // obj[key]="tayyaba@gamil.com"

// // // // // // // // // console.log(obj["my name"]);
// // // // // // // // // console.log(obj["rollNo"]);
// // // // // // // // // console.log(obj.course);
// // // // // // // // // console.log(obj.hobbies);
// // // // // // // // // console.log(obj.anotherObj.name);
// // // // // // // // // console.log(obj.anotherObj.roll);

// // // // // // // // // obj.gender = "female";
// // // // // // // // // obj[ "mine" ] = true;
// // // // // // // // // console.log(obj);

// // // // // // // // // computed properties

// // // // // // // // // const key1 = 'keymy1';
// // // // // // // // // const key2 = 'keymy2';

// // // // // // // // // const value1 = 'value1';
// // // // // // // // // const value2 = 'value2';

// // // // // // // // // const myObj = {
// // // // // // // // // 	[key1]: value1,
// // // // // // // // // 	[key2]: value2,
// // // // // // // // // };
// // // // // // // // // console.log(myObj);

// // // // // // // // // const car = {
// // // // // // // // // 	make: "hello",
// // // // // // // // // 	model: 2021,
// // // // // // // // // 	year: 2023,
// // // // // // // // // 	color:"black"
// // // // // // // // // }

// // // // // // // // // for (let key in car) {
// // // // // // // // // 	console.log(car[key]);
// // // // // // // // // }

// // // // // // // // // console.log({...["Tayyaba","Umra"]});

// // // // // // // // // object destructuring

// // // // // // // // // const student = {
// // // // // // // // // 	name: "Tayyaba",
// // // // // // // // // 	rollNo: 123,
// // // // // // // // // 	course: "Web dev",
// // // // // // // // // 	gender: "female",
// // // // // // // // // 	batch:2
// // // // // // // // // }

// // // // // // // // // let { name:studentName, course,...restProps } = student;

// // // // // // // // // console.log(studentName, course, restProps.batch);

// // // // // // // // // Array of objects

// // // // // // // // // const users = [
// // // // // // // // // 	{
// // // // // // // // // 		name: "Tayyaba",
// // // // // // // // // 		rollNo:123
// // // // // // // // // 	},
// // // // // // // // // 	{
// // // // // // // // // 		name: "Umra",
// // // // // // // // // 		rollNo:345
// // // // // // // // // 	}
// // // // // // // // // 	, {
// // // // // // // // // 		name: "Wajeeha",
// // // // // // // // // 		rollNo:990
// // // // // // // // // 	}
// // // // // // // // // ]

// // // // // // // // // const [ {name}, , {rollNo} ] = users;
// // // // // // // // // console.log(name,rollNo);

// // // // // // // // // console.table(users)
// // // // // // // // // for (let user of users) {
// // // // // // // // // 	console.log(user.name,user.rollNo);
// // // // // // // // // }

// // // // // // // // // const books = [
// // // // // // // // // 	{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
// // // // // // // // // 	{ title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
// // // // // // // // // 	{ title: '1984', author: 'George Orwell', year: 1949 },
// // // // // // // // // ];

// // // // // // // // // let [ { title: booTitle, author: bookuthor } ] = books;

// // // // // // // // // console.log(booTitle, bookuthor);

// // // // // // // // // const students = [
// // // // // // // // // 	{ name: 'Alice', age: 18, grades: [85, 90, 92] },
// // // // // // // // // 	{ name: 'Bob', age: 19, grades: [72, 68, 75] },
// // // // // // // // // 	{ name: 'Charlie', age: 20, grades: [88, 90, 92] },
// // // // // // // // // ];

// // // // // // // // // let [ ,, { name: studentName, grades: [,secondGrade] } ] = students

// // // // // // // // // console.log(studentName, secondGrade);

// // // // // // // // // const employees = [
// // // // // // // // // 	{ name: 'John', position: 'Manager', salary: 5000 },
// // // // // // // // // 	{ name: 'Alice', position: 'Developer', salary: 4000 },
// // // // // // // // // 	{ name: 'Bob', position: 'Designer', salary: 3500 },
// // // // // // // // // ];

// // // // // // // // // let [ , { name: employeeName, position: employeePosition } ] = employees;
// // // // // // // // // console.log(employeeName, employeePosition);

// // // // // // // // // const menu = [
// // // // // // // // // 	{ name: 'Burger', price: 10, ingredients: ['beef', 'lettuce', 'cheese'] },
// // // // // // // // // 	{ name: 'Pizza', price: 12, ingredients: ['tomato', 'cheese', 'pepperoni'] },
// // // // // // // // // 	{ name: 'Salad', price: 8, ingredients: ['lettuce', 'tomato', 'cucumber'] },
// // // // // // // // // ];

// // // // // // // // // // let [ , , { name: itemName, ingredients: [ , secondIngredient ], price: itemPrice } ] = menu;

// // // // // // // // // // console.log(itemName, secondIngredient, itemPrice);

// // // // // // // // // const cart = [
// // // // // // // // // 	{ product: 'Laptop', price: 1000, quantity: 2 },
// // // // // // // // // 	{ product: 'Phone', price: 800, quantity: 1 },
// // // // // // // // // 	{ product: 'Headphones', price: 100, quantity: 3 },
// // // // // // // // // ];

// // // // // // // // // let [ , { product, price: itemPrice, quantity: itemQuantity } ] = cart;

// // // // // // // // // console.log(product,itemPrice,itemQuantity);

// // // // // // // // // console.log("hello world");

// // // // // // // // // function singHappyBirthday() {
// // // // // // // // // 	console.log("Happy Birthday");
// // // // // // // // // }

// // // // // // // // // singHappyBirthday()

// // // // // // // // // function sum(a, b,c) {
// // // // // // // // // 	return a+b+c
// // // // // // // // // }

// // // // // // // // // console.log(sum(9,8,10));

// // // // // // // // // let userNum = +prompt("Enter number of which you want  factorial");

// // // // // // // // // let result = 1;

// // // // // // // // // for (let i = userNum; i >=1;i-- ){
// // // // // // // // // 	result *= i
// // // // // // // // // }
// // // // // // // // // console.log(result);

// // // // // // // // // function isEven(num) {
// // // // // // // // // 	return num%2===0
// // // // // // // // // }

// // // // // // // // // function isOdd(num) {
// // // // // // // // // 	return num%2!== 0
// // // // // // // // // }

// // // // // // // // // console.log(isEven(23));
// // // // // // // // // console.log(isEven(22));
// // // // // // // // // console.log(isEven(21));
// // // // // // // // // console.log(isEven(2));
// // // // // // // // // console.log(isOdd(34));
// // // // // // // // // console.log(isOdd(33));

// // // // // // // // // function firstChar(string) {
// // // // // // // // // 	return string[0]
// // // // // // // // // }

// // // // // // // // // console.log(firstChar("Tayyaba"));
// // // // // // // // // console.log(firstChar("Umra"));

// // // // // // // // // function findingNum(arr, target) {
// // // // // // // // // 	let flag = false;
// // // // // // // // // 	for (var index in arr) {
// // // // // // // // // 		if (arr[index] === target) {
// // // // // // // // // 			flag = true;
// // // // // // // // // 		}
// // // // // // // // // 	}
// // // // // // // // // 	if (flag) {
// // // // // // // // // 		return 'We have found your targeted number at '+index;
// // // // // // // // // 	}
// // // // // // // // // 	return "didn't find";
// // // // // // // // // }

// // // // // // // // // function findingNum(arr, target) {
// // // // // // // // // 	for (var i = 0; i < arr.length; i++){
// // // // // // // // // 		if (arr[ i ] === target) {
// // // // // // // // // 			return `Your target num is at index ${i}`
// // // // // // // // // 		}
// // // // // // // // // 	}
// // // // // // // // // 	return -1
// // // // // // // // // }

// // // // // // // // // console.log(findingNum([1, 2, 3, 5], 5));

// // // // // // // // //  function expression

// // // // // // // // // const sumTwoNumbers = function (a,b) {
// // // // // // // // // 	return a+b
// // // // // // // // // }

// // // // // // // // // console.log(sumTwoNumbers(4,5));
// // // // // // // // // console.log(sumTwoNumbers(5,5));

// // // // // // // // // arrow functions

// // // // // // // // // const sumTwoNumbers = (a, b) => a + b;
// // // // // // // // // console.log(sumTwoNumbers(2, 6));
// // // // // // // // // console.log(sumTwoNumbers(2, 9));

// // // // // // // // // const singHappyBirthday = name => `Happy Birthday ${name}`;

// // // // // // // // // console.log(singHappyBirthday("tayyaba"));

// // // // // // // // // const isEven = num => num % 2 === 0;
// // // // // // // // // console.log(isEven(9));
// // // // // // // // // console.log(isEven(8));

// // // // // // // // // function odd (a, b) {
// // // // // // // // // 	return a+b
// // // // // // // // // }

// // // // // // // // // const multiply = function (a, b) {
// // // // // // // // // 	return a*b
// // // // // // // // // }

// // // // // // // // // const mutltiply = (a, b) => a * b

// // // // // // // // // functions inside functions

// // // // // // // // // const app = () => {

// // // // // // // // // 	const myFunc = () => {
// // // // // // // // // 		console.log("I m function inside function");
// // // // // // // // // 	}
// // // // // // // // // 	console.log("inside app");
// // // // // // // // // 	myFunc()
// // // // // // // // // }

// // // // // // // // // app()

// // // // // // // // // var is function scoped
// // // // // // // // // let and const are block scope

// // // // // // // // // function hello() {
// // // // // // // // // 	var myName = "Tayyaba";
// // // // // // // // // }

// // // // // // // // // console.log(myName);

// // // // // // // // // {
// // // // // // // // // 	var yourName = "Umra";
// // // // // // // // // }
// // // // // // // // // console.log(yourName);

// // // // // // // // // it means var will not accessible only outside of the functions
// // // // // // // // // in the blocks we can access this

// // // // // // // // // {
// // // // // // // // // 	let myName="Tayyaba"
// // // // // // // // // }
// // // // // // // // // console.log(myName);

// // // // // // // // // function hello() {
// // // // // // // // // 	let studentname="Umra"
// // // // // // // // // }

// // // // // // // // // console.log(studentname);

// // // // // // // // // rest parameters\

// // // // // // // // // function addNumbers(a, b, c,d,...e){
// // // // // // // // // 	console.log(a,b,c,d);
// // // // // // // // // 	console.log(e);
// // // // // // // // // 	for (var i = 0; i < e.length; i++){
// // // // // // // // // 		console.log(e[i]);
// // // // // // // // // 	}
// // // // // // // // // }

// // // // // // // // // addNumbers(1,2,3,5,3,4,)

// // // // // // // // // addAll

// // // // // // // // // const addAll = (...numbers) => {
// // // // // // // // // 	let sum = 0;
// // // // // // // // // 	for (let num of numbers) {
// // // // // // // // // 		sum+=num
// // // // // // // // // 	}
// // // // // // // // // 	return sum
// // // // // // // // // }

// // // // // // // // // console.log(addAll(6,3,4,2));

// // // // // // // // // params destructuring in objects

// // // // // // // // // const person = {
// // // // // // // // // 	name: "tayyaba",
// // // // // // // // // 	roll: 12,
// // // // // // // // // 	course:"WMA"
// // // // // // // // // }

// // // // // // // // // function destructure({name,course}) {
// // // // // // // // // 	console.log(name,course);
// // // // // // // // // }

// // // // // // // // // destructure(person)

// // // // // // // // // function printUserInfo({ name, age }) {
// // // // // // // // // 	console.log(name,age);
// // // // // // // // // }

// // // // // // // // // function productCard({ name, price, description }) {
// // // // // // // // // 	console.log(name,price,description);
// // // // // // // // // }

// // // // // // // // // const getPersonDetails = ({ name, location }) => console.log(name, location);

// // // // // // // // // const PostCard = function ({ title, author,date }) {
// // // // // // // // // 	console.log(title,author,date);
// // // // // // // // // }

// // // // // // // // // function calculateArea({ length, width }) {
// // // // // // // // // 	return length*width
// // // // // // // // // }

// // // // // // // // // for (var i = 10; i >= 1; i--){
// // // // // // // // // 	console.log(i)
// // // // // // // // // }

// // // // // // // // // let sum = 0;
// // // // // // // // // for (var i = 1; i <= 10; i++){
// // // // // // // // // 	sum +=i
// // // // // // // // // }
// // // // // // // // // let i = 0;
// // // // // // // // // while (i < 20) {
// // // // // // // // // 	i=i + 2;
// // // // // // // // // 	console.log(i);
// // // // // // // // // }

// // // // // // // // // let usertablel = +prompt('Write the table no ');
// // // // // // // // // for (var i = 1; i <= 10; i++){
// // // // // // // // // 	console.log(`${usertablel} X ${i} = ${usertablel*i}`);
// // // // // // // // // }

// // // // // // // // // let userFacNum = +prompt("Enter num of which you want factorial");

// // // // // // // // // let result = 1;

// // // // // // // // // for (var i = userFacNum; i >= 1; i--){
// // // // // // // // // 	result *= i
// // // // // // // // // }
// // // // // // // // // console.log(result);

// // // // // // // // // for (let i = 1; i <= 50; i++){
// // // // // // // // // 	if (i % i+1 === 0) {
// // // // // // // // // 		console.log(`prime number ${i}`);
// // // // // // // // // 	}
// // // // // // // // // }

// // // // // // // // // prime numbers

// // // // // // // // // for (var number= 2; number <= 50; number++){
// // // // // // // // // 	let isPrime = true;
// // // // // // // // // 	for (var i = 2; i < number; i++){
// // // // // // // // // 		if (number % i === 0) {
// // // // // // // // // 			isPrime = false;
// // // // // // // // // 			break;
// // // // // // // // // 		}
// // // // // // // // // 	}
// // // // // // // // // 	if (isPrime) {
// // // // // // // // // 		console.log(number);
// // // // // // // // // 	}
// // // // // // // // // }

// // // // // // // // // for (var i = 0; i <= 50; i++){
// // // // // // // // // 	if (i % 2 !== 0) {
// // // // // // // // // 		console.log(i);
// // // // // // // // // 	}
// // // // // // // // // }

// // // // // // // // // let userSeries = prompt("Enter series amoung which you want largest number").split(",");
// // // // // // // // // // console.log(userSeries);

// // // // // // // // // let largestNum = userSeries[ 0 ];

// // // // // // // // // for (var i = 0; i < userSeries.length; i++){
// // // // // // // // // 	if (userSeries[ i ] > largestNum) {
// // // // // // // // // 		largestNum= userSeries[i]
// // // // // // // // // 	}
// // // // // // // // // }
// // // // // // // // // console.log(largestNum);

// // // // // // // // // let palidronWord = prompt("Enter the word to be checked it is palidrome or not");

// // // // // // // // // let check = "";
// // // // // // // // // for (var i = palidronWord.length-1; i >= 0; i--){
// // // // // // // // // 	check += palidronWord[ i ];

// // // // // // // // // }
// // // // // // // // // if (palidronWord === check) {
// // // // // // // // // 	document.write('yes it is a palindrome word');
// // // // // // // // // } else {
// // // // // // // // // 	document.write('not a palidrome word ');
// // // // // // // // // }

// // // // // // // // // vowel check

// // // // // // // // // let userName = "Tayyaba".toLowerCase();
// // // // // // // // // let vowels = [ "a", "e", "i", "o", "u" ];
// // // // // // // // // let count = 0;

// // // // // // // // // for (var i = 0; i < userName.length; i++){
// // // // // // // // // 	if (vowels.includes(userName[i])) {
// // // // // // // // // 		count++
// // // // // // // // // 	}

// // // // // // // // // }
// // // // // // // // // console.log(count);

// // // // // // // // // let num = "55555";
// // // // // // // // // let arr = num.split("");
// // // // // // // // // let sum = 0;
// // // // // // // // // for (var i = 0; i < arr.length; i++){
// // // // // // // // // 	sum += +arr[i]
// // // // // // // // // }
// // // // // // // // // console.log(sum);

// // // // // // // // // let num = "900087";

// // // // // // // // // let arr = num.split("");
// // // // // // // // // let reversedNum = "";
// // // // // // // // // for (var i = arr.length - 1; i >= 0; i--){
// // // // // // // // // 	reversedNum += +arr[i]
// // // // // // // // // }
// // // // // // // // // console.log(reversedNum);

// // // // // // // // // let computerNum = Math.floor(Math.random() * 100 + 1);
// // // // // // // // // console.log(computerNum);

// // // // // // // // // let userNum = +prompt('Enter your num');

// // // // // // // // // while (userNum !== computerNum) {
// // // // // // // // // 	if (userNum > computerNum) {
// // // // // // // // // 		console.log('Lower');
// // // // // // // // // 	} else if (userNum < computerNum) {
// // // // // // // // // 		console.log('Higher');
// // // // // // // // // 	}
// // // // // // // // // 	userNum = +prompt('Enter your num');
// // // // // // // // // }

// // // // // // // // // console.log('Correct');

// // // // // // // // // let choices = [ "rock", "paper", "scissor" ];
// // // // // // // // // let computerChoice = choices[ Math.floor(Math.random() * choices.length) ];

// // // // // // // // // let userChoice = "rock";
// // // // // // // // // if (userChoice === computerChoice) {
// // // // // // // // // 	console.log("matched");
// // // // // // // // // }

// // // // // // // // //  Callback functions (he functions that pass as an argument to a function)
// // // // // // // // //  Higher Order Function(The  functions that accept callback functions as a parameter)

// // // // // // // // // function meraKaam(callback){
// // // // // // // // // 	console.log("I am main function");
// // // // // // // // // 	callback("Umra")
// // // // // // // // // }

// // // // // // // // // function dostKaKaam(dostkaNaam) {
// // // // // // // // // 	console.log('Hi my name is ' + dostkaNaam);
// // // // // // // // // }

// // // // // // // // // meraKaam(dostKaKaam)

// // // // // // // // // function calculate(num1, num2, callback) {
// // // // // // // // // 	// console.log(num1,num2);
// // // // // // // // // 	let result = callback(num1, num2);
// // // // // // // // // 	console.log(result)
// // // // // // // // // 	return result
// // // // // // // // // }

// // // // // // // // // function operations(a, b) {
// // // // // // // // // 	let add = a + b;
// // // // // // // // // 	let sub = a - b;
// // // // // // // // // 	let mul = a * b;
// // // // // // // // // 	return[ add,sub,mul]
// // // // // // // // // }

// // // // // // // // // console.log(calculate(12, 23, operations));

// // // // // // // // // functions returning functions

// // // // // // // // // function myFunc() {
// // // // // // // // // 	function hello() {
// // // // // // // // // 		return("hello");
// // // // // // // // // 	}
// // // // // // // // // 	return hello
// // // // // // // // // }

// // // // // // // // // let ans = myFunc();

// // // // // // // // // console.log(ans());

// // // // // // // // // function additionGenerator(num1) {

// // // // // // // // // 	function another(num2) {
// // // // // // // // // 		return num1+num2
// // // // // // // // // 	}
// // // // // // // // // 	return another

// // // // // // // // // }

// // // // // // // // // let result = additionGenerator(9);
// // // // // // // // // console.log(result(10));

// // // // // // // // // function greetingGenerator(greetingMessage) {
// // // // // // // // // 	return function (name) {
// // // // // // // // // 		return `${greetingMessage} ${name}`;
// // // // // // // // // 	}
// // // // // // // // // }

// // // // // // // // // let result = greetingGenerator("Hello everyone!");
// // // // // // // // // let final = result("Tayaba");
// // // // // // // // // console.log(final);

// // // // // // // // // function count() {
// // // // // // // // // 	let count = 0;
// // // // // // // // // 	return function () {
// // // // // // // // // 		count++;
// // // // // // // // // 		return count
// // // // // // // // // 	}
// // // // // // // // // }

// // // // // // // // // let increment = count();
// // // // // // // // // console.log(increment());
// // // // // // // // // console.log(increment());
// // // // // // // // // console.log(increment());
// // // // // // // // // console.log(increment());

// // // // // // // // // function count() {
// // // // // // // // // 	let count = 0;
// // // // // // // // // 	return function () {
// // // // // // // // // 		count++;
// // // // // // // // // 		return count

// // // // // // // // // 	}
// // // // // // // // // }
// // // // // // // // // let increment = count();
// // // // // // // // // console.log(increment());
// // // // // // // // // console.log(increment());
// // // // // // // // // console.log(increment());
// // // // // // // // // console.log(increment());
// // // // // // // // // console.log(increment());

// // // // // // // // // function count() {
// // // // // // // // // 	let count = 0;
// // // // // // // // // 	return function incre() {
// // // // // // // // // 		count++;
// // // // // // // // // 		return count
// // // // // // // // // 	}
// // // // // // // // // }

// // // // // // // // // let increment = count();
// // // // // // // // // console.log(increment());
// // // // // // // // // console.log(increment());
// // // // // // // // // console.log(increment());
// // // // // // // // // console.log(increment());

// // // // // // // // // function powerCalculator(num) {
// // // // // // // // // 	return function (power) {
// // // // // // // // // 		return num **power
// // // // // // // // // 	}
// // // // // // // // // }

// // // // // // // // // let result = powerCalculator(3);
// // // // // // // // // console.log(result(4));

// // // // // // // // // let numbers = [ 1, 2, 3, 4 ];

// // // // // // // // // function myFunc(num,index) {
// // // // // // // // // 	console.log(`No is ${num} and index is ${index} and mul by 2 is ${num*2}`);
// // // // // // // // // }
// // // // // // // // // // for (var i = 0; i < numbers.length; i++){
// // // // // // // // // // 	myFunc(numbers[i],i)
// // // // // // // // // // }
// // // // // // // // // let result=[]

// // // // // // // // // numbers.forEach(function (number, index) {
// // // // // // // // // 	result.push(number)
// // // // // // // // // })
// // // // // // // // // console.log(result);

// // // // // // // // // let names = [ "Tayyaba", "Umra", "Wajeeha" ];

// // // // // // // // // function printName(name) {
// // // // // // // // // 	console.log(name);
// // // // // // // // // }
// // // // // // // // // names.forEach(printName)

// // // // // // // // // let numbers = [ 1, 2, 3, 4 ];

// // // // // // // // // function multiply(numbers) {
// // // // // // // // // 	let updatedArray = [];

// // // // // // // // // 	numbers.forEach(num => {
// // // // // // // // // 		updatedArray.push(num*2)
// // // // // // // // // 	});
// // // // // // // // // 	return updatedArray

// // // // // // // // // }
// // // // // // // // // let result = multiply(numbers);
// // // // // // // // // console.log(result);

// // // // // // // // // const books = [
// // // // // // // // // 	{
// // // // // // // // // 		title: 'Smarter way to learn javascript',
// // // // // // // // // 		author: 'XYZ',
// // // // // // // // // 	},
// // // // // // // // // 	{
// // // // // // // // // 		title: "python",
// // // // // // // // // 		author:"Micheal"
// // // // // // // // // 	},
// // // // // // // // // 	{
// // // // // // // // // 		title: "Js",
// // // // // // // // // 		author:"John"
// // // // // // // // // 	}
// // // // // // // // // ];
// // // // // // // // // books.forEach(function ({title,author}) {
// // // // // // // // // 	console.log(title, author);
// // // // // // // // // })

// // // // // // // // // let numbers = [1, 2, 3, 4, 5];
// // // // // // // // // let sum=0

// // // // // // // // // numbers.forEach((num) => {
// // // // // // // // // 	if (num % 2 === 0) {

// // // // // // // // // 		sum +=num
// // // // // // // // // 	}
// // // // // // // // // });
// // // // // // // // // console.log(sum);

// // // // // // // // // strings.forEach(str => {
// // // // // // // // // 	console.log(str.length);
// // // // // // // // // })

// // // // // // // // // let numbers = [ 45, 89, 900, 110, 70 ];

// // // // // // // // // let largestNum = numbers[ 0 ];

// // // // // // // // // numbers.forEach(num => {

// // // // // // // // // 	if (num > largestNum) {
// // // // // // // // // 		largestNum=num
// // // // // // // // // 	}
// // // // // // // // // })
// // // // // // // // // console.log(largestNum);

// // // // // // // // // let strings = [ "Hellao", "Heaai", "Straing" ];
// // // // // // // // // let found = false;
// // // // // // // // // let count=0

// // // // // // // // // strings.forEach(str => {
// // // // // // // // // 	if(	str.includes("a")
// // // // // // // // // 	) {
// // // // // // // // // 		found = true;
// // // // // // // // // 		count++
// // // // // // // // // 	}
// // // // // // // // // })

// // // // // // // // // if (found) {
// // // // // // // // // 	console.log("found",count);
// // // // // // // // // }
// // // // // // // // // else {
// // // // // // // // // 	console.log("not found");
// // // // // // // // // }

// // // // // // // // // let names = [ 'Tayyaba', 'Umra', 'Maryam' ];

// // // // // // // // // function takingNames(names) {
// // // // // // // // // 	let string=[]
// // // // // // // // // 	names.forEach(name => {
// // // // // // // // // 		string.push(name)
// // // // // // // // // 	})
// // // // // // // // // 	return string
// // // // // // // // // }

// // // // // // // // // let result = takingNames(names);
// // // // // // // // // console.log(result);

// // // // // // // // // let numbers = [ -23, 45, 90, 34, 89, -90 ];

// // // // // // // // // function takingNumbers(numbers) {
// // // // // // // // // 	let updatedArray=[]
// // // // // // // // // 	numbers.forEach(num => {
// // // // // // // // // 		if (num > 0) {
// // // // // // // // // 		 updatedArray.push(num)
// // // // // // // // // 		}
// // // // // // // // // 	});
// // // // // // // // // 	return updatedArray
// // // // // // // // // }
// // // // // // // // // let result = takingNumbers(numbers);
// // // // // // // // // console.log(result);

// // // // // // // // // let names = [ 'Tayyaba', 'Umrajldld', 'Maryam',"Dua" ];
// // // // // // // // // function takingNames(names) {

// // // // // // // // // 	let updatedArray = [];
// // // // // // // // // 	names.forEach(name => {
// // // // // // // // // 		if (name.length > 5) {
// // // // // // // // // 			updatedArray.push(name)
// // // // // // // // // 		}

// // // // // // // // // 	});
// // // // // // // // // 	return updatedArray;
// // // // // // // // // }
// // // // // // // // // let result = takingNames(names);
// // // // // // // // // console.log(result);

// // // // // // // // // let numbers = [1, 2, 3, 4, 5];

// // // // // // // // // const square = num => console.log(num*num);;

// // // // // // // // // let result = numbers.map(square);
// // // // // // // // // console.log(result);

// // // // // // // // // const users = [
// // // // // // // // // 	{
// // // // // // // // // 		firstName: 'Tayyaba',
// // // // // // // // // 		rollNo: 12,
// // // // // // // // // 	},
// // // // // // // // // 	{
// // // // // // // // // 		firstName: 'Umra',
// // // // // // // // // 		rollNo: 678,
// // // // // // // // // 	},
// // // // // // // // // 	{
// // // // // // // // // 		firstName: "Wajeeha",
// // // // // // // // // 		rollNo:90
// // // // // // // // // 	},
// // // // // // // // // ];

// // // // // // // // // console.log(users.map(({ firstName }) => firstName));

// // // // // // // // // const names = [ "Tayyaba", 'umra', "saad" ];

// // // // // // // // // console.log(names.map(name=>name.toUpperCase()));

// // // // // // // // // const students = [
// // // // // // // // // 	{
// // // // // // // // // 		name: 'Tayyaba',
// // // // // // // // // 		age: 21,
// // // // // // // // // 	},
// // // // // // // // // 	{
// // // // // // // // // 		name: 'Umra',
// // // // // // // // // 		age: 67,
// // // // // // // // // 	},
// // // // // // // // // 	{
// // // // // // // // // 		name: 'Bisma',
// // // // // // // // // 		age: 18,
// // // // // // // // // 	},
// // // // // // // // // ];

// // // // // // // // // console.log(students.map(student => {

// // // // // // // // // 	for (var i = student.length - 1; i >= 0; i--){
// // // // // // // // // 		return student[i]
// // // // // // // // // 	}

// // // // // // // // // }));

// // // // // // // // // const strings = [ 'hello', "hi", "bye" ];

// // // // // // // // // console.log(strings.map(string => {
// // // // // // // // // 	return (string.split("").reverse().join(""));
// // // // // // // // // }));

// // // // // // // // // const books = [
// // // // // // // // // 	{
// // // // // // // // // 		title: "Js",
// // // // // // // // // 		author:"Tayyaba"
// // // // // // // // // 	}
// // // // // // // // // 	, {
// // // // // // // // // 		title: "Python",
// // // // // // // // // 		author:"Sara"
// // // // // // // // // 	}
// // // // // // // // // ]

// // // // // // // // // console.log(books.map(book => {
// // // // // // // // // 	return {
// // // // // // // // // 		...book,
// // // // // // // // // 		formattedTitle:`${book.title} and ${book.author}`
// // // // // // // // // 	}
// // // // // // // // // }));

// // // // // // // // // const numbers = [ 1, 2, 33, 45, 67 ];
// // // // // // // // // console.log(numbers.map(num=>String(num)));

// // // // // // // // // Filter Method

// // // // // // // // // const numbers = [ 1, 2, 3, 4, 5 ];

// // // // // // // // // console.log(numbers.filter(num => {
// // // // // // // // // 	return num%2!==0
// // // // // // // // // }));

// // // // // // // // // function filterByType(arr, type) {
// // // // // // // // // 	return arr.filter((element) => {
// // // // // // // // // 		return typeof element === type;
// // // // // // // // // 	});
// // // // // // // // // }

// // // // // // // // // console.log(filterByType([2, 'Tayyab', true, 5, 'Umra'], 'number'));

// // // // // // // // // const getUniqueValues = (arr) => {
// // // // // // // // // 	console.log(arr);
// // // // // // // // // 	arr.filter((num,index,self) => {
// // // // // // // // // 		console.log(num, index, self);
// // // // // // // // // 		if (self.indexOf(num) === index) {
// // // // // // // // // 			console.log('matched');
// // // // // // // // // 		}
// // // // // // // // // 	})

// // // // // // // // // }
// // // // // // // // // console.log(getUniqueValues([1,1,2,34]));

// // // // // // // // // Removing duplicate elements

// // // // // // // // // const numbers = [ 1, 2,2,3, 3, 4, 5, 5, 6, 7,7, 7 ];

// // // // // // // // // console.log(numbers.filter((num, index, array) => {
// // // // // // // // // 	if (array.indexOf(num) === index) {
// // // // // // // // // 		return num
// // // // // // // // // 	}
// // // // // // // // // }))

// // // // // // // // //Create a function that takes an array of numbers as input and uses the filter() method to return a new array containing only the prime numbers.

// // // // // // // // // const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10, 2, 3, 13];

// // // // // // // // // console.log(numbers.filter(num => {
// // // // // // // // // 	if (num < 2) {
// // // // // // // // // 		return false
// // // // // // // // // 	}
// // // // // // // // // 	for (var i = 2; i < num; i++){
// // // // // // // // // 		if (num % i === 0) {
// // // // // // // // // 			return false
// // // // // // // // // 		}
// // // // // // // // // 	}
// // // // // // // // // 	return true;

// // // // // // // // // }));

// // // // // // // // // const strings = [ "hello", "moon", "noon", "mam","car","peep" ];

// // // // // // // // // console.log(strings.filter(str => {
// // // // // // // // // 	let result =""
// // // // // // // // // 	for (var i = str.length - 1; i >= 0; i--){
// // // // // // // // // 		result+= str[i]
// // // // // // // // // 	}
// // // // // // // // // 	if (result === str) {
// // // // // // // // // 		return str
// // // // // // // // // 	}
// // // // // // // // // }));

// // // // // // // // // const numbers = [1, 2, 3, 4, 5];

// // // // // // // // // console.log(
// // // // // // // // // 	numbers.reduce((accumulator, currentValue) => {
// // // // // // // // // 		return accumulator + currentValue;
// // // // // // // // // 	}),
// // // // // // // // // );

// // // // // // // // //  accumulator 		currentValue        return

// // // // // // // // //  1					2                    3
// // // // // // // // // 3                     3                   6
// // // // // // // // // 6                       4                10
// // // // // // // // // 10                       5               15

// // // // // // // // // const numbers = [ 5, 6, 7, 1, 2, 9 ];

// // // // // // // // // console.log(numbers.reduce((accumulator, currentValue)=> {
// // // // // // // // // 	return  accumulator+currentValue
// // // // // // // // // }));

// // // // // // // // // //  accumulator         currentValue          Return
// // // // // // // // // // 5                       6                     11
// // // // // // // // // // 11                       7                    18
// // // // // // // // // // 18                        1                    19
// // // // // // // // // // 19                        2                   21
// // // // // // // // // // 21                            9                 30

// // // // // // // // // const numbers = [9, 6, 7, 2, 3, 4, 5];

// // // // // // // // // console.log(
// // // // // // // // // 	numbers.reduce((accumulator, currentValue) => {
// // // // // // // // // 		return accumulator + currentValue;
// // // // // // // // // 	},10),
// // // // // // // // // );

// // // // // // // // //  accumulator         currentValue          Return
// // // // // // // // // 9                      6                      15
// // // // // // // // // 15                    7                     22
// // // // // // // // // 22                 2                       24
// // // // // // // // // 24                      3                       27
// // // // // // // // // 27                  4                         31
// // // // // // // // // 31                 5                            36

// // // // // // // // // const userCart = [
// // // // // // // // // 	{productId:1,productName:"Mobile",price:18000},
// // // // // // // // // 	{productId:2,productName:"Shampoo",price:500},
// // // // // // // // // 	{productId:23,productName:"purse",price:5000}
// // // // // // // // // ]

// // // // // // // // // console.log(userCart.reduce((totalPrice, currentPrice) => {
// // // // // // // // // 	return(totalPrice+currentPrice.price);
// // // // // // // // // },0));

// // // // // // // // // const numbers = [ 1, 2, 45, 890, 100 ];

// // // // // // // // // console.log(numbers.reduce((maxValue, currentValue) => {
// // // // // // // // // 	if (currentValue > maxValue) {
// // // // // // // // // 		 maxValue=currentValue
// // // // // // // // // 	}
// // // // // // // // // 	return maxValue
// // // // // // // // // },numbers[0]));

// // // // // // // // // const strings = [ "Hello", "Umra", "Tayyaba", "Bye" ];
// // // // // // // // // console.log(strings.reduce((concatedValue,currentValue) => {
// // // // // // // // // 	return concatedValue+currentValue
// // // // // // // // // // }));

// // // // // // // // // const numbers = [ 1, 2, 3, 4 ,5];
// // // // // // // // // console.log(
// // // // // // // // // 	numbers.reduce((sum, currentValue) => {
// // // // // // // // // 		return sum + currentValue;
// // // // // // // // // 	}, 0) / numbers.length,
// // // // // // // // // );

// // // // // // // // // const elements = [ "hello", "tayyaba", "hello", "umra", "hello" ];

// // // // // // // // // console.log(elements.reduce((count, currentValue) => {
// // // // // // // // // 	if (currentValue in count) {
// // // // // // // // // 		count[currentValue] += 1;
// // // // // // // // // 	}
// // // // // // // // // 	else {
// // // // // // // // // 		count[currentValue]= 1

// // // // // // // // // 	}
// // // // // // // // // 	return count
// // // // // // // // // },{}));

// // // // // // // // // const elements= [[1,2],["tayyaba","hi"]];
// // // // // // // // // console.log(elements.reduce((flattenArr, subArr)=> {
// // // // // // // // // 	return [...flattenArr,...subArr]
// // // // // // // // // },[]))

// // // // // // // // // sort method mutates the original array

// // // // // // // // // const numbers = [ 7, 1, 2, 45 ];  //1,2,7,45

// // // // // // // // // numbers.sort((a,b)=>b-a);
// // // // // // // // // console.log(numbers);

// // // // // // // // // console.log("7".charCodeAt(0));
// // // // // // // // // console.log("1".charCodeAt(0));
// // // // // // // // // console.log("2".charCodeAt(0));
// // // // // // // // // console.log("45".charCodeAt(0));

// // // // // // // // // const names = [ "Tayyaba", "umra", "Saad", "SAAD", "Saac" ];

// // // // // // // // // console.log(names.sort());

// // // // // // // // // console.log("SAAD".charCodeAt(0));
// // // // // // // // // console.log("Saad".charCodeAt(0));

// // // // // // // // // Realistic Example

// // // // // // // // // const products = [
// // // // // // // // // 	{
// // // // // // // // // 		productId:1,productName:"p1",price:1200
// // // // // // // // // 	},
// // // // // // // // // 	{
// // // // // // // // // 		productId:2,productName:"p2",price:800
// // // // // // // // // 	},
// // // // // // // // // 	{
// // // // // // // // // 		productId:3,productName:"p3",price:200
// // // // // // // // // 	},
// // // // // // // // // 	{
// // // // // // // // // 		productId:4,productName:"p4",price:500
// // // // // // // // // 	},
// // // // // // // // // 	{
// // // // // // // // // 		productId:5,productName:"p5",price:10000
// // // // // // // // // 	}
// // // // // // // // // ]

// // // // // // // // // console.log(products.slice(0).sort(({ price:price1 }, { price:price2 }) => price1-price2));
// // // // // // // // // console.log(products.slice(0).sort(({ price: price1 }, { price: price2 }) => price2 - price1));
// // // // // // // // // console.log(products);

// // // // // // // // // const strings = [ "hi", "hello", "bye" ];
// // // // // // // // // console.log(strings.find(str=>str.length===3));

// // // // // // // // // const students = [
// // // // // // // // // 	{id:1,name:"Tayyaba"},
// // // // // // // // // 	{id:2,name:"umra"},
// // // // // // // // // 	{id:3,name:"wajeeha"},
// // // // // // // // // 	{id:4,name:"laila"},
// // // // // // // // // ]

// // // // // // // // // console.log(students.find(({ id }) => id === 4));
// // // // // // // // // console.log(students);

// // // // // // // // // const numbers = [ 1, 1, 4, 5 ];
// // // // // // // // // console.log(numbers.find(num => num % 2 === 0));

// // // // // // // // // const strings = [ "hello", "hi", "num" ];

// // // // // // // // // function checkString(arr, string) {
// // // // // // // // // 	 return arr.find((str) => str === string) !== undefined;
// // // // // // // // // }
// // // // // // // // // console.log(checkString(strings, 'hello'));
// // // // // // // // // console.log(checkString(strings, 'mine'));

// // // // // // // // // every some

// // // // // // // // // const numbers = [ 2, 3, 4, 5 ];
// // // // // // // // // console.log(numbers.every(num=>num>1));

// // // // // // // // // const products = [
// // // // // // // // // 	{productId:1,name:"Mobile",price:1200},
// // // // // // // // // 	{productId:2,name:"Mobile",price:10000},
// // // // // // // // // 	{productId:3,name:"Mobile",price:20000},
// // // // // // // // // ]

// // // // // // // // // // console.log(products.every(({price})=>price<20_000));

// // // // // // // // // console.log(products.some(({price})=>price>20_000));

// // // // // // // // // function checkingPositive(arr) {
// // // // // // // // // 	return arr.every(num=>num>0)
// // // // // // // // // }

// // // // // // // // // const numbers1 = [ 1, 6, 8, 9, 2 ];
// // // // // // // // // const numbers2 = [ 1, 6, 8, 9, -8 ];
// // // // // // // // // console.log(checkingPositive(numbers1));
// // // // // // // // // console.log(checkingPositive(numbers2));

// // // // // // // // // const strings1 = [ "hello", "Ashish", "umra" ];
// // // // // // // // // const strings2 = [ "hello", "ashish", "umra" ];

// // // // // // // // // console.log(strings1.some(str=>str[0]==="A"));
// // // // // // // // // console.log(strings2.some(str => str[ 0 ] === "A"));

// // // // // // // // // const books = [
// // // // // // // // // 	{ title: "Js", author: "Micheal", rating: 3 },
// // // // // // // // // 	{ title: "python", author: "John", rating: 6 },
// // // // // // // // // 	{ title: "React", author: "Bilish", rating: 5 },
// // // // // // // // // ]

// // // // // // // // // console.log(books.every(({rating})=>rating>4));
// // // // // // // // // console.log(books.every(({ rating }) => rating >= 3));

// // // // // // // // // const numbersDivisble = [ 1, 2, 3, 49, 7 ];
// // // // // // // // // console.log(numbersDivisble.some(num=>num%7===0));

// // // // // // // // // Fill

// // // // // // // // // const myArray = new Array(10).fill("Tayyaba");
// // // // // // // // // console.log(myArray);

// // // // // // // // // const myScores = new Array(100).fill(100);
// // // // // // // // // console.log(myScores);

// // // // // // // // // const numbers = [ 1, 2, 3, 4, 5, 67, 7 ];
// // // // // // // // // numbers.fill(0, 2, 5);
// // // // // // // // // console.log(numbers);

// // // // // // // // // sets

// // // // // // // // // duplicates are not allowed
// // // // // // // // // const numbers = new Set([ "Tayyaba", "Umra", "Ariba" ,"tayyaba","Tayyaba"]);

// // // // // // // // // console.log(numbers);
// // // // // // // // // console.log(numbers[2]);
// // // // // // // // // console.log(numbers.length);

// // // // // // // // // const string = new Set("Tayyaba");
// // // // // // // // // console.log(string);
// // // // // // // // // string.add("umra");
// // // // // // // // // console.log(string);
// // // // // // // // // console.log(string.has("umra"));

// // // // // // // // // for (let element of string) {
// // // // // // // // // 	console.log(element);
// // // // // // // // // }

// // // // // // // // // unique elements

// // // // // // // // // const numbers = [ "Tayyaba", "Tayyaba", 1, 2, 1, "umra", 2,"mine" ];
// // // // // // // // // const uniqueElemets = new Set(numbers)
// // // // // // // // // console.log(uniqueElemets);

// // // // // // // // // let length = 0;
// // // // // // // // // for (let item of uniqueElemets) {
// // // // // // // // // 	length++
// // // // // // // // // }
// // // // // // // // // console.log(length);

// // // // // // // // // const setA = new Set([1, 2, 3]);
// // // // // // // // // const setB = new Set([ 3, 4, 5 ])

// // // // // // // // // // union;

// // // // // // // // // const union = new Set([ ...setA, ...setB ])
// // // // // // // // // console.log(union);

// // // // // // // // // // intersection

// // // // // // // // // const intersection = new Set([ ...setA ].filter(num => setB.has(num)));
// // // // // // // // // console.log(intersection);

// // // // // // // // // // Difference

// // // // // // // // // const differenec = new Set([...setA].filter(num=>!setB.has(num)))
// // // // // // // // // console.log(differenec);

// // // // // // // // // Question # 01

// // // // // // // // // function removeDuplicates(array) {
// // // // // // // // // 	return new Set(array)
// // // // // // // // // }
// // // // // // // // // const numbers=[1,2,3,1,2,3]
// // // // // // // // // console.log(removeDuplicates(numbers));

// // // // // // // // // const getUniqueCharacters= string=>new Set(string)
// // // // // // // // // const string = "Bannana";
// // // // // // // // // console.log(getUniqueCharacters(string));

// // // // // // // // // const set1 = new Set([ "Tayyaba", "umra", 1, 2 ])
// // // // // // // // // const set2 = new Set([ "hello", "umra", 0, 7 ])

// // // // // // // // // const areDisjoint = (setA, setB) => new Set([ ...setA ].filter((e) => !setB.has(e)));
// // // // // // // // // console.log(areDisjoint(set1,set2));

// // // // // // // // // Map data structure

// // // // // // // // // const person = new Map();
// // // // // // // // // person.set(1,"one")
// // // // // // // // // person.set("myName","Tayyaba")
// // // // // // // // // person.set("myHobby","codinh")
// // // // // // // // // console.log(person);

// // // // // // // // // for (let [key,value] of person) {
// // // // // // // // // 	console.log(value,typeof key);
// // // // // // // // // }
// // // // // // // // // console.log(person.get("myName"));

// // // // // // // // // const person = new Map([ [ "firstName", "Tayyaba" ], [ "age", 22 ], [ "course", "Web dev" ] ]);

// // // // // // // // // console.log(person);
// // // // // // // // // console.log(person.get("firstName"));
// // // // // // // // // console.log(person.get("age"));
// // // // // // // // // console.log(person.get("course"));
// // // // // // // // // for (let [key,value] of person) {
// // // // // // // // // 	console.log(key,typeof key , value);
// // // // // // // // // }

// // // // // // // // // const phoneBook = new Map([
// // // // // // // // // 	['Tayyaba', '03168902299'],
// // // // // // // // // 	['Umra', '03156789'],
// // // // // // // // // 	['Saad', '879628'],
// // // // // // // // // ]);

// // // // // // // // // phoneBook.set(['Bibi', '888934973']);

// // // // // // // // // console.log(phoneBook.get('Tayyaba'));
// // // // // // // // // console.log(phoneBook.get('Umra'));
// // // // // // // // // console.log(phoneBook.get('Saad'));

// // // // // // // // // function frequencyTest(string) {
// // // // // // // // // 	let words = string.split(' ');   //["hello","word","hello"]
// // // // // // // // // 	const frequency = new Map();  // {["hello",2],["world",1]}

// // // // // // // // // 	for (let word of words) {  //"hello"
// // // // // // // // // 		console.log(word);
// // // // // // // // // 		const count = frequency.get(word) || 0;
// // // // // // // // // 		frequency.set(word,count+1)
// // // // // // // // // 	}
// // // // // // // // // 	return frequency
// // // // // // // // // }

// // // // // // // // // console.log(frequencyTest('hello world hello'));

// // // // // // // // // character count

// // // // // // // // // function characterCount(string) {
// // // // // // // // // 	let characters = string.split("");
// // // // // // // // // 	let frequency = new Map()
// // // // // // // // // 	for(let char of characters) {
// // // // // // // // // 		const count= frequency.get(char) || 0;
// // // // // // // // // 		frequency.set(char,count+1)
// // // // // // // // // 	}
// // // // // // // // // 	return frequency
// // // // // // // // // }

// // // // // // // // // console.log(characterCount("Tayyaba"));

// // // // // // // // // function uniqueValue(numbers) {
// // // // // // // // // 	let frequency = new Map()
// // // // // // // // // 	for (let num of numbers) {
// // // // // // // // // 		const count = frequency.get(num) || 0;
// // // // // // // // // 		frequency.set(num,count+1)
// // // // // // // // // 	}
// // // // // // // // // 	return frequency
// // // // // // // // // }

// // // // // // // // // console.log(uniqueValue([1,1,22,22,3,3]));

// // // // // // // // // const person1 = {
// // // // // // // // // 	name: 'Tayyaba',
// // // // // // // // // 	age: 22,
// // // // // // // // // };

// // // // // // // // // const person2 = {
// // // // // // // // // 	name: "Umra",
// // // // // // // // // 	age:21
// // // // // // // // // }

// // // // // // // // // const personExtraInfo = new Map();
// // // // // // // // // personExtraInfo.set(person1, { course: 'web dev', hobby: 'coding' });

// // // // // // // // // console.log(personExtraInfo);
// // // // // // // // // console.log(person1.age, personExtraInfo.get(person1).course);

// // // // // // // // // const umraExtraInfo = new Map();
// // // // // // // // // umraExtraInfo.set(person2, { nickname: "munnu", finaince: "Usmaa" })

// // // // // // // // // console.log(person2.age,umraExtraInfo.get(person2).finaince);

// // // // // // // // // Object assign

// // // // // // // // // const obj1 = {
// // // // // // // // // 	name: "Tayyaba",
// // // // // // // // // 	age:22
// // // // // // // // // }

// // // // // // // // // const obj3 = {
// // // // // // // // // 	course: "web dev",
// // // // // // // // // 	day:"Monday"
// // // // // // // // // }
// // // // // // // // // const clonnedObj = Object.assign({}, obj1)
// // // // // // // // // // console.log(obj===obj1);
// // // // // // // // // console.log(clonnedObj);

// // // // // // // // // const anotherClonning = Object.assign({},obj3)
// // // // // // // // // console.log(anotherClonning===obj3);
// // // // // // // // // console.log(anotherClonning);

// // // // // // // // // Optional Chainning

// // // // // // // // // const person = {
// // // // // // // // // 	name: "Tayyaba",
// // // // // // // // // 	// course:{batch1:"web dev"}
// // // // // // // // // }

// // // // // // // // // console.log(person?.name);
// // // // // // // // // console.log(person?.course?.batch1);

// // // // // // // // // const data = {
// // // // // // // // // 	user: {
// // // // // // // // // 		name: 'John',
// // // // // // // // // 		address: {
// // // // // // // // // 			street: '123 Main St',
// // // // // // // // // 			city: 'New York',
// // // // // // // // // 			zipCode: '10001',
// // // // // // // // // 		},
// // // // // // // // // 	},
// // // // // // // // // };

// // // // // // // // // const zipCode=(data?.user?.address?.zipCode);
// // // // // // // // // console.log(zipCode|| "Not avaiale");

// // // // // // // // // const user = {
// // // // // // // // // 	name: 'Alice',
// // // // // // // // // 	getInfo: function () {
// // // // // // // // // 		return 'User information: ' + this.name;
// // // // // // // // // 	},
// // // // // // // // // };

// // // // // // // // // const result = user?.getInfo();
// // // // // // // // // console.log(result || "Method not available");
// // // // // // // // // const arr = [1, 2];

// // // // // // // // // const index = arr?.[ 2 ];
// // // // // // // // // console.log(index|| "index not avaialbe");

// // // // // // // // // Methods

// // // // // // // // // console.log(window.prompt());

// // // // // // // // // const obj1 = {
// // // // // // // // // 	name: "Tayyaba",
// // // // // // // // // 	course: "female",
// // // // // // // // // 	about: function(){
// // // // // // // // // 		console.log(`My name is ${this.name} and my course is ${this.course}`);

// // // // // // // // // 	}
// // // // // // // // // }

// // // // // // // // // // console.log(obj1.gender);
// // // // // // // // // // console.log(obj1.name);
// // // // // // // // // obj1.about();

// // // // // // // // // function hello() {
// // // // // // // // // 	console.log(this);
// // // // // // // // // }

// // // // // // // // // let name = "Tayyay"

// // // // // // // // // // const name = function () {
// // // // // // // // // // 	console.log(this);
// // // // // // // // // // }
// // // // // // // // // const myWorld = () => {
// // // // // // // // // 	console.log(this.name);
// // // // // // // // // }

// // // // // // // // // function print() {
// // // // // // // // // 	console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
// // // // // // // // // }

// // // // // // // // // const person1 = {
// // // // // // // // // 	name: "Tayyaba",
// // // // // // // // // 	age: 22,
// // // // // // // // // 	about: print
// // // // // // // // // }
// // // // // // // // // const person2= {
// // // // // // // // // 	name: 'umra',
// // // // // // // // // 	age: 21,
// // // // // // // // // 	about: print,
// // // // // // // // // };

// // // // // // // // // const person3 = {
// // // // // // // // // 	name: 'saad',
// // // // // // // // // 	age: 23,
// // // // // // // // // 	about: print,
// // // // // // // // // };

// // // // // // // // // person1.about()
// // // // // // // // // person2.about()
// // // // // // // // // person3.about()
// // // // // // // // // // behaviour of this in functions

// // // // // // // // // function reverseInGroups(arr, n, k){
// // // // // // // // // 	let start = arr.slice(0, k)
// // // // // // // // // 	let remain = arr.slice(k)

// // // // // // // // // 	return([...start.reverse(), ...remain.reverse()]);
// // // // // // // // // }

// // // // // // // // // console.log(reverseInGroups([1,2,3,4,5],5,3));
// // // // // // // // // console.log(reverseInGroups([3,3,5,6,7,8,9],5,4));

// // // // // // // // // console.log("hello world");

// // // // // // // // // if (false) {
// // // // // // // // // 	console.log("Console.log is working");
// // // // // // // // // }
// // // // // // // // // else {
// // // // // // // // // 	console.log("Not working");
// // // // // // // // // }

// // // // // // // // // const numbers = [ 1, 2, 3, 3,4, 4, 5 ];

// // // // // // // // // console.log(numbers.filter((num, index, array) => {
// // // // // // // // // 	if (array.indexOf(num) === index) {
// // // // // // // // // 		return num
// // // // // // // // // 	}
// // // // // // // // // }));

// // // // // // // // // console.log(numbers);

// // // // // // // // // const obj2 = {
// // // // // // // // // 	firstName: "Tayyaba",
// // // // // // // // // 	course: "Web dev",
// // // // // // // // // 	// about: function () {
// // // // // // // // // 	// 	console.log(`My name is ${this.firstName} and i am currently enrolled in ${this.course}`);
// // // // // // // // // 	// }
// // // // // // // // // 	about: ()=>console.log(firstName)
// // // // // // // // // }

// // // // // // // // // obj2.about()

// // // // // // // // // const num = 10;

// // // // // // // // // function multiplyByTwo(num) {
// // // // // // // // // 	num *= 2
// // // // // // // // // }

// // // // // // // // // multiplyByTwo(num);
// // // // // // // // // console.log(num);

// // // // // // // // // Call

// // // // // // // // // function Birthday() {
// // // // // // // // // 	console.log("Happy Birthday");
// // // // // // // // // }

// // // // // // // // // Birthday.call()

// // // // // // // // // function mySelf() {
// // // // // // // // // 	console.log(`my name is ${this.firstName } and my age is ${this.course}`);
// // // // // // // // // }

// // // // // // // // // const obj1 = {
// // // // // // // // // 	firstName: "tayyaba",
// // // // // // // // // 	course:"Web dev",
// // // // // // // // // 	about: function (age) {
// // // // // // // // // 		console.log(`My name is ${this.firstName} and i am enrolled in ${this.course} and my age is ${age}`);
// // // // // // // // // 	}
// // // // // // // // // }
// // // // // // // // // const obj2 = {
// // // // // // // // // 	firstName: 'Umra',
// // // // // // // // // 	course: 'python',
// // // // // // // // // 	about: function (age) {
// // // // // // // // // 		console.log(`My name is ${this.firstName} and i am enrolled in ${this.course} and my age is ${age}`);
// // // // // // // // // 	},
// // // // // // // // // };
// // // // // // // // // // obj2.about.call(obj1,22)
// // // // // // // // // // obj1.about.call(obj1,21)

// // // // // // // // // mySelf.call(obj1)
// // // // // // // // // mySelf.call(obj2)

// // // // // // // // const car = {
// // // // // // // //   brand: "Ford",
// // // // // // // //   model: "Mustang",
// // // // // // // //   getDetails: function() {
// // // // // // // //     console.log(`This car is a ${this.brand} ${this.model}.`);
// // // // // // // //   }
// // // // // // // // };

// // // // // // // // const anotherCar = {
// // // // // // // //   brand: "Tesla",
// // // // // // // //   model: "Model S"
// // // // // // // // };

// // // // // // // // // TODO: Use the call() method to invoke the getDetails() method of the car object with anotherCar as the context. Print the car details.

// // // // // // // // car.getDetails.call(anotherCar)
// // // // // // // // function greet() {
// // // // // // // //   console.log(`Hello, ${this.name}!`);
// // // // // // // // }

// // // // // // // // const person1 = {
// // // // // // // //   name: "John"
// // // // // // // // };

// // // // // // // // const person2 = {
// // // // // // // //   name: "Jane"
// // // // // // // // };

// // // // // // // // // TODO: Use the call() method to invoke the greet() function with person2 as the context. Print the greeting.

// // // // // // // // greet.call(person2)

// // // // // // // // function about(hobby, musician) {
// // // // // // // // 	console.log(`${this.firstName} and my hobby is ${hobby} and fvrt musician is ${musician}`);
// // // // // // // // }

// // // // // // // // const per1 = {
// // // // // // // // 	firstName: "Tayyaba",

// // // // // // // // }
// // // // // // // // const per2 = {
// // // // // // // // 	firstName: 'Umra',
// // // // // // // // };

// // // // // // // // //  call and apply are same but in call we have to pass the arguments in the form of array

// // // // // // // // // in bind we can use the separte argemnets or in the form of array and it returns a functions whom we can call later

// // // // // // // // let func = about.bind(per1, 'reading', 'Atif Aslam');
// // // // // // // // func()

// // // // // // // // // var name = "Micheal Jakson"

// // // // // // // // const books = {
// // // // // // // // 	fullName: "HTML And CSS",
// // // // // // // // 	writer:"John Duckett",
// // // // // // // // 	about() {
// // // // // // // // 		console.log(this);
// // // // // // // // 		console.log(`The book fullName is ${this.name} and the writer is ${this.writer}`);
// // // // // // // // 	}
// // // // // // // // }

// // // // // // // // books.about.call(books)

// // // // // // // // // warning
// // // // // // // // // const store =books.about.bind(books).bind(books);
// // // // // // // // // store()

// // // // // // // // Shortand
// // // // // // // // const person1 = {
// // // // // // // // 	firstName: "Tayyaba",
// // // // // // // // 	couse: "Web dev",
// // // // // // // // 	about () {
// // // // // // // // 		console.log(`My name is ${this.firstName} and i am enrolled in ${this.couse}`);
// // // // // // // // 	}
// // // // // // // // }

// // // // // // // // person1.about()

// // // // // // // // const user1 = {
// // // // // // // // 	name: 'Tayyaba',
// // // // // // // // 	age: 21,
// // // // // // // // 	address: 'North Karachi',
// // // // // // // // 	about() {
// // // // // // // // 		return `My name is ${name} and my age is ${this.age}`;
// // // // // // // // 	},
// // // // // // // // 	is18() {
// // // // // // // // 		return this.age >= 18;
// // // // // // // // 	},
// // // // // // // // };
// // // // // // // // console.log(user1.about());
// // // // // // // // // console.log(user1.is18());

// // // // // // // // const userMethods = {
// // // // // // // // 	about: function () {
// // // // // // // // 		return `My name is ${name} and my age is ${this.age}`;
// // // // // // // // 	},
// // // // // // // // 	is18: function () {
// // // // // // // // 		return this.age >= 18;
// // // // // // // // 	},
// // // // // // // // };

// // // // // // // // function createUser(name, age, address) {
// // // // // // // // 	let user = {};
// // // // // // // // 	user.Name = name;
// // // // // // // // 	user.age = age;
// // // // // // // // 	user.address = address;
// // // // // // // // 	user.about= userMethods.about;
// // // // // // // // 	user.is18= userMethods.is18;
// // // // // // // // 	return user;
// // // // // // // // }

// // // // // // // // let user32 = createUser('Tayyaba', 22, 'North Karachi');
// // // // // // // // let user22 = createUser('Umra', 9, 'Nepal');
// // // // // // // // console.log(user32);
// // // // // // // // console.log(user32.is18());
// // // // // // // // console.log(user32.is18());
// // // // // // // // console.log(user32.about());
// // // // // // // // console.log(user22.is18());
// // // // // // // // console.log(user22.about());

// // // // // // // // //  the problem is that when the objects are creating the methods are again creating which can hang my memory so to get rid of this we can create them separately and use them as a reference

// // // // // // // // const obj1 = {
// // // // // // // // 	key1: "value1",
// // // // // // // // 	key2:"value2"
// // // // // // // // }

// // // // // // // // // let obj2 = {}
// // // // // // // // // another way

// // // // // // // // let obj2 = Object.create(obj1)

// // // // // // // // obj2.key3="value3"

// // // // // // // // // const obj2 = {
// // // // // // // // // 	key3:"value2"
// // // // // // // // // }
// // // // // // // // console.log(obj2.__proto__);
// // // // // // // // console.log(obj2.key1);
// // // // // // // // console.log(obj2.key3);

// // // // // // // // Here again we will face problem bcz we can have more methods for this we have make all thoses refrence which will be a tidious work

// // // // // // // // so

// // // // // // // // const userMethods = {
// // // // // // // // 	about: function () {
// // // // // // // // 		return `My name is ${this.userName} and my age is ${this.age}`;
// // // // // // // // 	},
// // // // // // // // 	is18: function () {
// // // // // // // // 		return this.age >= 18;
// // // // // // // // 	},
// // // // // // // // };

// // // // // // // function createUser(userName, age, address) {
// // // // // // // 	let user = Object.create(createUser.prototype);
// // // // // // // 	user.username = userName;
// // // // // // // 	user.age = age;
// // // // // // // 	user.address=address;

// // // // // // // 	return user;
// // // // // // // }
// // // // // // // console.log(createUser.prototype);
// // // // // // // createUser.prototype.about = function () {
// // // // // // // 	return `My name is ${this.address} and my age is ${this.age}`;
// // // // // // // };
// // // // // // // createUser.prototype.is18 = function () {
// // // // // // // 	return this.age >= 18;
// // // // // // // };

// // // // // // // let userone = createUser('Hello', 23, 'Garden');
// // // // // // // let usertwo = createUser('Hello', 23, 'north karachi');
// // // // // // // console.log(userone);
// // // // // // // console.log(userone.is18());
// // // // // // // console.log(userone.about());
// // // // // // // console.log(usertwo.about());

// // // // // // // function hello789e69e() {
// // // // // // // 	console.log('hello789e69e world');
// // // // // // // }
// // // // // // // console.log(hello789e69e.name);

// // // // // // // // prototype

// // // // // // // hello789e69e.no = 032365;
// // // // // // // console.log(hello789e69e.no);
// // // // // // // console.log(hello789e69e.prototype);

// // // // // // // hello789e69e.prototype.course = 'web dev';
// // // // // // // hello789e69e.prototype.sing = function () {
// // // // // // // 	console.log('happy bd');
// // // // // // // };
// // // // // // // console.log(hello789e69e.prototype);
// // // // // // // hello789e69e.prototype.sing();

// // // // // // // let string = "1";
// // // // // // // string = +!string;
// // // // // // // console.log(typeof string);
// // // // // // // // const dummy = {
// // // // // // // // 	name:"Tayyaba"
// // // // // // // // }
// // // // // // // // // console.log(dummy.prototype);

// // // // // // // // new

// // // // // // // function createUser(name, course) {
// // // // // // // 	(this.firstName = name), (this.course = course);
// // // // // // // }

// // // // // // // console.log(createUser.prototype);

// // // // // // // const user1 = new createUser('Tayyaba', 'Web dev');
// // // // // // // console.log(user1);

// // // // // // function CreateUser(name, age) {
// // // // // // 	this.firstname = name;
// // // // // // 	this.age = age;
// // // // // // }
// // // // // // const user1 = new CreateUser('Tayyaba', 22);
// // // // // // console.log(user1);

// // // // // // console.log(CreateUser.prototype);
// // // // // // CreateUser.prototype.about = function () {
// // // // // // 	console.log(this.firstname,this.age);
// // // // // // }

// // // // // // user1.about()

// // // // // // for (let key in user1) {
// // // // // // 	if (user1.hasOwnProperty(key)) {

// // // // // // 		console.log(key);
// // // // // // 	}
// // // // // // }

// // // // // // // convention how can we get to know where we have to use new keyword for the recognization we capitilize the first letter of the functions

// // // // // // const numbers = [ 1, 2, 3, 4 ];

// // // // // // console.log(Object.getPrototypeOf(numbers));

// // // // // // In es6 we use classess

// // // // // class CreateUser{
// // // // // 	constructor (name,course,rollNo) {
// // // // // 		this.name = name;
// // // // // 		this.course = course;
// // // // // 		this.rollNo=rollNo
// // // // // 	}

// // // // // 	about() {
// // // // // 		console.log(`My name is ${this.name} and my roll no is ${this.rollNo}`);
// // // // // 	}
// // // // // 	is18() {
// // // // // 		console.log(this.rollNo);
// // // // // 	}
// // // // // }
// // // // // CreateUser.prototype = [];

// // // // // const user1 = new CreateUser("Tayyaba", "Web dev", 123);
// // // // // console.log(user1);
// // // // // user1.about()
// // // // // user1.is18()
// // // // // console.log(CreateUser.prototype);
// // // // // console.log(Object.getPrototypeOf(user1));

// // // // class Animals{
// // // // 	constructor (name, age) {
// // // // 		this.name = name;
// // // // 		this.age=age
// // // // 	}
// // // // 	eat() {
// // // // 		console.log(this.name , this.age);
// // // // 	}
// // // // }

// // // // const animal1 = new Animals("umra", 22);
// // // // console.log(animal1.age);
// // // // console.log(animal1.name);
// // // // animal1.eat()

// // // // class Dog {
// // // // 	constructor(name, age) {
// // // // 		this.name = name;
// // // // 		this.age = age;
// // // // 	}
// // // // 	eat() {
// // // // 		console.log(this.name, this.age);
// // // // 	}
// // // // }

// // // // const dog1 = new Dog("Golu", 8);
// // // // console.log(dog1);

// // // // class Cat extends Animals{
// // // // 	constructor (name, age, speed) {
// // // // 		super(name, age); // targeting to the parent's constructor
// // // // 		this.speed=speed
// // // // 	}
// // // // 	run() {
// // // // 		return `${this.name} is running at speed ${this.speed} kmph`
// // // // 	}
// // // // 	get eat() {
// // // // 		return `Modified text : ${this.name} is eating`
// // // // 	}
// // // // }

// // // // const cat1 = new Cat("Tommy", 7,24);
// // // // console.log(cat1);
// // // // console.log(cat1.run());
// // // // console.log(cat1.eat);

// // // // and i want to add more properties then the parents' constructor is not enough
// // // //  what if we have same methods in the sub and super class

// // // // getters and setters

// // // // class Person{
// // // // 	constructor (firstName, lastName, age) {
// // // // 		this.firstName = firstName;
// // // // 		this.lastName = lastName;
// // // // 		this.age=age
// // // // 	}
// // // // 	static userInfo() {
// // // // 		console.log("User is from pakistan");
// // // // 	}
// // // // 	static nationality= "Pakistani"
// // // // 	get fullName() {
// // // // 		console.log(`${this.firstName} ${this.lastName}`);
// // // // 	}
// // // // 	set fullName(fullName) {
// // // // 		const [ firstName, lastName ] = fullName.split(" ")
// // // // 		this.firstName = firstName;
// // // // 		this.lastName=lastName
// // // // 	}
// // // // }
// // // // const person1 = new Person("Tayyaba", "Ali", 21);
// // // // console.log(person1);
// // // // person1.fullName;
// // // // person1.fullName = "Umra Badar";
// // // // console.log(person1);
// // // // Person.userInfo() // calling from the main class
// // // // console.log(Person.nationality); // calling prop from main class

// // // // //  getters and setters are converting the methods into property we can treat them as props

// // // // // get to get
// // // // //  set if we want to change

// // // // // static props and methods just write static keyword

// // // // // inheritance

// // // // class Person {
// // // // 	constructor(firstName, lastName, age) {
// // // // 		this.firstName = firstName;
// // // // 		this.lastName = lastName;
// // // // 		this.age = age;
// // // // 	}
// // // // 	static userInfo() {
// // // // 		console.log('User is from pakistan');
// // // // 	}
// // // // 	static nationality = 'Pakistani';
// // // // 	get fullName() {
// // // // 		console.log(`${this.firstName} ${this.lastName}`);
// // // // 	}
// // // // 	set fullName(fullName) {
// // // // 		const [firstName, lastName] = fullName.split(' ');
// // // // 		this.firstName = firstName;
// // // // 		this.lastName = lastName;
// // // // 	}
// // // // }

// // // // Restart Kar

// // // "use strict"
// // // // Variable
// // // console.log("Tayyaba");
// // // var myName = "Tayyaba"
// // // console.log(myName);

// // // myName = "Hello World"
// // // console.log(myName);

// // // myName ="tata"
// // // console.log(myName);

// // // roll = "t83t831"
// // // console.log(roll);
// // // // Rules for naming rules

// // // var myVar = "new"

// // // let

// // // let myVar ="hello"
// // // // let myVar = "hlhfa"
// // // myVar = "world";
// // // console.log(myVar);

// // // const

// // // const myVar= "hello";
// // // myVar="world";

// // // string indexing rules

// // let myName = 'Tayyaba';
// // // console.log(myName[myName.length-1]);

// // // myName=myName.trim()
// // // myName=myName.toUpperCase()
// // // myName=myName.toLowerCase()

// // // capatilize myName
// // // myName = myName[ 0 ].toUpperCase() + myName.slice(1).toLowerCase();
// // // console.log(myName);

// // // let sliccedText = myName.slice(-3,-5)
// // // console.log(sliccedText);
// // // console.log("hello world");

// // // string to number and number to string

// // // let number = 1233 + "";
// // // let numberToString = String(number)
// // // // console.log(typeof number);
// // // console.log(typeof numberToString);

// // // String to number

// // // let string = "Tayyaba";
// // // let Numbered = Number(string);
// // // console.log(typeof +string);
// // // console.log(typeof Numbered);

// // let firstname = 'Tayyaba';
// // let lastname = 'Ali';
// // // let num1 = +"12"
// // // let num2 = +"90"

// // // let merge = firstname +" "+ lastname;
// // // console.log(merge);
// // // console.log(+"Tayyaba"*"90");

// // //  Template literals
// // // let merge = `My name is ${firstname} and my last name is ${lastname}`
// // // console.log(merge);

// // // let aboutMe;
// // // console.log(typeof merge);
// // // aboutMe = "Tayyaba"
// // // console.log(typeof aboutMe,aboutMe);

// // // let number = 343752793659365936529736;
// // // let number1 = BigInt(69763596295693256932569)
// // // console.log(Number.MAX_SAFE_INTEGER);
// // // let number2= 7420740724074n
// // // console.log(typeof number1);
// // // console.log(typeof number2);
// // // console.log(number2+number1);
// // // console.log("8"!=="8");

// // // Even and odd numbers
// // // let number = 3;
// // // if (number%2===0) {
// // //     console.log("The number is even");
// // // }
// // // else {
// // //     console.log("The number is odd");
// // // }
// // // // positive and negative numbers

// // // let number1 = 90;
// // // if (number1 > 0) {
// // //     console.log("The number is positive");
// // // }
// // // else if(number1 ===0) {
// // //     console.log("The number is zero");
// // // }
// // // else {
// // //     console.log("The number is negative");
// // // }

// // // falsy values

// // // if (-1) {
// // //     console.log("TRuthy valus are printing");
// // // }
// // // else {
// // //     console.log("falsy values");
// // // }

// // // ternary opetators

// // // let age = 10;
// // // let drink = age<5 ? "You are eligible" : "You are not eligible";
// // // console.log(drink);

// // // let userName = 'Tayyaba';
// // // let age = 22;
// // // if (age > 50 && userName === 'Tayyaba') {
// // // 	console.log('working');
// // // } else {
// // // 	console.log('Not working');
// // // }
// // // console.log(""|| "Tayyyab"||false);
// // // console.log(0 && "Tayyyab" &&false);

// // // Guessing number games

// // // let winnningNumber = 9;
// // // let userNumber = prompt("Guess number")

// // // if (userNumber === winnningNumber) {
// // //     console.log("You guessed it");
// // // }
// // // else if (userNumber > 9) {
// // //     console.log("Too big");
// // // }
// // // else {
// // //     console.log("too small");
// // // // }
// // // let day = 10;
// // // switch (day) {
// // // 	case 0:
// // // 		console.log('SUnaday');
// // //         break;
// // //     case 1:
// // //         console.log("Monday");
// // //         break;
// // //     default:
// // //         console.log("Saturday");
// // //         break;
// // // }

// // // counting 0 to 9

// // // let count = 0;
// // // while (count <= 9) {
// // //     console.log(count);
// // //     count++;
// // // }
// // // console.log(count);
// // // console.log("hello");
// // // // first 10 natural number sum

// // // let num = 1;
// // // let total = 0;
// // // while (num <= 10) {
// // //     total += num;
// // //     num++

// // // }
// // // console.log(total);
// // // console.log("hih");

// // // for loop

// // // for (var i = 0; i <= 10; i+2){
// // //     console.log(i);
// // // }

// // // do while loop

// // // let i = 11;
// // // do{
// // //     console.log(i);
// // //     i++
// // // } while (i <= 10)
// // // console.log(i);

// // // // arrays

// // // const colors=[1,2,3,4]
// // // let result = colors.map((color, index) => {
// // // 	console.log(color);
// // // });
// // // console.log(result);

// // // console.log("js");

// // // for loop

// // // let i = 0;

// // // for (; i < 10; i++){
// // //     console.log(i);
// // // }
// // // console.log(i);

// // // let total = 0;
// // // for (var i = 1; i <= 10; i++){
// // //     console.log(i);
// // //     total += i;
// // // }

// // // break keyword

// // const cities = [ "Karachi", "islam", "lahore", "peshawar" ]

// // let userCity = 'peshawar';
// // let found = false
// // for (var i = 0; i < cities.length; i++){
// //     if (userCity == cities[ i ]) {
// //         found = true;
// //         break
// //     }

// // }

// // if (found) {
// //     console.log("city found");
// // }
// // else {
// //     console.log("city not found");
// // }

// // for (var i = 0; i < 10; i++){
// //     if (i === 8) {
// //         continue
// //     }
// //     console.log(i);
// // }

// // let i = 10;
// // do {
// //     console.log(i);
// //     i++
// // }
// // while (i < 10);

// // const colors = [ "red", "green", "blue", "yellow" ]
// // console.log(colors);

// // colors[ 3 ] = "Tayyaba"
// // const ibj = {

// // }
// // // console.log(colors[colors.length-1]);
// // console.log(colors);
// // console.log(typeof colors, typeof ibj);
// // console.log(Array.isArray(colors));

// // Methods of arrays

// // const numbers=["1","2","3"]

// // console.log("before pushing ");
// // console.log(numbers);
// // console.log(numbers.push('45'));
// // console.log("after pushing ");
// // console.log(numbers);

// // console.log(numbers.pop());

// // console.log(numbers.unshift("1"));
// // console.log(numbers);
// // console.log(numbers.shift());

// // primitives vs references or non primitives

// // let num1 = 12;
// // let num2 = num1
// // num1++
// // console.log(num1);
// // console.log(num2);

// // let arr1 =["1","2","3"]
// // let arr2 = arr1;
// // arr1.push("5")
// // console.log(arr1);
// // console.log(arr2);

// // year 2025 every month need to revise javascript concepts basic to advance
// // New Year resolution (Insha Allah will try my best to achieve it)

// // console.log("Hello World");

// // var myName = "Tayyaba"
// // var myName = "Umra"
// // console.log(myName);

// // "use strict"
// // // Declared + Initialization

// // var myName = "Tayyaba";

// // //only declared

// // var myRollNo;

// // //can be done initialization later

// // myRollNo = 12;

// // // updating a variable called reassignment

// // myName = "Laiba"

// // // what if we create two variables having same name

// // var city = "Karachi";
// // var city = "Islamabad";
// // console.log(city);  //what will be the output?

// // function abc() {
// //    var  myPhoneNumber = 9839393;

// // }

// // {
// //     var country = "Pakistan"
// //     console.log(country);

// // }
// // console.log(country);

// // abc()

// // var myCountry = "Pakistan";

// // console.log(myCountry);

// // console.log(myPhoneNumber);

// // find the largest number

// // const numbers = [1, 2, 3, 4, 5, 6];

// // const doubledNumbers = numbers.map((num) => {
// // 	console.log(num ** 2);
// // 	return num ** 2;
// // });
// // console.log(doubledNumbers);

// //reverse a string

// // let str = 'My country name is Pakistan';

// // let result = [];

// // for (var i = str.length - 1; i >= 0; i--) {
// // 	result.push(str[i]);
// // }

// // let final = result.join('');
// // console.log(final);

// // Interview question generator functions

// // function* serialNumberGenerator() {
// // 	let serialNumber = 1000;
// // 	while (true) {
// // 		yield serialNumber++;
// // 	}
// // }

// // const serials = serialNumberGenerator();

// // console.log(serials.next().value);
// // console.log(serials.next().value);
// // console.log(serials.next().value);

// const student = {
// 	name: 'John',
// 	course: {
// 		title: 'JavaScript for Beginners',
// 		instructor: {
// 			name: 'Ms. Smith',
// 		},
// 	},
// };

// console.log(student.course.instructor?.name);
// console.log(student.course.instructor?.email);



// console.log(Boolean(1));


// while loop


// let i = 0;

// while(i<10){
// 	console.log(i);
// 	i++
// }

// sum of first natural numbers

// let i = 1;
// let total = 0

// while (i <= 10) {

// 	if(total==5){
// 		break;
// 	}
// 	total = total+i;
// 	console.log(total);
// 	i++
// }
// console.log(total)


// const numbers = [ 9, 7, 8, 9 ]
// const numbers1 = [...numbers]

// console.log(numbers1)

let key = "email"
let key2 = "email2"


const obj={
	[key] : "value1",
	[key2]: "value2"
}

console.log(obj.key)