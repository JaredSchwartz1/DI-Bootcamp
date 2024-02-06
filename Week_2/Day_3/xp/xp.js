// //ex_1 Write code to remove “Greg” from the people array.
// Write code to replace “James” to “Jason”.
// Write code to add your name to the end of the people array.
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
// Write code that gives the index of “Foo”. Why does it return -1 ?
// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.

// const people = ["Greg", "Mary",  "Devon", "James"];
// people.shift()
// people[2]="Jason"
// people.push("Jared")
// console.log(people)
// console.log(people.indexOf('Mary'))
// let exclusive =people.slice(1,3)
// console.log(people.indexOf('foo'))//it returns negative one because it doesn't exist in our list.
// let last = people.length-1 
// console.log(people[last])

// //part II

// // for(i of people){
// //     console.log(i) 
// // }
// for(i of people){
//         if(i=="Devon"){
//             console.log(i)
//             break;
//         }
//  }


// //ex_2 Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

// let colors = ["black", "blue", "red", "green", "grey"]
// let suffix;
// for (i = 0; i < colors.length; i++) {
//     let sentence = 'My ' + (i + 1) + suffix + " choice color is " + colors[i];
//     switch (sentence.charAt(sentence.indexOf(suffix) - 1)) {
//         case "1":
//             suffix = 'st'
//             break;
//         case "2":
//             suffix = 'nd'
//             break;
//         case "3":
//             suffix = 'rd'
//             break
//         case "4":
//         case "5":
//             case "6":
//         case "7":
//             case "8":
//         case "9":
//             case "0":
//             suffix = 'th'
//             break;
//     }
//     sentence = 'My ' + (i + 1) + suffix + " choice color is " + colors[i];
//     console.log(sentence)
// }

//ex_3
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

// let userNumber = prompt("pick a number");
// {
//     if (userNumber != null) {


//         while (userNumber < 10) {
//             userNumber= prompt("pick a number");
//         }
//     }

// }

//ex_4
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.

// Console.log how many apartments are on the floors 1 and 3.

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }
// console.log(building.numberOfFloors)
// console.log(building.numberOfAptByFloor.firstFloor+building.numberOfAptByFloor.thirdFloor)
// console.log(building.nameOfTenants[2]+" "+building.numberOfRoomsAndRent.dan[0])
// if ((building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1])>building.numberOfRoomsAndRent.dan[1]){
//     building.numberOfRoomsAndRent.dan[1]=1200;
// }
// console.log(building.numberOfRoomsAndRent.dan[1])

//ex_5 Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

// const family = {
//     parents: ["Mom","Dad"],
//     children: ["olderSister", "youngerSister", "Brother", "youngestSister"],
//     pets: ["Dog", "Fish", "Cat1", "Cat2"],
//     cars: ["Volvo", "Tesla"],
// }
// for (key in family) {
//     console.log(key)
// }
// for (key in family) {
//     console.log(family[key])
// }

//ex_6

// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }
//   let sentence="";
// for(key in details){
// let x=key+" "+details[key];
// sentence=sentence+' '+x
// }
// console.log(sentence)

//ex_7

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// names.sort()
// for(i in names){
//     names[i]=names[i][0]
// }
// console.log(names.join(""))