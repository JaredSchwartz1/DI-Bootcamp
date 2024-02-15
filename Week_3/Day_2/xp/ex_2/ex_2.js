// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

let form=document.body.firstElementChild
let list=document.body.querySelector('ul')
console.log(form)
function saveInfo(e){
e.preventDefault()
fname=form.elements['firstname'].value
lname=form.elements['lastname'].value
fname=document.getElementById('fname').value
lname=document.getElementById('lname').value
console.log(fname) 
console.log(lname) 
if((fname=='')||(lname=='')){
alert('Missing field. Try entering again.')
}
else{
    let li1=document.createElement('li')
    let content1=document.createTextNode(fname)
    li1.appendChild(content1)
    list.appendChild(li1)
    let li2=document.createElement('li')
    let content2=document.createTextNode(lname)
    li2.appendChild(content2)
    list.appendChild(li2)
}
}
// console.log(fname)
// console.log(lname)
// let fnameinput=form.ElementB('name')
// form.addEventListener('submit',()=>
// {})


form.addEventListener('submit',saveInfo)