//we find location

const projectsSection = document.querySelector('#projects')

//we make element
let newP=document.createElement('p')

// we make what we want

const content = document.createTextNode('I don\'t care that you broke your elbow')

//add the content

newP.appendChild(content)

//add element to section

projectsSection.appendChild(newP)

let items=['milk','shampoo']
function addProduct(){
const prodDiv=document.getElementById('products')
for(let product of items){
    let newProduct=document.createElement('p')

    // we make what we want
    
    const content = document.createTextNode(product)
    
    //add the content
    
    newProduct.appendChild(content)
    
    //add element to section
    
    projectsSection.appendChild(newProduct)
}
}

addProduct()

let milkP=document.getElementById('products').firstElementChild
milkP.remove()

let shampooP=document.getElementById('products').lastElementChild
shampooP.stye.color='red'
shampooP.computedStyleMap.fontSize='50px'

let funDiv=document.querySelector('#main').nextElementSibling

funDiv.setAttribute('id','funDiv')
funDiv.classListadd()

// function addElement(){

// }