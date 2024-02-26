function kgtog(mass){
    return mass*1000
}
console.log(kgtog(20))

let gramMass = function(mass){
    return mass*1000
} 
console.log(gramMass(20))

// using a function expression uses an anonymous function and stores the function as a variable while using a declaration the function receives a name. 

let arrowGramMass=(mass)=>mass*1000;

console.log(arrowGramMass(20))