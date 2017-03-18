import startGame from '../flow/game';

const gameRule = 'What number is missing in this progression?';

const createSequence = (acc, item, length, step) => {
  if (length === 0) {
    return acc;
  }
  const newItem = item + step;
  return createSequence([...acc, newItem], newItem, length - 1, step);
};

const getAnswer = (begin, step) => {
  const sequenceLength = 10;
  const position = Math.floor(Math.random() * 10);
  const sequence = createSequence([begin], begin, sequenceLength, step);
  const answer = sequence[position];
  sequence[position] = '..';
  const question = sequence.join(' ');
  return [question, answer];
};

const getQuest = () => {
  const begin = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 10);
  const [quest, ans] = getAnswer(begin, step);
  const struct = {
    question: quest,
    answer: String(ans),
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
