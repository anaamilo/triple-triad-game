function Board (width = 3, height = 3) {
  this.width = width;
  this.height = height;

  this.grid = this.setGrid();
  this.isFull();
}

Board.prototype.setGrid = function() {
  return Array.apply(null, Array(this.width)).map(e => Array(this.height));
}

// Board.prototype.cellIsEmpty = function(x, y) {
//   return this.grid[x][y] === 0;
// }

Board.prototype.isFull = function() {
  return _.compact(_.flatten(this.grid)).length == this.grid.length;
  // print winner
  // end game
}
