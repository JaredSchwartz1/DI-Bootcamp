let section=document.getElementById('main'); 
for(let i=0;i<=23;i++){
for (let j=1;j<=60;j++){
let paperTile=document.createElement('div')
paperTile.classList.add('paperGrid')
paperTile.setAttribute('id',`Tile${(i*60+j)}`)
section.appendChild(paperTile)
}
}

let aside=document.getElementById('sidebar');
for(let i=1;i<=7;i++){
    for (i=1;i<=3;i++){
    let paperTile=document.createElement('div')
    paperTile.classList.add('color')
    paperTile.setAttribute('id',``)
    section.appendChild(paperTile)
    }
    }