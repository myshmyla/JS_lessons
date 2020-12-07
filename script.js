'use strict';
let f1 = function () {
  let randomNum = parseInt(Math.random() * 100);
  console.log(randomNum);

  function guessNumber(userNum) {
    userNum = prompt('Угадай число от 1 до 100');

    if (isNaN(userNum)) {
      alert('Введи число!');
      guessNumber(userNum);
    }

    if (userNum === null) {
      confirm('Игра окончена');
      return;
    }

    if (userNum == randomNum) {
      alert('Поздравляю, Вы угадали!!!');
      return;
    } else if (userNum > randomNum) {
      alert('Загаданное число меньше');
      guessNumber(userNum);
    } else if (userNum < randomNum) {
      alert('Загаданное число больше');
      guessNumber(userNum);
    }
  }
  guessNumber();
};

f1();
