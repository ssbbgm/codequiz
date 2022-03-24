// DOM elements

let timerEl = document.querySelector('#time');
let startBtn = document.querySelector('#start');
let scoreEl = document.querySelector('#score');
let quizScreen = document.querySelector('#quiz-box');
const questionsEl = document.querySelector('#questions');
const choices = Array.from(document.querySelectorAll('.choice-text'));
let initialSubmit = document.querySelector('#intials');
let submitBtn = document.querySelector('#submit');
let feedbackEl = document.querySelector('#feedback');

console.log(choices);

let currentQuestions = {};
let acceptingAnsers = true;
let score = 0;
let availableQuestions = [];




//Creating the time function

function countdown (){

let totalTime = questions.length * 15;

var timeLeft = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (totalTime >= 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = totalTime;
      // Decrement `timeLeft` by 1
      totalTime--;
    } else {
      // Use `clearInterval()` to stop the timer
      clearInterval(timeLeft);
    }
  }, 1000);

}

//Code to start the game

startBtn.addEventListener("click", startGame);

function startGame (event) {
    event.preventDefault();
    document.getElementById("start-page").style.display = 'none';
    quizScreen.classList.remove('hide');
    availableQuestions = [...questions];
    countdown();
}

startGame();