import { runGame } from "./game";
import type {GameState} from "./types/gameState.type";

/**
 * Handles typing input from the user.
 */
export const typeText = (
  gameState: GameState, // reuse the type
  wordToFind: string
) => {
    const typedLetters: string[] = [];
    let j = 0;

    // Comment needed here, why is it needed ?
    if (gameState.tries === 0) {
        j++;
        typedLetters.push(wordToFind[0]!)
    }

    const typingListener = (event: KeyboardEvent) => {
        const cells = document.querySelectorAll(`tr#try-${gameState.tries} td`) as NodeListOf<HTMLTableCellElement>;
        const currentCell = cells[j];

        if (!currentCell) {
            console.error(`Something went wrong, currentCell is undefined : j: ${j}, cells: ${cells}`);
            return;
        }

        if (/^[a-z]$/.test(event.key) && j < 6) {
            currentCell.textContent = event.key as string;
            j++;
            typedLetters.push(event.key);
        }
        else if (event.key === "Backspace" && j > 0){
            j--;
            currentCell.textContent = "";
            typedLetters.pop();
        }
        else if (event.key === "Enter" && j === 6) {
            document.removeEventListener("keydown", typingListener);
            j = 0;
            submit(gameState, wordToFind, typedLetters);
            // Better than replacing with empty array to keep the reference
            typedLetters.slice(0, typedLetters.length);
        }
    }
    document.addEventListener("keydown", typingListener);
}

/**
 * Handles submission of the typed word.
 */
const submit = (
  gameState: GameState,
  wordToFind: string,
  letters: string[]
) => {
    const wordLetters = wordToFind.split("");
    const guessedLetters = letters
        .map(l => l.toUpperCase())
        .splice(6);
    runGame(guessedLetters, wordLetters, gameState);
}
