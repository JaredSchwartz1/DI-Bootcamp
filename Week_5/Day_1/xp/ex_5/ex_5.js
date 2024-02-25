const colors = ["Blue", "Green", "Red","Violet", "Orange", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((str,i)=>{
    let suffix;
    i+1==1?suffix=ordinal[1]:i+1==2?suffix=ordinal[2]:i+1==3?suffix=ordinal[3]:suffix=ordinal[0];
console.log(`My ${i+1}${suffix} choice color is ${str}`)
})