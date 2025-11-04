import { displayFirstLetter} from "./display";
import { typeText } from "./typeText"
import wordsData from "../words.json";
import type { GameState } from "./types/gameState.type";

const gameState: GameState = {
    tries: 0,
    isPlaying: true,
};
const { words } = wordsData;
const wordToFind = words[Math.floor(Math.random() * words.length)];

if (!wordToFind) throw new Error('No word found in the words list.');

typeText(gameState, wordToFind);
displayFirstLetter(wordToFind);
