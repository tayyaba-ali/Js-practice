// grade="Javascript practice");
// grade="Javascript by harshit");

// trim

// let myName = "   Tayyaba  ";

// grade=myName.length);

// let myTRim = myName.trim()
// grade=myTRim.length);

// myName= myName.toUpperCase()
// grade=myName.toUpperCase());
// grade=myName.toLowerCase());
// grade=myName);

// let userName = prompt("Enter your name");
// grade=userName);
// let trueValue = userName.slice(0, 1).toUpperCase() + userName.slice(1).toLowerCase();

// userName = userName.slice(0, 1).toUpperCase() + userName.slice(1).toLowerCase();

// grade=userName);

// let userArr = userName.split(" ")
// grade=userArr);
// for (let word of userArr) {
//     //    userArr=word.slice(0,1).toLowerCase()+word.slice(1).toLowerCase()
//     let updatedArr=[]
//     word = word.slice(0, 1).toLowerCase() + word.slice(1).toLowerCase();
//     updatedArr.push(word)
//     grade=word);
// }

// for (let i = 0; i < userArr; i++){
//     grade=i.slice(0, 1).toUpperCase() + i.slice(1).toLowerCase());
// }

// grade=userArr);

// //Title Case

// let userSentence= prompt("Write your sentence")
// let userArr = userSentence.split(" ");
// let updatedSentence = [];
// for (let i = 0; i < userArr.length; i++) {
//     let word = userArr[ i ];
//     word= word.slice(0,1).toUpperCase()+word.slice(1).toLowerCase()
//     updatedSentence.push(word);
// }
// grade=updatedSentence);
// updatedSentence= updatedSentence.join(" ")
// document.write(`The title case of your sentence is <br>   <b>${updatedSentence}</b> `);

//title Case

// let userSentence = prompt("Write your sentence here");
// const userArr=userSentence.split(" ")
// let titleCaseArr = userArr.map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase());
// titleCaseArr = titleCaseArr.join(" ");
// document.write(`The titleCase of your sentence is <br> <b><i>${titleCaseArr}</i></b>`)

// let userAge = 90;

// function allowOrNot (userAge) {
//     if (userAge > 18) {
//         grade="You are allowrd")
//         return;
//     }
//     grade="You are not allowed");
// }

// allowOrNot(userAge)

// let userPercentage = +prompt("Enter your percentage");
// if (userPercentage <= 100 && userPercentage>=90) {
//     grade="A+");
// }
// else if(userPercentage<90 && userPercentage>=80){
//     grade="A")
// }

// else if (userPercentage < 80 && userPercentage >= 70) {
//     grade="B");
// }

// else if (userPercentage < 70 && userPercentage >= 60) {
//     grade="c");
// }
// else if (userPercentage <= 50  && userPercentage>0) {
//     grade="F");
// }
// else {
//     grade="Invalid percentage")
// }

// with switch statement

// let userPercent = +prompt('Enter your percentage');
// let grade;

// switch (true) {
// 	case userPercent <= 100 && userPercent >= 90:
// 		grade='A+';
//         break;
    
//     case (userPercent < 90 && userPercent >= 80):
//         grade="A";
//         break;
//     case (userPercent < 80 && userPercent >= 70):
//         grade="B";
//         break;
//     case (userPercent < 70 && userPercent >= 60):
//         grade="C"
//         break;
//     case (userPercent < 60 && userPercent >= 50):
//         grade = "D";
//         break;
    
//     case (userPercent < 50 && userPercent > 0):
//         grade="F";
//         break;
//     default:
//         grade="Invalid percentage";
//         break
// }
// document.write(grade);

// sum of 10 natural numbers by while loop

// let i = 1;
// let sum = 0;
// while (i <= 10) {
//     sum = sum + i;
//     i++;
// }

// console.log(sum)


//Objects

// const obj = {
//     "name": "Tayyaba",
//     'rollNo': 123,
//     'hobbies': [ "novels,coding" ],
//     "my hobbies":"hello"
// }


// const key= "parso"

// console.log(obj.hobbies);
// console.log(obj.name);
// console.log(obj[ "rollNo" ]);

// obj[ "person" ] = "hello";
// console.log(obj);
// console.log(obj[ "my hobbies" ]);

// obj[key] = "heytayyaba@gmail.com";
// console.log(obj);


//iteration in objects

const studentInfo = {
    name: "tayyaba",
    roll: 6789,
    hobbies:["novels","video games"]
}
// for (let key in studentInfo) {
//     console.log(`${key} : ${studentInfo[key]}`);
// }


console.log(Array.isArray(Object.keys(studentInfo)));

// for (const key of Object.keys(studentInfo)) {
//     console.log(studentInfo[key]);
// }