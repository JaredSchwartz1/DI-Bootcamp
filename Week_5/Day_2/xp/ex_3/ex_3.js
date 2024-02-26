(function fortuneTell(job,location,partnerName,childrenCount){
    let fortuneElement=document.createElement('h2')
    let fortuneElementText=document.createTextNode(`You will be a ${job} in ${location}, and married to ${partnerName} with ${childrenCount} kids.`)
    fortuneElement.appendChild(fortuneElementText)
    document.body.appendChild(fortuneElement)
})('plumber','Las Vegas','Michelle','1')
