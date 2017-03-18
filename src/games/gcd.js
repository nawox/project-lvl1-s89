import startGame from '../flow/game';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  if (x <= 0 || y <= 0) {
    return x + y;
  }
  if (x > y) {
    return getGcd(x % y, y);
  }
  return getGcd(x, y % x);
};

const getQuest = () => {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const struct = {
    question: `${number1} ${number2}`,
    answer: String(getGcd(number1, number2)),
  };

  return struct;
};

export default () => {
  const gameCond = {
    getQuestAnswer: getQuest,
    rule: gameRule,
  };
  startGame(gameCond);
};
