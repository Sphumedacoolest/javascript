let words = ["javascript", "monkey", "amazing", "pancake", "orange", "pizza", "video"];
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;
let maxGuesses = 6; // Set the maximum number of guesses
let guessedLetters = []; // List to store the guessed letters

// Main game loop
while (maxGuesses > 0 && remainingLetters > 0) { // Adjusted condition
    // Show player progress
    alert(answerArray.join(" "));
    let guess = prompt("Guess a single letter or click 'cancel' to exit");

    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please guess a single letter only!");
    } else {
        // Convert the guess to lowercase
        guess = guess.toLowerCase();

        // Check if the letter has already been guessed
        if (guessedLetters.includes(guess)) {
            alert("You have already guessed that letter!");
            continue;
        }

        // Add the guessed letter to the list of guessed letters
        guessedLetters.push(guess);

        let found = false;
        for (let j = 0; j < word.length; j++) {
            if (guess === word[j] && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
                found = true;
            }
        }

        if (!found) {
            maxGuesses--; // Reduce the remaining guesses
            alert(`Incorrect guess! You have ${maxGuesses} guesses left.`);
        }
    }
}

// After the while loop
if (remainingLetters === 0) {
    alert(`Congratulations! You guessed the word: ${word}!`);
} else if (guess === null) {
    alert(`Sorry to see you leaving. The answer was ${word}.`);
} else {
    alert(`Out of guesses! The answer was ${word}.`);
}
