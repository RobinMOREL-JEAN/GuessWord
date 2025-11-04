import { checkGameState } from "./gameState"
import { checkGoodAnswer, checkWrongAnswer } from "./answerCheck"
import type { GameState } from "./types/types";

// === Run every major function of the game

export const runGame = (
    wordGuessedLetters: string[],
    wordToFindLetters: string[],
    gameState: GameState,
) => {

    if (gameState.tries < 6 && gameState.isPlaying){
        const cells = document.querySelectorAll(`tr#try-${gameState.tries} td`) as NodeListOf<HTMLTableCellElement>;
        const currentLettersRemaining = [...wordToFindLetters]
        
        checkGoodAnswer(wordToFindLetters, wordGuessedLetters, currentLettersRemaining, cells);

        checkWrongAnswer(wordToFindLetters, wordGuessedLetters, currentLettersRemaining, cells);

        checkGameState(wordGuessedLetters, gameState, wordToFindLetters.join(""));
        
    } else {
        console.log("Game has already ended");
    }
}