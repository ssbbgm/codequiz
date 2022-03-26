let saveScore = document.getElementById('saveScore');
let initials = document.getElementById('initials');

saveScore.addEventListener("click", function(event) {
    event.preventDefault();
  
    var playerInitials = initials.value;
    var score = localStorage.getItem('score');

    var playerStatus = {
        initials: playerInitials,
        score: score
    }

    var previousScores = JSON.parse(localStorage.getItem('previousScores')) || [];

    previousScores.push(playerStatus);

    localStorage.setItem('previousScores', JSON.stringify(previousScores));


  
  });