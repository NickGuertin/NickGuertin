var roundCounter = 0;
var userWins = "You Win!";
var computerWins = "The Computer Wins";


var gameRound = function(){
    var userChoice = prompt("Choose Rock, Paper, or Sissors by typing 'R', 'P', or 'S'");
    var rng = Math.random();
    var computerChoice = "R";
    if(rng > 0.66) {
      computerChoice = "P";
    } else if (rng > 0.33) {
      computerChoice = "S";
    }
    if(computerChoice !== userChoice){
      if(computerChoice === "R"){
        if (userChoice === "S") {
          alert(computerWins);
        } else{
          alert(userWins);
        }
      } else if (computerChoice === "P") {
        if(userChoice === "R") {
          alert(computerWins);
        }else {
          alert(userWins);
        }
      } else if (computerChoice === "S"){
        if(userChoice === "P"){
          alert(computerWins);
        }else {
          alert(userWins);
        }
      }
    } else {
      alert('Tie!');
    }
};
while (roundCounter < 3) {
  gameRound();
  roundCounter++;
}
