let someObj = {
    name: 'jeff',
    email: 'yoohoo@yahoo.com'
}
console.log(someObj.name)
let title = document.body.firstElementChild

let div = title.nextElementSibling
let heading = div.firstElementChild

console.log(heading)
let ulSelector = document.body.children[2]
console.log(ulSelector)

let divUsers = document.querySelector('.users')
console.log(divUsers)

let divContent = document.body.getElementById('content')
console.log(divContent)