let allBooks =[]  

let outsiders={
    title:'Outsiders',
    author: 'S. E. Hinton',
    image: 'https://m.media-amazon.com/images/I/71Bg39CmhoL._AC_UF1000,1000_QL80_.jpg',
    alreadyRead :true,
}
let lightningThief={
    title:'Percy Jackson and the Lightning Thief',
    author:'Rick Riordan',
    image:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1400602609i/28187.jpg',
    alreadyRead : false,
}
allBooks.push(outsiders)
allBooks.push(lightningThief)

let div=document.body.firstElementChild
let table=div.firstElementChild
let topRow= document.getElementById('top')
let middleRow= document.getElementById('middle')
let bottomRow= document.getElementById('bottom')

for(i of allBooks){
    console.log(i)
entry(i)
function entry(Obj){
    let bookTitle=document.createElement('th') 
    let title = document.createTextNode(Obj.title)
    bookTitle.appendChild(title)
    topRow.appendChild(bookTitle)
    let coverGrid=document.createElement('td') 
    let cover=document.createElement('img') 
    cover.classList.add('imageDimensions')
   cover.setAttribute('src',Obj.image)
   coverGrid.appendChild(cover)
    middleRow.appendChild(coverGrid)
    let blurbGrid=document.createElement('td') 
    let blurb = document.createTextNode(`${Obj.title} was written by ${Obj.author}`)
    if(Obj.alreadyRead==true){
        blurbGrid.classList.add('read')
    }
    blurbGrid.appendChild(blurb)
    bottomRow.appendChild(blurbGrid)
}
}