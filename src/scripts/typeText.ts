import { wordToFind } from "./index";
import { runGame } from "./game";
let typedWord: string[] = [];

// === Setup keyboard events ===

export const typeText = (gameState: { numberOfTries: number, isGameGoing: boolean}) => {
    let j = 0;

    if (gameState.numberOfTries === 0) {
        j++;
        typedWord.push(wordToFind![0]!)
    }

    const typingListener = (event: KeyboardEvent) => {
        const cellsToType = document.querySelectorAll(`tr#try-${gameState.numberOfTries} td`) as NodeListOf<HTMLTableCellElement>;
        if (/^[a-z]$/.test(event.key) && j < 6) {
            cellsToType[j]!.textContent = event.key as string;
            j++;
            typedWord.push(event.key);
        }
        else if (event.key === "Backspace" && j > 0){
            j--;
            cellsToType[j]!.textContent = "";
            typedWord.pop();
        }
        else if (event.key === "Enter" && j === 6) {
            document.removeEventListener("keydown", typingListener);
            j = 0;
            submit(gameState);
            typedWord = [];
        }
    }
    document.addEventListener("keydown", typingListener);
}

// === Send submited word to the main function ===

const submit = (gameState: { numberOfTries: number, isGameGoing: boolean}) => {
            const wordToFindLetters = wordToFind!.split("");
            let wordGuessedLetters = [...typedWord];
            wordGuessedLetters = wordGuessedLetters.map(letter => letter.toUpperCase());
            wordGuessedLetters.splice(6);
            runGame(wordGuessedLetters, wordToFindLetters, gameState);    
}