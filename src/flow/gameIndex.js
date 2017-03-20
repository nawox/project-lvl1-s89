import readlineSync from 'readline-sync';
import even from '../games/even';
import calc from '../games/calc';
import gcd from '../games/gcd';
import balance from '../games/balance';
import progression from '../games/progression';
import prime from '../games/prime';

const games = {
  Even: even,
  Calculate: calc,
  GCD: gcd,
  Balance: balance,
  Progression: progression,
  Prime: prime,
};

export default () => {
  const gamesList = ['Even', 'Calculate', 'GCD', 'Balance', 'Progression', 'Prime'];
  const index = readlineSync.keyInSelect(gamesList, 'Choise the game');
  if (index === -1) {
    return;
  }
  const startGame = games[gamesList[index]];
  startGame();
};
