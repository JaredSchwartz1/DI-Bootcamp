let allBoldItems=[];
let para=document.body.firstElementChild
function getAllBoldItems(){
allBoldItems=document.body.getElementsByTagName('strong')
}


function highlight(){
    getAllBoldItems()
    for (i of allBoldItems){
        i.classList.add('highlight')
    }
}
function returnItemsToDefault(){
    getAllBoldItems()
    for (i of allBoldItems){
        i.classList.remove('highlight')
    }
}
para.addEventListener('mouseover',highlight)
para.addEventListener('mouseout',returnItemsToDefault)


