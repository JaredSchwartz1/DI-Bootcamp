function playTheGame() {
    if (confirm('Would you like to play a game?')) {
        numberGame()
    } else {
        alert('No problem, Goodbye.')
    }
}
function numberGame() {
    let userNumber = prompt('Pick a natural number from 0 to 10.');
    while (!(Number(userNumber) <= 10 && Number(userNumber) >= 0) || Math.floor(Number(userNumber)) != Number(userNumber)) {
        if (Number(userNumber) == NaN) {
            alert('Sorry, that\'s not a number. Try again.')
        }
        else if (Number(userNumber) > 10) {
            alert('Sorry that\’s not a valid number. Try again.')
        }
        else if (Number(userNumber) < 0) {
            alert('Sorry that\’s not a valid number. Try again')
        }
        else if (Math.floor(Number(userNumber)) != Number(userNumber)) {
            alert('Sorry that\’s not a valid number. Try again.')
        }
        userNumber = prompt('Pick a natural number from 0 to 10.')
    }
    let computerNumber = Math.floor(Math.random() * 11);
    while (computerNumber == userNumber) {
        computerNumber = Math.floor(Math.random() * 11)
    }
    compareNumbers(userNumber, computerNumber)
    }
function compareNumbers(userNumber, computerNumber) {
    let guesses = 0;
    let loss = true;
    while (guesses < 3) {
        if (userNumber > computerNumber) {
            alert(`Your number is greater than the computer’s number, guess again. You have ${3 - guesses} guesses remaining.`)
        }
        else if (userNumber < computerNumber) {
            alert(`Your number is less than the computer’s number, guess again. You have ${3 - guesses} guesses remaining.`)
        }
        else if (userNumber = computerNumber) {
            alert('Winner! You\'ve guessed the computer\'s number. Click the button to play the game again')
            loss = false
            break;
        }
        userNumber = prompt('Pick a natural number from 0 to 10.')
        guesses++
    }
    if (Boolean(loss) == true) {
        alert(`You are out of guesses. The computer's number was ${computerNumber}. Click the button to play again`)
    }
}