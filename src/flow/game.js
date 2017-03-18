import ask from 'readline-sync';
import getUserName from '..';

const showWinMessage = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

const showWrongMessage = (userName, userAnswer, answer) => {
  console.log(`'${userAnswer}' is wrong answer. Correct answer was '${answer}'\n Let's try again ${userName}!`);
};

const showRightMessage = () => {
  console.log(' Correct!\n');
};

const attemptsCount = 3;

const startRound = (attempt, userName, gameCond) => {
  if (attempt === 0) {
    showWinMessage(userName);
    return;
  }
  const questAnswer = gameCond.getQuestAnswer();
  const userAnswer = ask.question(` Question: ${questAnswer.question}\n Your answer: `);
  if (userAnswer !== questAnswer.answer) {
    showWrongMessage(userName, userAnswer, questAnswer.answer);
    return;
  }
  showRightMessage();
  startRound(attempt - 1, userName, gameCond);
};

export default (gameCond) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameCond.rule, '\n');
  const userName = getUserName();
  startRound(attemptsCount, userName, gameCond);
};
