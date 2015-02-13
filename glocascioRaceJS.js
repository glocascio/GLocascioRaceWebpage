<script>

var userBet = prompt("Place your bet! Who do you expect to win: rabbit, turtle, duck?");

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
var duck = new Animal("Professor Quackingtons",5,5);
var winner

while(turtle.notYetWon() && rabbit.notYetWon() && duck.notYetWon()) {
  turtle.run();
  rabbit.run();
  duck.run();
}

console.log(turtle.report());
console.log(rabbit.report());
console.log(duck.report());

if (turtle.position>rabbit.position) {
  alert(turtle.name + " has won! Slow and steady proves victorious, but he should really think about retiring.");
  winner=("turtle");
}else if (turtle.position<rabbit.position) {
  alert(rabbit.name + " is the winner! His ADHD medication must be helping.");
  winner=("rabbit");
}else{ 
  alert(duck.name + " won the race! Did somebody leave a breadcrum trail?");
  winner=("duck");
};

if (userBet==winner) {
  alert("You have the winning bet! You win one steamy bucket of internet, hot off the presses.");
}else{
  alert("You didn't win the bet. Don't visit Vegas.")
};


</script>