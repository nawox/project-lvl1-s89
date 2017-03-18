import startGame from '../flow/game';

const gameRule = 'Answer "yes" if number is prime otherwise answer "no".';

const isPrime = (number) => {
  const iteration = (item) => {
    if (item === 1) {
      return true;
    } else if (number % item === 0) {
      return false;
    }
    return iteration(item - 1);
  };
  return iteration(Math.floor(Math.sqrt(number)));
};

const getQuest = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const struct = {
    question: number,
    answer: isPrime(number) ? 'yes' : 'no',
  };
  return struct;
};

export default () => {
  const gameCond = {
    rule: gameRule,
    getQuestAnswer: getQuest,
  };
  startGame(gameCond);
};
