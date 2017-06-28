function Player (name, deck) {
  this.name = name;
  this.initialScore = 5;
  this.deck = deck;
}

Player.prototype.placeCard = function(pos, card, board) {
  //   return this.cellIsEmpty ? this.grid[x][y] = player1card1 : console.log("stop it!");
  this.grid[pos[0]][pos[1]] = card;
}
