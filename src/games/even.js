import startGame from '../flow/game';

const gameRule = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const getQuest = () => {
  const number = Math.floor(Math.random() * 100);
  const struct = {
    question: number,
    answer: isEven(number) ? 'yes' : 'no',
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
