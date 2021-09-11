import readLineSync from 'readline-sync'

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  const getRandomNumber = () => Math.floor(Math.random() * 100)
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomNumber()
    console.log('Question', number)
    const answer = readLineSync.question('Your answer: ')
    if (number % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct')
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.`)
        console.log(`Let's try again ${name}!`)
        return 0
      }
    }
    if (number % 2 !== 0) {
      if (answer === 'no') {
        console.log('Correct')
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.`)
        console.log(`Let's try again ${name}!`)
        return 0
      }
    }
  }
  console.log(`Congratulations, ${name}!`)
  return 1
}
