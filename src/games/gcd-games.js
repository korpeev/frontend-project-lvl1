import runGame from '../index.js';
import getRndInteger from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (first, second) => {
  if (!second) {
    return first;
  }

  return gcd(second, first % second);
};

const gameData = () => {
  const number1 = getRndInteger(1, 100);
  const number2 = getRndInteger(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = gcd(number1, number2).toString();

  return [question, correctAnswer];
};

const startGame = () => runGame(gameDescription, gameData);

export default startGame;
