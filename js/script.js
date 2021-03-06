// DOM elements

let startBtn = document.querySelector('#start');
let scoreEl = document.querySelector('#score');
let quizScreen = document.querySelector('#quiz-box');
let questionEl = document.getElementById('#question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
let answerEl = document.querySelector('#answerStatus');

console.log(choices);

//Question List
let questions = [
  {
      question: "Inside the HTML document, where do you place your JavaScript code?",
      choice1: "Inside the <head> element",
      choice2: "Inside the <script> element",
      choice3: "Inside the <link> element", 
      choice4: "In the <footer> element",
      answer: 2
  },
  {
      question: "What operator is used to assign a value to a declared variable?",
      choice1: "Question mark (?)", 
      choice2: "Colon (:)", 
      choice3: "Equal sign (=)", 
      choice4: "Double-equal (==)",
      answer: 3
  },
  
  {
      question: "What are the six primitive data types in JavaScript?",
      choice1: "string, num, falsy, bigInt, symbol, undefined",
      choice2: "sentence, int, truthy, bigInt, symbol, undefined", 
      choice3: "string, number, boolean, bigInt, symbol, undefined", 
      choice4: "sentence, float, data, bigInt, symbol, undefined",
      answer: 3
  },
  
  {
      question: "How do we declare a conditional statement in JavaScript?",
      choice1: "if...else", 
      choice2: "difference...between", 
      choice3: "for loop", 
      choice4: "while loop",
      answer: 1
  },
  
  {
      question: "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']",
      choice1: "0", 
      choice2: "1", 
      choice3: "2",
      choice4: "3",
      answer: 2
  },
  
  {
      question: "What are the two types of scope JavaScript uses?",
      choice1: "Outside and Inside", 
      choice2: "Abroad and Local", 
      choice3: "Surrounding and Inner", 
      choice4: "Global and Local",
      answer: 4
  },
  
  {
      question: "How do we access a value stored in an object?",
      choice1: "Period notation, Square bracket notation",
      choice2: "Dot notation, Bracket notation", 
      choice3: "Equal notation, Abstract notation", 
      choice4:"Dot notation, Curl bracket notation",
      answer: 4
  },
  
  {
      question: "What is an object method?",
      choice1: "A function associated with an object", 
      choice2: "A function that takes an object for an argument", 
      choice3: "Keys in an object that have a number assigned to it", 
      choice4: "An array saved inside of an object",
      answer: 2
  },
  
  {
      question: "Arrays in JavaScript can be used to store ____.",
      choice1: "numbers and strings", 
      choice2: "other arrays", 
      choice3: "booleans", 
      choice4: "all of the above",
      answer: 4
    },
  
    {
      question: "String values must be enclosed within ____ when being assigned to variables.",
      choice1: "commas",
      choice2: "curly brackets", 
      choice3: "quotes", 
      choice4:"parentheses",
      answer: 3
    },
  
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choice1: "JavaScript", 
      choice2: "terminal / bash", 
      choice3: "for loops", 
      choice4: "console.log",
      answer: 4
    },
    {
      question: "What is the type of Pop up boxes available in JavaScript?",
      choice1: "Alert",
      choice2: "Confirm", 
      choice3: "Prompt", 
      choice4: "All the above",
      answer: 4
    }
  ];
//End of Question List

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let totalTime = questions.length * 15;


//Creating the time function

function countdown () {

var timeLeft = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (totalTime >= 0) {
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
    getNewQuestion();
    countdown();
}

//Code to get the questions
function getNewQuestion () {
  if (availableQuestions.length === 0 || questionCounter > acceptingAnswers.length) {
    localStorage.setItem("score", score);
    return window.location.assign('./scores.html');
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;

};

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if(!acceptingAnswers) return;

    acceptingAnswers = false;

    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];

   
      if (selectedAnswer == currentQuestion.answer) {
        answerEl.textContent = 'Correct';
        answerEl.style.color =  'chartreuse';
        answerEl.style.fontSize = '200%';
        score += 10;
    
      } else {
      answerEl.textContent = 'Incorrect';
      answerEl.style.color =  'crimson';
      answerEl.style.fontSize = '200%';
      totalTime-= 10;
      }
     
      answerEl.removeAttribute('class');

      setTimeout(function() {
        answerEl.setAttribute("class", "hide");
        getNewQuestion();
      }, 1000);

  });
});

let highScores = document.getElementById('#high-scores')
let initials = document.getElementById('#initials');
let save = document.getElementById('#saveScore');


function getScores() {
  var playerInitials = localStorage.getItem("initials");
  var highScores = localStorage.getItem("high-scores"); 

  if (!playerInitials) {
    return;
  }

  initials.textContent = initials;
  highScores.textContent = highScores;
}

save.addEventListener("click", function(event) {
  event.preventDefault();

  var playerInitials = document.querySelector("#initials").value;
  localStorage.setItem("initials", playerInitials); 
  localStorage.setItem('high-scores', scores)
  getScores();

});



startGame();