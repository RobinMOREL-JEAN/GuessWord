// === Give the hint at game start ===

export const displayFirstLetter = (wordToFind: string) => {
    const firstTd =  document.querySelectorAll("td")[0];
    if(firstTd !== undefined && wordToFind[0]){
        firstTd.textContent = wordToFind[0];
    }
}

// === Display which letters are correct after submit ===

export const displayAnswer = (
    cells: NodeListOf<HTMLTableCellElement>,
    i: number,
    wordGuessedLetters: string[],
    checkValue: number,
) => {
    cells[i]!.textContent = wordGuessedLetters[i]!;
    switch (checkValue) {
        case 0:
            cells[i]!.classList.add("green-letter");
            break;
        case 1:
            cells[i]!.classList.add("yellow-letter");
            break;
        default:
            cells[i]!.classList.add("red-letter");
            break
    }
}

// === Display Win/Lose End Screen ===

const gameLostText = document.getElementById("game-lost-text");

import { wordToFind } from "./index";

export const displayVictoryScreen = () => {
        document.getElementById("win-menu")?.classList.add("show");
}
export const displayDefeatScreen = () => {
    if (gameLostText) {
        document.getElementById("defeat-menu")?.classList.add("show");
        gameLostText.textContent = `${wordToFind}`;
    }
}