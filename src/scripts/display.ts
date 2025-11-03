export const displayFirstLetter = (wordToFind: string) => {
    const firstTd =  document.querySelectorAll("td")[0];
    if(firstTd !== undefined && wordToFind[0]){
        firstTd.textContent = wordToFind[0];
        firstTd.classList.add("green-letter");
    }
}

export const displayAnswer = (cells: NodeListOf<HTMLTableCellElement>, i: number, wordGuessedLetters: string[], checkValue: number) => {
    cells[i]!.textContent = wordGuessedLetters[i]!;
    if(checkValue === 0) {
        cells[i]!.classList.add("green-letter");
    }
    else if (checkValue === 1) {
        cells[i]!.classList.add("yellow-letter");
    }
    else {
        cells[i]!.classList.add("red-letter");
    }
}