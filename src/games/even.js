
const gameRule = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

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
  return gameCond;
};
