let calculatedVolume;
let form=document.getElementById('MyForm')
let userRadius; 
let volume = form.elements["volume"]

function calculateVolume(e){
    userRadius = form.elements["radius"].value 
    e.preventDefault()
if((Number(userRadius)==(NaN||""))||Number(userRadius)<=0){
    alert('Invalid input to the calculator.')
}
else{
    calculatedVolume=Math.PI*(userRadius**3)*4/3
    volume.setAttribute('value',calculatedVolume)
 
}
}

form.addEventListener('submit',calculateVolume)