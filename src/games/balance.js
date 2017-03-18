import startGame from '../flow/game';

const gameRule = 'Find the greatest common divisor of given numbers.';

const balanceNumber = (x) => {
  const numberArray = String(x).split('');
  const sum = numberArray.reduce((acc, item) => acc + Number(item), 0);
  const mod = sum % numberArray.length;
  const averageArray = Array(numberArray.length).fill(Math.floor(sum / numberArray.length));
  if (mod === 0) {
    return averageArray.join('');
  }
  const [first, rest] = [averageArray.slice(0, averageArray.length - mod), averageArray.slice(-mod)];
  const resultArray = [...first, ...rest.map(item => item + 1)];
  return resultArray.join('');
};

const getQuest = () => {
  const number = Math.floor(Math.random() * 10000);
  const struct = {
    question: number,
    answer: String(balanceNumber(number)),
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

