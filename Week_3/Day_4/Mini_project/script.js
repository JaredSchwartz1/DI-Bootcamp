let section = document.getElementById('main');
let colorTable = []
let clearDiv=document.createElement('div')
let clearButton = document.getElementById('clear');
let cursorColor=null

for(i=0;i<27;i++){
    let color=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
colorTable.push(color)
}

for (let i = 0; i <= 23; i++) {
    for (let j = 1; j <= 60; j++) {
        let paperTile = document.createElement('div')
        paperTile.classList.add('paperGrid')
        paperTile.setAttribute('id', `Tile${(i * 60 + j)}`)
        paperTile.addEventListener('click',()=>{paintPaper(cursorColor)}) 
        paperTile.addEventListener('mousedown',()=>{brushPaint(cursorColor)}) 
        section.appendChild(paperTile)
    }
}
let paperTilesArray=document.getElementsByClassName('paperGrid')
let aside = document.getElementById('sidebar');
aside.appendChild(clearDiv)
clearDiv.classList.add('clearDiv')
clearDiv.appendChild(clearButton)
for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 3; j++) {
        let setColor=colorTable[3 * (i - 1) + j-1]
        let colorTile = document.createElement('div')
        colorTile.classList.add('color')
        colorTile.setAttribute('id', `${setColor}`)
        colorTile.setAttribute('style', `background-color: ${setColor}`)
        aside.appendChild(colorTile)
    }
}
for (i of document.getElementsByClassName('color')){
    i.addEventListener('mouseover',highlight)
    i.addEventListener('mouseout',unHighlight)
   
}

function highlight(){
this.setAttribute('style',`background-color: ${this.getAttribute('id')};opacity: 0.5`)
this.addEventListener('mouseclick',cursorColoring)
}
function unHighlight(){
    this.setAttribute('style',`background-color: ${this.getAttribute('id')}`)
}

function cursorColoring(){
this.setAttribute("style",`background-color: ${this.getAttribute('id')}; opacity: 0.5;border:3px solid gold`)
cursorColor=this.getAttribute('id')
return cursorColor
}
function cursorColoringCancel(cursorColor){
    this.setAttribute("style",`background-color: ${cursorColor};`)
cursorColor=null
}


function paintPaper(cursorColor){
    
this.setAttribute('style',`background-color: ${cursorColor};`)
}
function brushPaint(cursorColor){

}
document.addEventListener('mousedblclick',()=>{cursorColoringCancel(cursorColor)})
clearButton.addEventListener('click',resetAll)

function resetAll(){
    for(i of document.getElementsByClassName('paperGrid')){
        i.setAttribute("style",`background-color: white;`)
    }
}