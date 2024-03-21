class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);//it should be an object type since the member when constructed under the class it makes an object.