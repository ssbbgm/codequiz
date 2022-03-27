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

    var highScores = JSON.parse(localStorage.getItem('previousScores'));
    var scoreDiv = document.getElementById('high-scores');
    var max = 0;
    var initial = "";

    highScores.forEach(score => {
        if(score.score >= max) {
            max=score.score;
            initial = score.initials;
            document.getElementById('high-scores-initials').innerHTML = initial;
            document.getElementById('high-scores').innerHTML = max;
        }
       
    });
   
   

  });

