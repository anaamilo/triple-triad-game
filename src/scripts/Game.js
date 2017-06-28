var board = new Board();
var player1 = new Player("red");
var player2 = new Player("blue");

function getRandomValue(min=1, max=6) {
  return Math.floor(Math.random() * ((max + 1) - min) + min);
}

function Game () {
  this.players = [player1, player2];
  this.cardsByPlayer = 5;

  this.startGame();
}

Game.prototype.createCards = function() {
  var cardsArray = [];
  for(var i=0; i<this.cardsByPlayer*this.players.length; i++){
    cardsArray.push(new Card(getRandomValue(), getRandomValue(), getRandomValue(), getRandomValue()));
  }
  return cardsArray;
}

Game.prototype.setDecks = function() {
  var newArray = _.chunk(this.createCards(),this.cardsByPlayer);
  for(var i=0; i<newArray.length; i++){
    this.players[i].deck = newArray[i];
  }
}

Game.prototype.startGame = function() {
  this.resetScore();
  board.setGrid();
  this.setDecks();
}

Game.prototype.updateCards = function() {
 //Update cards color
 //Empty used cards spaces
 //Update score
}

Game.prototype.countCards = function() {
  //Check cards on board
  //Check cards on deck
  //Sum up board cards + deck cards by player
}

Game.prototype.updateScore = function() {
 //Count each player's cards
 //Add new result to each score
}

Game.prototype.resetScore = function() {
  for (var i=0; i<this.players.length; i++){
    this.players[i].score = 5;
  }
}
