var board = new Board();
var player1 = new Player("red");
var player2 = new Player("blue");

function Game () {
  this.players = [player1, player2];
  this.cardsByPlayer = 5;

  this.startGame();
}

Game.prototype.setCards = function() {
  var cardsArray = [];
  for(var i=0; i<this.cardsByPlayer*this.players.length; i++){
    cardsArray.push(new Card({
      top: getRandomValue(),
      right: getRandomValue(),
      bottom: getRandomValue(),
      left: getRandomValue()
    }));
  }
  return cardsArray;
}

Game.prototype.setDecks = function() {
  var newArray = _.chunk(this.setCards(),this.cardsByPlayer);
  for(var i=0; i<newArray.length; i++){
    this.players[i].deck = newArray[i];
  }
}

Game.prototype.startGame = function() {
  this.resetScore();
  board.setGrid();
  this.setDecks();
}

Game.prototype.playCard = function(player, card, pos) {
  board.placeCard(card, pos);
  player.takeCard(card);
}

function getRandomValue(min=1, max=6) {
  return Math.floor(Math.random() * ((max + 1) - min) + min);
}
