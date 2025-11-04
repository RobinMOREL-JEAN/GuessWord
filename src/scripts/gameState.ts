import { displayVictoryScreen, displayDefeatScreen } from "./display";
import { typeText } from "./typeText";
import type {GameState} from "./types/gameState.type";

let isWordRight = false;

// === End the game ===

const endGame = (gameState: GameState) => {
    gameState.isPlaying = false;
}


// === Check current state of the game ===

export const checkGameState = (
  wordGuessedLetters: string[],
  gameState: GameState,
  wordsToFind: string
) => {
    gameState.tries++;
    if(wordGuessedLetters.every(color => color === "green")) {
        isWordRight = true;
        endGame(gameState);
        displayVictoryScreen();
        console.log("a");
    }
    else if(gameState.tries >= 6) {
            endGame(gameState);
            displayDefeatScreen();
    }
    else {
        typeText(gameState, wordsToFind);
    }
}
