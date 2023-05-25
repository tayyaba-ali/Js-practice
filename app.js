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

for (var i = 0; i <= 10; i++){
	console.log(i);
	if (i === 5) {
		break;
	}
}
console.log(i);