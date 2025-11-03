import { checkGoodAnswer, checkWrongAnswer } from "./answerCheck"
import { displayFirstLetter, displayAnswer } from "./display";
import { checkGameState } from "./gameState"
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

            runGame(wordGuessedLetters);
            form.reset();
    });

    const runGame = (wordGuessedLetters: string[]) => {

        if (gameState.numberOfTries < 6 && gameState.isGameGoing){
            const cells = document.querySelectorAll(`tr#try-${gameState.numberOfTries} td`) as NodeListOf<HTMLTableCellElement>;
            const currentLettersRemaining = [...wordToFindLetters]
            
            checkGoodAnswer(wordToFindLetters, wordGuessedLetters, currentLettersRemaining, cells);

            checkWrongAnswer(wordToFindLetters, wordGuessedLetters, currentLettersRemaining, cells);

            checkGameState(wordGuessedLetters, gameState);
            
        } else {
            console.log("Game has already ended");
        }
    }
}