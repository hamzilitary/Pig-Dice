function randomNumber() {
    var randomDie = Math.floor(6*Math.random())+1;
    //turn.face = "dice/" + randomDie + ".jpg";
    return randomDie;
};


function Die() {
  /*var turn = this;
  this.face;
  this.roll = function () {
    var randomDie = Math.floor(6*Math.random())+1;
    turn.face = "dice/" + randomDie + ".jpg";
    return randomDie;


  };*/
};
$(document).ready(function(){
  //var die1 = new Die();
  //die1.roll();

  $("button").click(function() {
    $(".results").html('<img src=img/die'+randomNumber()+'.jpg>');
    event.preventDefault();
    //console.log(die1.face);
  })

})
