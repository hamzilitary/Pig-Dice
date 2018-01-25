function Names(name1, name2) {
  this.name1 = name1;
  this.name2 = name2;
}

function Player() {
  var turnScore = 0;
  var gameScore = 0;
  var isActive = false;
  this.turnScore = turnScore;
  this.gameScore = gameScore;
  this.isActive = isActive;
}

var pigGame = {
  player1Score: 0,
  player2Score: 0,
  playerUp: 1,
  turnScore: 0,
};

var randomDie = randomNumber();

function randomNumber() {
    randomDie = Math.floor(6*Math.random())+1;

    return randomDie;
};

var initializeGame = function() {
  player1 = new Player();
  player2 = new Player();
  player1.isActive = true;
}

var switchPlayer = function() {
  if (player1.isActive === true) {
    player1.isActive = false;
    player2.isActive = true;
    turnScoreReset();
  } else {
    player2.isActive = false;
    player1.isActive = true;
    turnScoreReset();
  }
}

var turnScoreReset = function() {
  player1.turnScore = 0;
  player2.turnScore = 0;
}

var whichPlayerRoll = function() {
  if (player1.isActive === true) {
    playerRoll(player1);
  } else {
    playerRoll(player2);
  }
}

var playerRoll = function(player) {
  var roll = randomDie;
  if(roll === 1){
    player.turnScore = 0;
    switchPlayer();
  } else {
    player.turnScore += roll;
  }
  console.log(player);
  checkForEndOfGame();
  return roll;
}

var whichPlayerHold = function() {
  if (player1.isActive === true) {
    playerHold(player1);
  } else {
    playerHold(player2);
  }
}

var playerHold = function(player) {
  player.gameScore += player.turnScore;
  switchPlayer();
}

var checkForEndOfGame = function() {
  if (player1.gameScore >= 100 || player2.gameScore >= 100) {
    if (player1.gameScore > player2. gameScore) {
      alert("End of game! Player 1 won!");
    } else if (player1.gameScore < player2. gameScore) {
      alert("End of game! Player 2 won!");
    } else {
      alert("End of game! Tie!");
    }
  }
}

$(document).ready(function(){
  //var die1 = new Die();
  //die1.roll();

  initializeGame();

  console.log(player1, player2);
  $("button#roll").click(function(event) {
    // var generatedRandomNumber = randomNumber();
    //console.log(randomNumber());
    $("#rolledNumber").append("<li><span class='roundScore'>" + randomDie + "</span></li>");
    $(".results").html('<img src=img/die'+ randomDie +'.jpg>');
    whichPlayerRoll();
    // if (generatedRandomNumber == 1) {
    //   alert("Switch Players");
    // }
    //randomNumber()
    var roundScore = roundScore + randomNumber();
    event.preventDefault();

    //console.log(die1.face);
  })

  $("button#hold").click(function(event) {
    event.preventDefault();
    whichPlayerHold();
    console.log(player1,player2);
  })

})
//console.log(randomNumber);
