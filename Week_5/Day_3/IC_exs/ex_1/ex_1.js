let party = [
    {
      desert: 'Chocolate Mousse',
      calories: 30,
    },
    {
      desert: 'Apple Pie',
      calories: 15,
    },
    {
      desert: 'Croissant',
      calories: 50,
    },
    {
      desert: 'Strawberry Icecream',
      calories: 5,
    },
  ]

let calorieCounter= (acc, val)=>{
    if(val.desert=='Apple Pie'){
      console.log('no pie')
        return;
    }
    else{
      console.log(acc+val.calories)
    return acc+val.calories;
    }
}

let calorieCount=party.reduce(calorieCounter)
console.log(calorieCount)