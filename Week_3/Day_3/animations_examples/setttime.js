let phrase='howdy'
let who='partner'

// function sayHi(phrase, who) {
//     alert( phrase + ', ' + who );
//   }
  
// let timeOutID=setTimeout(sayHi, 1000, "Hello", "John"); //  calls sayHi() after one second --> Hello, John

let interval=setInterval(function(){
alert(phrase+', '+who)
}, 1000)