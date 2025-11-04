import { displayVictoryScreen, displayDefeatScreen } from "./display";
import type { GameState } from "./types/types";
import { typeText } from "./typeText";


// === End the game ===

const endGame = (gameState: GameState) => {
    gameState.isPlaying = false;
}


// === Check current state of the game ===

export const checkGameState = (
    guessedLetters: string[],
    gameState: GameState,
    wordToFind: string,
) => {
    gameState.tries++;
    if(guessedLetters.every(color => color === "green")) {
        endGame(gameState);
        displayVictoryScreen();
    }
    else if(gameState.tries >= 6) {
        endGame(gameState);
        displayDefeatScreen();
    }
    else {
        typeText(gameState, wordToFind);
    }
}