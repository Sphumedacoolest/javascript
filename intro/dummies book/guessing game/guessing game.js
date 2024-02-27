// Generate a random secret number between 1 and 20
let secret = Math.floor(Math.random() * 20) + 1;

let guess;
do {
    // convert user guess into integer
    guess = parseInt(prompt("Please guess the secret number (1-20)"));

    if (guess === secret) {
        alert("Correct Guess! Congrats!!");
    } else if (guess < secret) {
        alert("Incorrect, too low");
    } else {
        alert("Incorrect, too high");
    }
} while (guess !== secret);
