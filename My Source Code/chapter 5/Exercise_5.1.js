const max = 5;
const ranNumber = Math.floor(Math.random() * max) + 1;
//console.log(ranNumber);
let correct = false;
while (!correct) {
    let guess = prompt("Guess a Number 1 - " + max);
    guess = Number(guess);
    if (guess === ranNumber) {
        correct = true;
        alert("You got it " + ranNumber);
    } else if (guess > ranNumber) {
        alert("Too high");
    } else {
        alert("Too Low");
    }
} 
