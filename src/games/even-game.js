import { checkNumber } from '../utils.js';
import runGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const gameData = () => {
  const [number, correctAnswer] = checkNumber(isEven);
  return [number, correctAnswer];
};

const startGame = () => runGame(gameDescription, gameData);

export default startGame;
