const users = { user1: 18273, user2: 92833, user3: 90315 }
const userArrays=Object.entries(users)
console.log(userArrays)

//part 2

let splitArray={...Object.fromEntries(userArrays)}
const fixedArray=Object.entries(splitArray)
fixedArray.map((value)=>{
    value[1]*=2
})
console.log(fixedArray)
