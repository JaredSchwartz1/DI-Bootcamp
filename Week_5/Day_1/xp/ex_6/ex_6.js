let bankAmount=1000;
const vatIL=.17;
const transactions=['+600','-200','+100','-400']

function finances(){
transactions.forEach((str,i)=>{
str=str.slice(1,str.length)
str=(Number(str)+(Number(str)*vatIL))
transactions[i]=transactions[i].slice(0,1).concat(str)
console.log(transactions[i])
console.log(`${bankAmount}+transactions[i].slice(0,1)+str`)
bankAmount=Number(`${bankAmount}`.concat(`${transactions[i].slice(0,1)}`,`${transactions[i]}`))
console.log(bankAmount)
})}

finances()