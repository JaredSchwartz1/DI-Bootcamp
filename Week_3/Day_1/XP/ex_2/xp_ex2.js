// Add the code above, to your HTML file

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
// Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
// Change the font size of the whole body.

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

let div = document.body.firstElementChild
console.log(div)
div.classList.add('bg')
div.classList.add('pad1')
let listSelector=document.body.children[1]
listSelector.children[0].classList.add('seen')
listSelector.children[1].classList.add('bd')
document.body.classList.add('bigly')

console.log(div.style.backgroundColor)
if(div.style.backgroundColor='lightblue'){
    alert(`Hello ${listSelector.children[0].textContent} and ${listSelector.children[1].textContent}`)
}