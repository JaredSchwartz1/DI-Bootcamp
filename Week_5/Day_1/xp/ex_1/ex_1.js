// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }//a should equal 3 because a will enter that if statement and thus a's value will be changed from 5 to 3. 

// function funcOne() {
//     const a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?

// //If a is a const it won't change and will remain 5.

// //it actually causes an error since the const can't be changed


// //#2
// const a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()//it should print inside the funcThree function 0 inside the funcThree function 5
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?

// //if it was a const then it would cause an error on funcTwo() since it would be trying to change the value of a constant.

// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()
// //a is never defined here so none of the functions should work. 
// //I was wrong as I didn't understand how the window thing worked.


//#4
// const a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// //a will equal 'test' because a is redefined as the string 'test' before the alert is made. 
// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?
// //if the variable were to use the const there would be an error as it wouldn't allow for the reassignment under the same name. it doesn't because of scopes and this time we redeclare it for the new scope.

// //#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

//it will first `in the if block 5` and then alert `outside of the if block 2` because inside the scope of the if block it has access to the let a=5 but outside it only has access to a=2 so that will be ther value of a used. 

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?

//nothing should change because of the use of multiple scopes.