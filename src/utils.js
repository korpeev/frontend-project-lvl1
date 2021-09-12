const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const checkNumber = (callback) => {
  const number = getRandomInt(1, 100);
  const correctAnswer = callback(number) ? 'yes' : 'no';

  return [number, correctAnswer];
};

export { getRandomInt, checkNumber };
