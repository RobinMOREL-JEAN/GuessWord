import { displayAnswer } from "./display"

export const checkGoodAnswer = (
    wordToFindLetters: string[],
    wordGuessedLetters: string[],
    currentLettersRemaining: string[],
    cells: NodeListOf<HTMLTableCellElement>,

) => {
    for (let i = 0; i < wordToFindLetters.length; i++) { 
        if(wordGuessedLetters[i] === currentLettersRemaining[i]) { 
            displayAnswer(cells, i, wordGuessedLetters, 0);

            wordGuessedLetters[i] = "green";
            currentLettersRemaining[i] = "green";
        }
    }
}

export const checkWrongAnswer = (
    wordToFindLetters: string[],
    wordGuessedLetters: string[],
    currentLettersRemaining: string[],
    cells: NodeListOf<HTMLTableCellElement>,

) => {
    for (let i = 0; i < wordToFindLetters.length; i++) {
        const guessed = wordGuessedLetters[i];
        if (guessed) {
            if (currentLettersRemaining.includes(guessed)) {
                if(guessed !== "green") {
                    displayAnswer(cells, i, wordGuessedLetters, 1);
                    
                    wordGuessedLetters[i] = "yellow";

                    const cellIndex = currentLettersRemaining.indexOf(guessed); // Allow displayed yellow letters to match the number of corresponding missing entries.
                    currentLettersRemaining[cellIndex] = "yellow";
                }
            }
            else {
                displayAnswer(cells, i, wordGuessedLetters, 2);
                wordGuessedLetters[i] = "red";
            }
        }
    }
}