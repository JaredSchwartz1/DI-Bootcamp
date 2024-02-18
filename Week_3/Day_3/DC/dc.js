let writing=document.getElementById('letters-only')
//let 
let inputs=[]
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    + 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
function keycheck(){
    alert('e')
    for(i of alphabet)
    if (target.value==i){
        keyPrint(i)
    }
    else if(target.value=='shift'){
        while(true){
        if(target.value==i){
                keyPrint(toCaps(i))
            }
        }
    }
    //else if(||'caps_lock'){}
    else{

    }
}
function keyPrint(String){
inputs.push(String)
writing.textContent=input.join("")
}
writing.addEventlistener('keydown',keycheck)