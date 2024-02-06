let teacher = {

    fullName : 'David Crocker',
    subject : 'math',
    role : 'fairy catcher',
    method : function(){},
    salary : 0
    
    }
    //for in array
let arr=[1,5,7,8,13]


// for(let i in arr){
// console.log(arr[i])
// }
// for (let i = 0; i<=5; i++){
//     console.log('the iteration is'+ i)
// }


// for(let property in teacher){
//     console.log(property)
//     console.log(teacher[property])
// }

//while loop
// let count=0

// while(count<5){
// console.log(count)
// count++
// }

//do while
// let i = 0;
// do{
// console.log('The number is ' + i)
// i++
// }
// while(i<15)

for (let i = 0; i < 10; i++) {
    if (i === 3) { 
        continue; 
    }
    console.log("The number is " + i); // 0 1 2 4 5 6 7 8 9 
  }


  for (let i = 0; i<5; i++) {
    console.log(i)
  }