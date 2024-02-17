let planetsArray = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
let moonCount = [0, 0, 1, 2, 95, 146, 27, 14]
let section = document.getElementById('listPlanets');
for (i of planetsArray) {
    let planetDiv = document.createElement('div')
    planetDiv.classList.add('planet', `${i}`)
    //planetDiv.style
    for (let j = moonCount[planetsArray.indexOf(i)]; j > 0; j--) {
        let moonDiv = document.createElement('div')
        moonDiv.classList.add('moon')
        moonDiv.setAttribute('id', `moon${i}${j}`)
        moonDiv.setAttribute('style', `background-color:rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`)
        planetDiv.appendChild(moonDiv)
    }
    section.appendChild(planetDiv)
}