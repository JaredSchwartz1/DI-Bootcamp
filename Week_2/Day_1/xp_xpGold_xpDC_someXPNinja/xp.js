//ex 1

/*let favFood = 'fajitas';
let favMeal = 'dinner';
console.log('I eat ' + favFood + ' for every ' + favMeal + '.')*/

//ex 2

/*
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength=myWatchedSeries.length
let firstSeries =myWatchedSeries.splice(0,2,"black mirror", "money heist");
let lastSeries = myWatchedSeries.splice(2,1);
console.log(myWatchedSeriesLength)
let myWatchedSeriesSentence= firstSeries.join(", ") + ', and ' + lastSeries.toString()
console.log('I watched' +myWatchedSeriesLength +'series : '+myWatchedSeriesSentence)

myWatchedSeries[2]="Friends"
myWatchedSeries.push("Percy Jackson")
myWatchedSeries.unshift("Futurama")
myWatchedSeries.splice(1,1)
console.log(myWatchedSeries[1][2])
console.log(myWatchedSeries)
*/

//ex 3

/*let tempCelsius=20;
let tempFahrenheit;
tempCelsiusToFahrenheit=function(Number){
return(tempFahrenheit=(Number*9/5)+32)
}
console.log(tempCelsiusToFahrenheit(tempCelsius))*/

//ex 4

/*let c;
let a = 34;
let b = 21;

console.log(a+b)
//Prediction: It should equal 55 because that is the sum of the values of a and b.
//Actual: 55

a=2;

console.log(a+b)
//Prediction: It should be 23 since b's value has remaine the same while a's has changed to two
//Actual: 23

//the value of c is undefined since we never set it equal to anything. 

console.long(3+4+'5');
//it will be 75 because the 3 and 4 sum up to seven and that is concatenated with the five to make 75
*/

//ex 5
/*
console.log(1 === "1")

typeof(15)
// Prediction:number because fifteen is a number
// Actual:number

typeof(5.5)
// Prediction:number because five and a half is a number.
// Actual:number

typeof(NaN)
// Prediction:undefined since NaN isnt a datatype.
// Actual:number

typeof("hello")
// Prediction:string because it is in quotation marks. 
// Actual:string

typeof(true)
// Prediction:number because true represents 1 which is a number. 
// Actual: booloean

typeof(1 != 2)
// Prediction:number because the statement is a logic statement which is true meaning it will equal to 1 and be a number. 
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers because the + will concatenate the two strings. 
// Actual: hamburgers

"hamburgers" - "s"
// Prediction:undefined because the minus doesn't interact with the strings
// Actual:NaN

"1" + "3"
// Prediction:13 because the plus will concatenate the two strings
// Actual:13

"1" - "3"
// Prediction:undefined because the minus doesn't work with strings. 
// Actual:-2

"johnny" + 5
// Prediction:johnny5 because the plus will concatenate the string "johnny" and the number five. 
// Actual:johnny5

"johnny" - 5
// Prediction: undefined because the minus doesn't work with strings.
// Actual:NaN

99 * "hello"
// Prediction: undefined because you can't multiply a string.
// Actual:NaN

1 != 1
// Prediction: false because one is equal to one. 
// Actual: false 

1 == "1"
// Prediction: undefined since you cant give a truth value to a string. 
// Actual:true

1 === "1"
// Prediction: not sure what the triple equals syntax might mean but it is probably undefined. 
// Actual:false
*/

