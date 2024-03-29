// HTML CSS JSResult Skip Results Iframe
// EDIT ON
//On Change : event triggers when the element <u>has finished changing</u>.

let newInput1 = document.getElementById('input1')

newInput1.addEventListener("change", changeInput)

function changeInput(event){
  document.getElementById('result1').textContent = event.target.value
}


// OTHER POSSIBILITY
// let newInput1 =  document.getElementById('input1')
//   newInput1.onchange = function() {
//   document.getElementById('result1').innerHTML = this.value;
//   };

// --------------------------------

//On Input : event triggers every time after a value is modified by the user. 

let newInput2 = document.getElementById('input2')
newInput2.addEventListener("input", changeInput2)

function changeInput2 (event){
  document.getElementById('result2').textContent = event.target.value
}