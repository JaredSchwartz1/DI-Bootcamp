//ex_1
// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.


// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

//part I

// function infoAboutMe(){
// let myName='Jared'
// let myAge='19'
// let myHobbie='chess'
// let myFavoriteColor='Black'
// let sentence=`My name is ${myName}, I am ${myAge} years old, my hobbie is ${myHobbie}, and my favorite color is ${myFavoriteColor}.`
// console.log(sentence)
// }
// infoAboutMe()

// //part II

// function infoAboutPerson(personName, personAge, personFavoriteColor){
// let sentence=`Your name is ${personName}, you are ${personAge} years old, and your favorite color is ${personFavoriteColor}.`
// console.log(sentence)
//     }
// infoAboutPerson('David',45,'blue')
// infoAboutPerson("Josh", 12, "yellow")

//ex_2

// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.

// Inside the function, use prompt to ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.

// function calculateTip() {
//     let userBill = prompt('what is the bill')
//     let tip;
//     let Bill;
//     if (isNaN(userBill[0]) == true) {
//         Bill = userBill.slice(1, userBill.length)

//     }
// 
//     else {
//         Bill = userBill
//     }


//     function tipFromBill(Bill) {
//         if (Bill < 50) {
//             tip = Bill * 0.2
//             return tip
//         }
//         if (Bill >= 50 && Bill <= 200) {
//             tip = Bill * .15
//             return tip
//         }
//         if (Bill > 200) {
//             tip = Bill * 0.1
//             return tip
//         }

//     }
//     tipFromBill(Bill)
//     let total=Number(tip)+Number(Bill)
//     let userTotal = `The tip will be $${tip}, for a total of $${total}.`
//     console.log(userTotal)
// }
// calculateTip()

//ex_3 Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// function isDivisible(Num){
// let multiples=[];
// let sum;
// for(i=0;i<=500;i++){
// if(i%Num===0){
//     multiples.push(i)
// }
// else{
//     continue;
// }
// }
// console.log(multiples.join(" ")) 
// sum=0;
// function sumMaker(){
//     for(i of multiples){
//         sum=sum+i
//     }
// return sum;
// }
// sumMaker()
// console.log(sum)

// }

// isDivisible(23)