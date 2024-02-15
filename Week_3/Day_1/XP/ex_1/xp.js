// //Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
// Change each first name of the two <ul>'s to your name. (Hint : use a loop)

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

let div=document.body.firstElementChild
console.log(div)

let list1Selector=document.body.children[1]
list1Selector.children[1].textContent='Richard'
console.log(list1Selector.children[1])
let list2Selector=document.body.children[2]
list2Selector.children[1].remove()

let listArray=document.body.getElementsByClassName('list')
console.log(listArray)
for(i of listArray){
i.children[0].textContent='Jared'
i.classList.add('student_list')
}

list1Selector.classList.add('university','attendance')

console.log(list1Selector)
console.log(list2Selector)
