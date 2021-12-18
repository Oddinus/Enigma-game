'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //no input
  if (!guess) {
    displayMessage('🛑 Type number!');

    //win
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct, you won! 😎');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('body').style.backgroundImage = 'none';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //wrong guess
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 Game over!');
      displayScore(0);
    }
  }
});

//again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundImage =
    "url('tlo-enigma.jpg')";
  document.querySelector('.number').style.width = '15rem';
});
