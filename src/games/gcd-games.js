import runGame from '../index.js';
import { getRandomInt } from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (first, second) => {
  if (!second) {
    return first;
  }

  return getGcd(second, first % second);
};

const gameData = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2).toString();

  return [question, correctAnswer];
};

const startGame = () => runGame(gameDescription, gameData);

export default startGame;
