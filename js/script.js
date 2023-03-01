const guessedLettersElement = document.querySelector(".guessed-letters");
//The button players push to guess
const guessLetterButton = document.querySelector(".guess");
//The letter player inputs into box
const letterInput = document.querySelector(".letter");
//The empty paragraph where the word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress");
//The paragraph where the remaining guesses will display
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector("play-again");

const = "magnolia";

// Display our symbols as placeholders for the chosen word's letters
const placeholder = function(word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetter.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click" function(e) {
    e.preventDefault ();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
});