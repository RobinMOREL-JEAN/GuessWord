import { displayFirstLetter} from "./display";
import { typeText } from "./typeText"
import wordsData from "../words.json";
import type { GameState } from "./types/types";

const wordsDictionnary = wordsData.words;
export const wordToFind = wordsDictionnary[Math.floor(Math.random() * wordsDictionnary.length)];

// let wordGuessed = "";

const gameState: GameState = {
    tries: 0,
    isPlaying: true,
};

if (wordToFind !== undefined) {
    typeText(gameState, wordToFind);
    displayFirstLetter(wordToFind);
}

console.log(wordToFind);