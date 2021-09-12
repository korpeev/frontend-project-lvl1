import runGame from '../index.js';
import { getRandomInt } from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const calc = (first, second, operation) => {
  let result = null;
  switch (operation) {
    case '+':
      result = first + second;
      break;
    case '-':
      result = first - second;
      break;
    case '*':
      result = first * second;
      break;
    default:
  }
  return result;
};

const gameData = () => {
  const number1 = getRandomInt(1, 50);
  const number2 = getRandomInt(1, 50);
  const operators = ['-', '+', '*'];
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calc(number1, number2, operator).toString();

  return [question, correctAnswer];
};

const startGame = () => runGame(gameDescription, gameData);

export default startGame;
