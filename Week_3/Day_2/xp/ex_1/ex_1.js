let article = document.body.firstElementChild
let h1 = article.firstElementChild

const article2 = document.querySelector('article')
article2.removeChild(article.lastElementChild)

const h2 = article.children[1]
h2.addEventListener('click', () => {
    h2.classList.add('bg')
}
)
const h3 = h2.nextElementSibling
h3.addEventListener('click', () =>
    h3.classList.add('vanish')
)

const button = document.body.querySelector('button')
button.addEventListener("click", () => {
    for (i = 3; i <= 5; i++) {
        article.children[i].classList.add('strong')
    }
})

h1.addEventListener('mouseover', () => {
    let size=(Math.random() * 100);
    h1.classList.add('bigly')
    h1.setAttribute('style',`font-size:${size}px`)
})
h1.addEventListener('mouseout', () => {
    let size=(Math.random() * 100);
    h1.classList.add('bigly')
    h1.setAttribute('style',`font-size:${size}px`)
})
// let p2=article.children[5]
// p2.addEventListener('mouseover', () => {
    
// })


