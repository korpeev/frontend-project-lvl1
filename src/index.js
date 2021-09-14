import readLineSync from 'readline-sync';

const roundsCount = 3;

const runGame = (gameDescr, getGameData) => {
  console.log('Welcom to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescr);
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const answer = readLineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
