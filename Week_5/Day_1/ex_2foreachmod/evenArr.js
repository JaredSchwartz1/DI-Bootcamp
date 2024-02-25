let myArray = [10, 11, 12, 13, 14, 15]

myArray.forEach((number, i, arr)=> {
    let even = false
    number % 2 == 0 ? even = 1 : 0
    even ? console.log(myArray[i]):null;
})
