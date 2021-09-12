/* eslint-disable consistent-return */
import runGame from '../index.js';
import getRandomInt from '../utils.js';

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
  const number = getRandomInt(1, 100);
  const correctNumber = isPrime(number) ? 'yes' : 'no';

  return [number, correctNumber];
};

const startGame = () => runGame(gameDescription, gameData);

export default startGame;
