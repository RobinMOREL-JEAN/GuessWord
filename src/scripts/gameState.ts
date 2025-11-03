export const checkGameState = (wordGuessedLetters: string[], gameState: { numberOfTries: number, isGameGoing: boolean}) => {
    gameState.numberOfTries++;
    if(wordGuessedLetters.every(color => color === "green")) {
        winGame(gameState);
    }
    else {
        if (gameState.numberOfTries >= 6) {
            loseGame(gameState);
        }
    }
}

export const winGame = (gameState: { isGameGoing: boolean }) => {
    document.getElementById("win-menu")?.classList.add("show");
    gameState.isGameGoing = false;
}

export const loseGame = (gameState: { isGameGoing: boolean }) => {
    document.getElementById("defeat-menu")?.classList.add("show");
    gameState.isGameGoing = false;
}