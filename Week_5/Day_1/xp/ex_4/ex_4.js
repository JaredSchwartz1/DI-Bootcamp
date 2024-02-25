const colors = ["Blue", "Green", "Red","Violet", "Orange", "Indigo", "Yellow"];

colors.forEach((str,i)=>{
console.log(`My #${i+1} choice color is ${str}`)
})


function violetCheck(){
    let check=colors.some((value)=>value==='Violet')
    if(check){
        console.log('Yeah')
    }
    else{
        console.log('No...')
    }
}
violetCheck()

