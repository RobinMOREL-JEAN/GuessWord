// import { wordToFind } from "./index";
import { runGame } from "./game";
import type { GameState } from "./types/types";


// === Setup keyboard events ===

export const typeText = (
    gameState: GameState,
    wordToFind: string
) => {
    const typedLetters: string[] = [];
    let j = 0;

    if (gameState.tries === 0) {
        j++;
        typedLetters.push(wordToFind![0]!)
    }

    const typingListener = (event: KeyboardEvent) => {
        const cells = document.querySelectorAll(`tr#try-${gameState.tries} td`) as NodeListOf<HTMLTableCellElement>;

        if (/^[a-zA-Z]$/.test(event.key) && j < 6) {
            cells[j]!.textContent = event.key as string;
            j++;
            typedLetters.push(event.key);
        }
        else if (event.key === "Backspace" && j > 0){
            j--;
            cells[j]!.textContent = "";
            typedLetters.pop();
        }
        else if (event.key === "Enter" && j === 6) {
            document.removeEventListener("keydown", typingListener);
            j = 0;
            submit(gameState, typedLetters, wordToFind);
            // typedLetters.splice(0, typedLetters.length);
        }
    }
    document.addEventListener("keydown", typingListener);
}

// === Send submited word to the main function ===

const submit = (
    gameState: GameState,
    typedLetters: string[],
    wordToFind: string,
) => {
        const wordToFindLetters = wordToFind!.split("");
        // let guessedLetters = [...typedLetters];
        const guessedLetters = typedLetters.map(letter => letter.toUpperCase());
        guessedLetters.splice(6);
        runGame(guessedLetters, wordToFindLetters, gameState);
}