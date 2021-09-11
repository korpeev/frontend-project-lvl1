import readLineSync from 'readline-sync';

const roundCounts = 3;

const runGame = (gameDescr, gameData) => {
  console.log('Welcom to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescr);
  for (let i = 1; i <= roundCounts; i += 1) {
    const [question, CorrectAnswer] = gameData();
    console.log(`Question: ${question}`);
    const answer = readLineSync.question('Your answer: ');
    if (CorrectAnswer === answer) {
      console.log('Correct');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${CorrectAnswer}`);
      return -1;
    }
  }
  console.log(`Congratulations, ${name}`);
  return 1;
};

export default runGame;
