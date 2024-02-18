let section = document.getElementById('main');
let colorTable = []
let clearDiv = document.createElement('div')
let clearButton = document.getElementById('clear');
let cursorColor = null

for (i = 0; i < 27; i++) {
    let color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    colorTable.push(color)
}
for (let i = 0; i <= 23; i++) {
    for (let j = 1; j <= 60; j++) {
        let paperTile = document.createElement('div')
        paperTile.classList.add('paperGrid')
        paperTile.setAttribute('id', `Tile${(i * 60 + j)}`)
        section.appendChild(paperTile)
        paperTile.addEventListener('mouseup', (ev) => { paintPaper(ev) })
        // paperTile.addEventListener('mousedown', (ev) => { brushPaint(ev) })
    }
}

let paperTilesArray = document.getElementsByClassName('paperGrid')
let aside = document.getElementById('sidebar');
aside.appendChild(clearDiv)
clearDiv.classList.add('clearDiv')
clearDiv.appendChild(clearButton)
for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 3; j++) {
        let setColor = colorTable[3 * (i - 1) + j - 1]
        let colorTile = document.createElement('div')
        colorTile.classList.add('color')
        colorTile.setAttribute('id', `${setColor}`)
        colorTile.setAttribute('style', `background-color: ${setColor}`)
        aside.appendChild(colorTile)
    }
}
for (i of document.getElementsByClassName('color')) {
    i.addEventListener('mouseover', highlight)
    i.addEventListener('mouseout', unHighlight)
}

function highlight() {
    this.setAttribute('style', `background-color: ${this.getAttribute('id')};opacity: 0.5`)
this.addEventListener('click', cursorColoring)
    return
}
function unHighlight() {
    this.setAttribute('style', `background-color: ${this.getAttribute('id')}`)
}

function cursorColoring() {
    if (document.querySelector('.selectedColor') !== null) {
        document.querySelector('.selectedColor').addEventListener('mouseover', highlight)
        document.querySelector('.selectedColor').classList.remove('selectedColor')
        this.classList.add('selectedColor')
    }
    else {
        this.classList.add('selectedColor')
    }
    this.setAttribute("style", `background-color: ${this.getAttribute('id')};`)
    this.removeEventListener('mouseover', highlight)
    // document.querySelector('*').addEventListener('mousedown', (ev) => { brushPaint(ev) })
    cursorColor = this.getAttribute('id')
    return cursorColor
}
function cursorColoringCancel() {
    if (document.querySelector('.selectedColor') !== null) {
        document.querySelector('.selectedColor').addEventListener('mouseover', highlight)
        document.querySelector('.selectedColor').classList.remove('selectedColor')
    }
    cursorColor = null
}

document.querySelector('*').addEventListener('dblclick', () => { cursorColoringCancel(cursorColor) })
clearButton.addEventListener('click', resetAll)

function resetAll() {
    for (i of document.getElementsByClassName('paperGrid')) {
        i.setAttribute("style", `background-color: white;`)
    }
    if (document.querySelector('.selectedColor') !== null) {
        document.querySelector('.selectedColor').addEventListener('mouseover', highlight)
        document.querySelector('.selectedColor').classList.remove('selectedColor')
    }
    cursorColor = null
}
function paintPaper(ev) {
    ev.currentTarget.setAttribute('style', `background-color: ${cursorColor};`)
}
function brushPaint(ev) {
    
    ev.currentTarget.addEventListener('mouseover', (ev) => {
        while(ev.button==0){
       ev.relatedTarget.setAttribute('style', `background-color: ${cursorColor};`)
        }
    })
    ev.currentTarget.addEventListener('mouseup', (ev) => {
        ev.currentTarget.removeEventListener('mouseover',(ev) => {
            console.log(ev.button)
            while(ev.button==0){
           ev.relatedTarget.setAttribute('style', `background-color: ${cursorColor};`)
            }
        })
     })
}