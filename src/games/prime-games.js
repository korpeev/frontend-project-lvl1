/* eslint-disable consistent-return */
import runGame from '../index.js';
import { checkNumber } from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  if (number > 1) {
    return true;
  }
};

const gameData = () => {
  const [number, correctAnswer] = checkNumber(isPrime);
  return [number, correctAnswer];
};

const startGame = () => runGame(gameDescription, gameData);

export default startGame;
