function Player (name, deck) {
  this.name = name;
  this.initialScore = 5;
  this.deck = deck;
}

Player.prototype.takeCard = function(card) {
  this.deck.splice(this.deck.indexOf(card), 1);
}

Player.prototype.canPlay = function(turn) {
  return turn == this.name;
}
