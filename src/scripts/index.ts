import { displayFirstLetter} from "./display";
import { runGame } from "./game";

import wordsData from "../words.json";

const wordsDictionnary = wordsData.words;
const form = document.querySelector("form");
const input = document.querySelector("input");
const wordToFind = wordsDictionnary[Math.floor(Math.random() * wordsDictionnary.length)];

let wordGuessed = "";
let gameState = {
    numberOfTries: 0,
    isGameGoing: true,
};

console.log(wordToFind);

if (wordToFind !== undefined && form && input) {
    
    const wordToFindLetters = wordToFind.split("");
    displayFirstLetter(wordToFind);

    
    form.addEventListener("submit", (event: SubmitEvent) => {
            event.preventDefault();

            wordGuessed = input.value;
            let wordGuessedLetters = wordGuessed.split("");
            wordGuessedLetters = wordGuessedLetters.map(letter => letter.toUpperCase());
            wordGuessedLetters.splice(6);

            runGame(wordGuessedLetters, wordToFindLetters, gameState);
            form.reset();
    });
}