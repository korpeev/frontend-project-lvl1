import runGame from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const getProgrresion = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const gameData = () => {
  const start = getRandomInt(0, 5);
  const step = getRandomInt(1, 5);
  const length = getRandomInt(5, 20);
  const progression = getProgrresion(start, step, length);
  const hiddenNumber = getRandomInt(0, progression.length - 1);
  const correctNumber = progression[hiddenNumber].toString();
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');

  return [question, correctNumber];
};

const startGame = () => runGame(gameDescription, gameData);

export default startGame;
