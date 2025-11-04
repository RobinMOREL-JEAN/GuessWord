import { displayFirstLetter} from "./display";
import { typeText } from "./typeText"
import wordsData from "../words.json";

const wordsDictionnary = wordsData.words;
export const wordToFind = wordsDictionnary[Math.floor(Math.random() * wordsDictionnary.length)];

let wordGuessed = "";
let gameState = {
    numberOfTries: 0,
    isGameGoing: true,
};

typeText(gameState);

if (wordToFind !== undefined) {
    displayFirstLetter(wordToFind);
}

console.log(wordToFind);