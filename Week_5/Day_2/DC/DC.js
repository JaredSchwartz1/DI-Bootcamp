let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let fruitsLog= ()=>{
    groceries.fruits.forEach((value)=>{
console.log(value)
    })
}

fruitsLog()

let cloneGroceries=()=>{
    let user=client;
 client='Betty'//user won't change because user=client was a pass by value so user took client's old equality and then stops following it. 
console.log(user)
let shopping = groceries
shopping.totalPrice='35$'//this will alter the original since they use the same address since this is a pass by reference.
console.log(groceries.totalPrice)
shopping.other.paid=false//we should see this alteration too because the equality between shopping and groceries was a pass by reference and so it would mean a change to one would affect the other.
console.log(groceries.other.paid)
}

cloneGroceries()


