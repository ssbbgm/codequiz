// DOM elements

let timerEl = document.querySelector('#time');
let startBtn = document.querySelector('#start');
let questionsEl = document.querySelector('#questions');
let choicesEl = document.querySelector('#choices');
let initialSubmit = document.querySelector('#intials');
let submitBtn = document.querySelector('submit');
let feedbackEl = document.querySelector('#feedback');


startBtn.addEventListener("onclick", startQuiz);

function startQuiz () {
    let startPageEl = document.getElementById("#start-page");
    
    startPageEl.setAttribute("class", "hide");

    startPageEl.setAttribute("style", "display:none");

    questionsEl.removeAttribute("class");

    timerID = setInterval(startTime, 1000);

    timerEl.textContent = time;

}

