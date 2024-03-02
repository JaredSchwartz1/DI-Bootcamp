const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];
const result = ['bread', ...vegetables, 'chicken', ...fruits]; console.log(result);//the result will be ['bread', "carrot", "potato", 'chicken', "apple", "orange"] 
// ------2------ 
const country = "USA"; console.log([...country]);//it wil console log ['USA'] I guess the thing treats country as an array. 
// // ------Bonus------ 
let newArray = [...[,,]]; console.log(newArray);//this should be ['','','']. it is undefined apparently.