//ex_6
/*
console.log("Bob" - "bill")

5 + "34"
// Prediction:534 because the + will concatenate 5 with the 34
// Actual:534

5 - "4"
// Prediction:1 because apparently in Javascript string numbers can work like regular numbers sometimes. 
// Actual:1

10 % 5
// Prediction:0 because 10 cleanly is divisible by five. 
// Actual:0

5 % 10
// Prediction: 5 because the division is 0R5. 
// Actual:5

"Java" + "Script"
// Prediction: JavaScript because the + concatenates the strings. 
// Actual:JavaScript

" " + " "
// Prediction: "  " (two spaces) because it concatenates the two spaces.
// Actual:"  "

" " + 0
// Prediction: NaN because you cant do math with the empty string
// Actual:0

true + true
// Prediction:2 because true represents 1 meaning that it is 1+1=2
// Actual:2

true + false
// Prediction: 1 because it is effectively 1+0.
// Actual:1

false + true
// Prediction: 1 because it is effectively 0+1.
// Actual:1

false - true
// Prediction: -1 because it is effectively 0-1.
// Actual:-1

!true
// Prediction: false because exclam is the negation of the statement and false is the negation of true.
// Actual:false

3 - 4
// Prediction:-1 because it is just math. 
// Actual:-1

"Bob" - "bill"
// Prediction: NaN because you can't do math with nonnumerical strings. 
// Actual:NaN
*/

//ex_Gold1

/*
let sentence = ["my","favorite","color","is","blue"];
let sentenceWritten = sentence.join(" ")
console.log(sentenceWritten)
*/

//ex_Gold2

/*let wordOne= "pillow";
let wordTwo= "meer";
let WordOnoTwe= wordTwo.slice(0,2)+wordOne.substring(2)+" "+ wordOne.slice(0,2)+wordTwo.substring(2);
console.log(WordOnoTwe)*/

//ex_Gold3
/*
let num1= 9;
let num2 = 3;
let operator = 4;//my operators will work that 1 means multiplication, two means division, three means addition, and four means subtraction.
let answer;
if (operator==1){
answer=num1*num2
console.log(answer)
}
if (operator==2){
    answer=num1/num2
    console.log(answer)
}
if (operator==3){
    answer=num1+num2
    console.log(answer)
}
if (operator==4){
    answer=num1-num2
    console.log(answer)
}
*/

//ex_Ninja1

/*
console.log(true === false)
5 >= 1
// Prediction:true because 5 is greater than 1
// Actual:true
0 === 1
// Prediction:it is not == so it is true
// Actual:false
4 <= 1
// Prediction:false because 4 is greater than 1
// Actual:false
1 != 1
// Prediction: false because 1=1
// Actual:false
"A" > "B"
// Prediction:AnA because strings have no value.
// Actual:false
"B" < "C"
// Prediction:true because B comes before c
// Actual:true
"a" > "A"
// Prediction:AnA because I think the alphanumeriv stuff only applies to capitalized letters.
// Actual:true
"b" < "A"
// Prediction:True because a capitalized letter is bigger than an uncapitalized letter
// Actual:false
true === false
// Prediction: false because true!= false
// Actual:false
true != true
// Prediction:false because true = true
// Actual:false
*/

//ex_Ninja2
//write some numbers separated by commas no spaces
/*let numberString = "12,5,23,8,4,56";
const num = [];
let n = 0;
let sum;
for (let i = 0; i <= (numberString.length-1); i++) {
    if (numberString.charAt(i) !== (',')){
        console.log(numberString.charAt(i))
        if (numberString.charAt(i + 1) !== (','|| undefined)) {
            n=n+1
        }
        else {
            if (n > 0) {
                for (let b = n; b >= 0; b--) {
                    console.log((numberString.charAt(i + b)))
                    sum = sum + (Number((numberString.charAt(i + b)))) * 10 ** b;
                    console.log(typeof(Number((numberString.charAt(i + b)))))
                    console.log(sum)
                }
                num.push(sum)
                n = 0
            }
            else {
                num.push(numberString.charAt(i))
            }
        }
    }
}
console.log(
console.log(numberString.charAt(14))
console.log(num)

//I'll Be a ninja another day
*/

//ex_DC1

/*
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift()
fruits[1]="Blueberries"
fruits[2]="Oranges"
fruits.push("Kiwi")
fruits.shift()
fruits.splice(0,1, "Kiwi")
fruits.splice(2,3,"Blueberries")
console.log(fruits)

*/

//ex_DC2

/*
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0])
*/