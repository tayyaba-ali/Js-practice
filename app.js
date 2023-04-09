// console.log("Javascript practice");
// console.log("Javascript by harshit");

// trim


// let myName = "   Tayyaba  ";

// console.log(myName.length);

// let myTRim = myName.trim()
// console.log(myTRim.length);


// myName= myName.toUpperCase()
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());
// console.log(myName);


// let userName = prompt("Enter your name");
// console.log(userName);
// let trueValue = userName.slice(0, 1).toUpperCase() + userName.slice(1).toLowerCase();

// userName = userName.slice(0, 1).toUpperCase() + userName.slice(1).toLowerCase();

// console.log(userName);

// let userArr = userName.split(" ")
// console.log(userArr);
// for (let word of userArr) {
//     //    userArr=word.slice(0,1).toLowerCase()+word.slice(1).toLowerCase()
//     let updatedArr=[]
//     word = word.slice(0, 1).toLowerCase() + word.slice(1).toLowerCase();
//     updatedArr.push(word)
//     console.log(word);
// }

// for (let i = 0; i < userArr; i++){
//     console.log(i.slice(0, 1).toUpperCase() + i.slice(1).toLowerCase());
// }


// console.log(userArr);



// //Title Case

// let userSentence= prompt("Write your sentence")
// let userArr = userSentence.split(" ");
// let updatedSentence = [];
// for (let i = 0; i < userArr.length; i++) {
//     let word = userArr[ i ];
//     word= word.slice(0,1).toUpperCase()+word.slice(1).toLowerCase()
//     updatedSentence.push(word);
// }
// console.log(updatedSentence);
// updatedSentence= updatedSentence.join(" ")
// document.write(`The title case of your sentence is <br>   <b>${updatedSentence}</b> `);


//title Case

// let userSentence = prompt("Write your sentence here");
// const userArr=userSentence.split(" ")
// let titleCaseArr = userArr.map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase());
// titleCaseArr = titleCaseArr.join(" ");
// document.write(`The titleCase of your sentence is <br> <b><i>${titleCaseArr}</i></b>`)