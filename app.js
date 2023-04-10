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

// const studentInfo = {
//     name: "tayyaba",
//     roll: 6789,
//     hobbies:["novels","video games"]
// }
// for (let key in studentInfo) {
//     console.log(`${key} : ${studentInfo[key]}`);
// }


// console.log(Array.isArray(Object.keys(studentInfo)));

// for (const key of Object.keys(studentInfo)) {
//     console.log(studentInfo[key]);
// }






// const key1 = "objkey1";
// const key2 = "objkey2";


// const value1="myvalue1"
// const value2 = "myvalue2"


// const obj = {
//     [ key1 ]: value1,
//     [key2]:value2
    
// }

// console.log(obj);


//spread operator

// let myName = [..."tayyaba"];
// console.log(myName);


// const myObj = {
//     name: "Tayyaba",
//     age: 123,
//     year:2019
// }

// const { name:myName,year} = myObj;
// console.log(myName,year);


// const structuring = { ...["item1","item2","item3"] };
// console.log(structuring);

//Array of objects

const studentInfo = [
    {
        id: 1,
        name: "Tayyaba",
        qualification:"BSSe"
    },
    {
        id: 2,
        name: "Umra",
        qualification:"Matric"
    },
    {
        id: 3,
        name: "Wajeeha",
        qualification:"Intermediate"
    }
]

// for (const student of studentInfo) {
//     let { name, qualification } = student;
//     name = "hello";
//     console.log(name,qualification);
    
// }
 

// const [ {id},, {qualification} ] = studentInfo;
// console.log(id,qualification);


// function isEven(num) {
//     // if (num % 2 == 0) {
//     //     return true
//     // }
//     // return false
//     return num % 2 == 0;
    
    
// }
// console.log(isEven(18));

// let myName = "taYYaba";
// myName= myName[0].toUpperCase()+myName.slice(1).toLowerCase()
// console.log(myName);



// function string(str) {
//     return str[0];
// }

// console.log(string("Tayyaba"));
// console.log(string("Umra"));


// input take array and value
//output index no

// function findingIndex(arr, value) {
//     for (const index in arr) {
//         if (arr[ index ] === value) {
//             return index
//         }
//     }
//     return "nh mila"

// }
// console.log(findingIndex([1,2,3,4,5],5));



// {
//     let myName = "Tayyab";
//     console.log(myName);

// }

// {
//     let myName="Umra"
//     console.log(myName);
// }
// console.log(myName);

// function myName() {
//     var roll = "Tayyaba";
// }

// console.log(roll);


//rest paraters

// function Num(num1, num2, ...arr) {
//     console.log(num1,num2,arr)
// }

// Num(1,2,3,5,6,7,8,)


// a function with infinity paramters require sum

function Sum(...numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum+= num
    }
    return sum;
}

console.log(Sum(1,2,3,4,6));