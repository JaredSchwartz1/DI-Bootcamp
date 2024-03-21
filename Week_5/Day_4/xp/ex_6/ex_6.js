//part 1

//[2] === [2] 
//{} === {} both are false since they don't refer to the same reference.

//part 2 

// const object1 = { number: 5 };
// const object2 = object1;
// const object3 = object2;
// const object4 = { number: 5 };

// object1.number = 4;
// console.log(object2.number)//object 2 is 4 since object 1 changed to four and object 2 shares the same reference.
// console.log(object3.number)//object 3 shares a reference of two which shares a reference with 1 and thus has the value 4
// console.log(object4.number) //this one equals five since four shares no relation to one. 

//part 3

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}
class Mammal extends Animal{
constructor(name,type,color,sound){
    super(name,type,color);
    this.sound=sound
}
get sound(){
    return
}
}