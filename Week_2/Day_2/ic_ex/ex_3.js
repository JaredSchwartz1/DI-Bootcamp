let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );//no because a=4
    break;
  case 4:
    alert( 'Exactly!' );//yes because a=4
    break;
  case 5:
    alert( 'Too large' ); //no because we a!=5
    break;
  default:
    alert( "I don't know such values" ); //no because a has a value.
}


switch (a) {
  case 4:
    alert('Right!');//yes
    break;

  case 3: // (*) grouped two cases
  case 5://no
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');//no
}
