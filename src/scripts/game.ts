import { checkGameState } from "./gameState"
import { checkGoodAnswer, checkWrongAnswer } from "./answerCheck"

export const runGame = (wordGuessedLetters: string[], wordToFindLetters: string[], gameState: { numberOfTries: number, isGameGoing: boolean}) => {

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