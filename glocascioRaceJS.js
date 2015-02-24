$('#startRace').on('click', function() { 
  var userBet = $('#pick').val();

  var Animal = function(n, s, f) {
    this.name = n;
    this.speed=s;
    this.focus=f;
    this.position = 0;
    this.report = function(){
      return this.name + " is at " + this.position;
    };
    this.run = function(){
      if (this.focus>(Math.random()*10)){
        this.position+=this.speed;
      }
    };
    this.notYetWon = function() {
      var distance = 50;
      return this.position<distance
    }
  }

  var turtle = new Animal("Mitch McConnell",2,8.5);
  var rabbit = new Animal("Bunsauce Hoppalong",8,2);
  var duck = new Animal("Professor Quackingtons",4,4);
  var winner

  while(turtle.notYetWon() && rabbit.notYetWon() && duck.notYetWon()) {
    turtle.run();
    rabbit.run();
    duck.run();
  }

  console.log(turtle.report());
  console.log(rabbit.report());
  console.log(duck.report());

  if (turtle.position > rabbit.position && turtle.position > duck.position) {
    winner=("turtle");
  }else if (rabbit.position > turtle.position && rabbit.position > duck.position) {
    winner=("rabbit");
  }else{ 
    winner=("duck");
  };

  if (userBet==winner) {
    alert("You have the winning bet! You win one steamy bucket of internet, hot off the presses.");
  }else{
    alert("You didn't win the bet. Don't visit Vegas.")
  };

  $('.racer').fadeOut();
  $('#' + winner).stop();
});

