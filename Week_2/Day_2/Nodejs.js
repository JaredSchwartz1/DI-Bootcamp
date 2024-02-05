/*
let hey = alert('hey');
let userAge= prompt('What is your age?');

if(userAge>=18 && userAge<30){
alert('send snap asap')
let userSnap=prompt('Write down your snap asap');
}
else if (userAge>100 || userAge<1){
    alert('stfu liar')
}
else if(userAge<=12 && userAge>=1){
    alert('breakfast found')
}
else if (userAge>=30){
    alert('I ain\'t no cougar')
}
else{
alert('f off child')
}
*/
//switch

let favSong = 'What is Life by George Harrison'
favSong = prompt('what is your favorite song?,')
switch(favSong){
    case 'What is Life by George Harrison':
        console.log('What I know, I can\'t say')
case 'Vienna by Billy Joel':
console.log('Slow down you crazy child')
break;
case 'Bittersweet Symphony by The Verve':
console.log('Cause it\'s a bitter sweet symphony, that\'s life')
break;
case 'Riptide by Vance Joy':
console.log('I was scared of dentists and the dark')
alert('Basic white bitch');
break;
default:
    console.log('Sorry, I don\'t know the lyrics to that song.');
    break;
}


