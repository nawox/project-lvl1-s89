import startGame from '../flow/game';

const gameRule = 'What is the result of the expression?';

const getExpression = (num1, num2) => {
  const rand = Math.floor(Math.random() * 10) % 3;
  switch (rand) {
    case 0: {
      const expression = {
        string: `${num1} + ${num2}`,
        result: num1 + num2,
      };
      return expression;
    }

    case 1: {
      const expression = {
        string: `${num1} - ${num2}`,
        result: num1 - num2,
      };
      return expression;
    }

    case 2: {
      const expression = {
        string: `${num1} * ${num2}`,
        result: num1 * num2,
      };
      return expression;
    }

    default: {
      return;
    }
  }
};

const getQuest = () => {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const expression = getExpression(number1, number2);
  const struct = {
    question: expression.string,
    answer: String(expression.result),
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
