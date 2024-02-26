//part I

// function makeJuice(size){
//  function addIngredients(ingredient1,ingredient2,ingredient3){
// let order = document.createElement('h2')
// let orderText=document.createTextNode(`The customer wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, and ${ingredient3}.`)
// order.appendChild(orderText)
// document.body.appendChild(order)
//  }
//  addIngredients('bananas','mangos','blueberries')
// }

// makeJuice('medium')

//part II

function makeJuice(size) {
    let ingredients = []
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1)
        ingredients.push(ingredient2)
        ingredients.push(ingredient3)
    }
    function displayJuice() {
        let ingredientsString = ''
        ingredients.forEach((value, i, arr) => {
            if (i == arr.length - 1) {
                ingredientsString = `${ingredientsString} ${value}`
            }
            else {
                ingredientsString = `${ingredientsString} ${value},`
            }
            return ingredientsString
        })
        let order = document.createElement('h2')
        let orderText = document.createTextNode(`The customer wants a ${size} juice, containing ${ingredientsString}.`)
        order.appendChild(orderText)
        document.body.appendChild(order)
    }
    addIngredients('bananas', 'mangos', 'blueberries')
    addIngredients('strawberries', 'pineapples', 'kiwi')
    displayJuice()
}

makeJuice('medium')
