const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display')
}
const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#resetButton');
const scoreBoard = document.querySelector('#winScoreSelect');

let winScore = 5;
let isGameSet = false;

const reset = function () {
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.innerText = p1.score;
    p.display.classList.remove("winner","loser");
    p.button.disabled = false;
  }
  isGameSet = false;
}

function updateScores(player, opponent){
  if(!isGameSet){
    player.score ++;
    player.display.innerText = player.score;
    if(player.score === winScore){
      isGameSet = true;
      player.display.classList.add("winner");
      opponent.display.classList.add("loser");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
  }
}

p1Button.addEventListener("click", function(){
  updateScores(p1, p2);
});

p2Button.addEventListener("click", function(){
  updateScores(p2, p1);
});

resetButton.addEventListener("click", reset);

scoreBoard.addEventListener("change", function(){
  winScore = parseInt(this.value);
  reset();
})


