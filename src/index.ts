import wordsData from "./words.json";
const wordsDictionnary = wordsData.words;

const form = document.querySelector("form");
const input = document.querySelector("input");


const wordToFind = wordsDictionnary[Math.floor(Math.random() * wordsDictionnary.length)];

console.log(wordToFind);

let numberOfTries = 0;

let wordGuessed = ""; // ! limiter lenght();
let wordGuessedLetters = wordGuessed.split(""); 

if (wordToFind !== undefined && form && input) {

    const wordToFindLetters = wordToFind.split("");
    const firstTd =  document.querySelectorAll("td")[0];
    
    if(firstTd !== undefined && wordToFindLetters[0]){
        firstTd.textContent = wordToFindLetters[0];
    }
    
    form.addEventListener("submit", (event: SubmitEvent) => {
            event.preventDefault();

            wordGuessed = input.value;
            wordGuessedLetters = wordGuessed.split("");
            wordGuessedLetters = wordGuessedLetters.map(letter => letter.toUpperCase());
            wordGuessedLetters.splice(6);

            runGame();
            form.reset();
    });

    const runGame = () => {
        const cells = document.querySelectorAll(`tr#try-${numberOfTries} td`) as NodeListOf<HTMLTableCellElement>;
        const currentLettersRemaining = [...wordToFindLetters]
    
        // console.log(wordGuessedLetters);
        // console.log(currentLettersRemaining);
        for (let i = 0; i < wordToFindLetters.length; i++) { 
            if(wordGuessedLetters[i] === currentLettersRemaining[i]) { 
                cells[i]!.textContent = wordGuessedLetters[i]!;
                cells[i]!.classList.add("green-letter");
                wordGuessedLetters[i] = "green";
                currentLettersRemaining[i] = "green";
            }
        }
    
        // console.log("#####STAGE 1#####");
        // console.log("wordGuessedLetters: " + wordGuessedLetters);
        // console.log("#################");
        // console.log("currentLettersRemaining: " + currentLettersRemaining);
        // console.log("#################");
    
        // let wordGuessedLettersValueCheck = [...currentLettersRemaining]; // saving a copy of $currentLettersRemaining
    
        for (let i = 0; i < wordToFindLetters.length; i++) {
            const guessed = wordGuessedLetters[i];
            if (guessed) {
                if (currentLettersRemaining.includes(guessed)) {
                    if(guessed !== "green") {
                        cells[i]!.textContent = wordGuessedLetters[i]!;
                        cells[i]!.classList.add("yellow-letter");
                        wordGuessedLetters[i] = `${guessed}-yellow`;

                        const cellIndex = currentLettersRemaining.indexOf(guessed);
                        currentLettersRemaining[cellIndex] = "yellow";
                        console.log(currentLettersRemaining);
                    }
                }
                else {
                    // if(wordGuessedLetters[i] !== "green")
                    cells[i]!.textContent = wordGuessedLetters[i]!;
                    cells[i]!.classList.add("red-letter");
                    wordGuessedLetters[i] = `${guessed} - red`
                }
            }
        }
    
        // console.log("#####STAGE 2#####");
        // console.log(wordGuessedLetters);
        // console.log("#################");
        if(wordGuessedLetters.every(color => color === "green")) {
            alert("WIN");
        }
        else {
            numberOfTries++;
            if (numberOfTries >= 6) {
                alert("LOSE");
            }
        }
    }
}
