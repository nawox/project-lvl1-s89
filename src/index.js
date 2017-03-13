import readline from 'readline-sync';

export default () => {
  const userName = readline.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
