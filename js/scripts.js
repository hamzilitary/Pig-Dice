
function randomNumber() {
    var randomDie = Math.floor(6*Math.random())+1;

    return randomDie;
};
  //for (x = 0;x<generatedRandomNumber)


//
// }
$(document).ready(function(){
  //var die1 = new Die();
  //die1.roll();

  $("button").click(function() {
    //console.log(randomNumber());
    var generatedRandomNumber = randomNumber();
    $("#rolledNumber").append("<li><span class='roundScore'>" + generatedRandomNumber + "</span></li>");
    $(".results").html('<img src=img/die'+generatedRandomNumber+'.jpg>');
    if (generatedRandomNumber == 1) {
      alert("Switch Players")
    }
    //randomNumber()
    var roundScore = roundScore + randomNumber();
    event.preventDefault();

    //console.log(die1.face);
  })

})
//console.log(randomNumber);
