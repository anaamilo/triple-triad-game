function Board(width = 3, height = 3) {
  this.width = width;
  this.height = height;

  this.grid = this.setGrid();
}

Board.prototype.setGrid = function() {
  return Array.apply(null, Array(this.width)).map(e => Array(this.height));
}

Board.prototype.placeCard = function(card, pos) {
  return this.grid[pos[0]][pos[1]] ? false : this.grid[pos[0]][pos[1]] = card;
}
