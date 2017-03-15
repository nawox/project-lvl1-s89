import ask from 'readline-sync';
import getUserName from '..';

const winMessage = (userName) => {
  console.log(`Congratulations, ${userName}!`);
  return 0;
};

const wrongMessage = (userName, userAnswer, answer) => {
  console.log(`'${userAnswer}' is wrong answer. Correct answer was '${answer}'\n Let's try again ${userName}!`);
  return 0;
};

const rightMessage = () => {
  console.log('Correct!\n');
  return 0;
};

const rule = 'Answer "yes" if number even otherwise answer "no".\n';

const attemptsCount = 3;

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const quest = () => {
  const number = Math.floor(Math.random() * 100);
  const struct = {
    question: number,
    answer: isEven(number),
  };
  return struct;
};

const round = (attempt, userName) => {
  if (attempt === 0) {
    winMessage(userName);
    return 0;
  }
  const questAns = quest();
  const userAnswer = ask.question(`Question: ${questAns.question} `);
  if (userAnswer !== questAns.answer) {
    wrongMessage(userName, userAnswer, questAns.answer);
    return 0;
  }
  rightMessage();
  round(attempt - 1, userName);
  return 0;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const userName = getUserName();

  round(attemptsCount, userName);
};
