import readLineSync from 'readline-sync';

const roundCounts = 3;

const runGame = (gameDescr, getGameData) => {
  console.log('Welcom to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescr);
  for (let i = 1; i <= roundCounts; i += 1) {
    const [question, CorrectAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const answer = readLineSync.question('Your answer: ');
    if (CorrectAnswer === answer) {
      console.log('Correct');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${CorrectAnswer}. \nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
