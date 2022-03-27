let saveScore = document.getElementById("saveScore");
let initials = document.getElementById("initials");
let clearScores = document.getElementById("clear");
document.getElementById("high-scores-initials").innerHTML = "none";
document.getElementById("high-scores").innerHTML = "0";

saveScore.addEventListener("click", function (event) {
  event.preventDefault();
  var playerInitials = initials.value;
  var score = localStorage.getItem("score");

  var playerStatus = {
    initials: playerInitials,
    score: score,
  };

  var previousScores = JSON.parse(localStorage.getItem("previousScores")) || [];

  previousScores.push(playerStatus);

  localStorage.setItem("previousScores", JSON.stringify(previousScores));
  loadScores();
});

function loadScores() {
  var max = 0;
  var initial = "";
  var highScores = JSON.parse(localStorage.getItem("previousScores"));
  console.log(highScores);
  highScores.forEach((element) => {
    if (parseInt(element.score) >= max) {
      max = element.score;
      initial = element.initials;
      document.getElementById("high-scores-initials").innerHTML = initial;
      document.getElementById("high-scores").innerHTML = max;
    }

    clearScores.addEventListener('click', function(){
        window.localStorage.removeItem('initials');
        window.localStorage.removeItem('score');
        window.localStorage.removeItem('previousScores')
        document.getElementById("high-scores-initials").innerHTML = "none";
        document.getElementById("high-scores").innerHTML = "0";
    });

  });
}

loadScores();

