import readLineSync from 'readline-sync';

const createGame = () => {
  console.log('Welcom to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default createGame;
