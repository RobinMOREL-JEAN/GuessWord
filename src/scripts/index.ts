import { displayFirstLetter} from "./display";
import { runGame } from "./game";
import { typeText } from "./typeText"

import wordsData from "../words.json";

const wordsDictionnary = wordsData.words;
const form = document.querySelector("form");
const input = document.querySelector("input");
export const wordToFind = wordsDictionnary[Math.floor(Math.random() * wordsDictionnary.length)];

let wordGuessed = "";
let gameState = {
    numberOfTries: 0,
    isGameGoing: true,
};

typeText(gameState);

console.log(wordToFind);

const setUpGame = () => {
    if (wordToFind !== undefined && form && input) {
        
        const wordToFindLetters = wordToFind.split("");
        displayFirstLetter(wordToFind);

        
        form.addEventListener("submit", (event: SubmitEvent) => {
                event.preventDefault();

                wordGuessed = input.value;
                let wordGuessedLetters = wordGuessed.split("");
                wordGuessedLetters = wordGuessedLetters.map(letter => letter.toUpperCase());
                wordGuessedLetters.splice(6);
                console.log("wordGuessedLetters-"+wordGuessedLetters)
                runGame(wordGuessedLetters, wordToFindLetters, gameState);
                form.reset();
        });
    }
}

setUpGame();