import { displayVictoryScreen, displayDefeatScreen } from "./display";
import { typeText } from "./typeText";

let isWordRight = false;

const endGame = (gameState: { isGameGoing: boolean }, foundWord: boolean) => {
    if(foundWord) {
        gameState.isGameGoing = false;
    } else {
        gameState.isGameGoing = false;
    }
}

export const checkGameState = (wordGuessedLetters: string[], gameState: { numberOfTries: number, isGameGoing: boolean}) => {
    gameState.numberOfTries++;
    if(wordGuessedLetters.every(color => color === "green")) {
        isWordRight = true;
        endGame(gameState, isWordRight);
        displayVictoryScreen();
    }
    else if(gameState.numberOfTries >= 6) {
            endGame(gameState, isWordRight);
            displayDefeatScreen();
    }
    else {
        typeText(gameState);
    }
}