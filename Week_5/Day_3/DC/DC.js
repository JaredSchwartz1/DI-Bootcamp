let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];
let getHonda = (carInventory) => {
    let filteredInventory = carInventory.filter((val) => val['car_make'] == "Honda")
    console.log(`This is a ${filteredInventory[0]['car_make']} ${filteredInventory[0]['car_model']} from ${filteredInventory[0]['car_year']}.`)
}

getHonda(inventory)



//Part 2

let sortCarsByInventory = (carInventory) => {
    let sortCarInventory = [];
    for (i of carInventory) {
        sortCarInventory.push('')
    }
    sortCarInventory = carInventory.map((val, i, arr) => {
        let current = val
        let greaterArr = arr.filter((val) => val.car_year > current.car_year)
        sortCarInventory[carInventory.length - greaterArr.length - 1] = current
        if (current == arr[carInventory.length - 1]) {
            return inventory=sortCarInventory
        }
    })


}

sortCarsByInventory(inventory)
console.log(inventory)