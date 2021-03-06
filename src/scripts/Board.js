function Board(width = 3, height = 3) {
  this.width = width;
  this.height = height;

  this.grid = this.setGrid();
  this.renderBoard();
}

Board.prototype.setGrid = function() {
  return Array.apply(null, Array(this.width)).map(e => Array(this.height));
}

Board.prototype.placeCard = function(card, pos) {
  return this.grid[pos[0]][pos[1]] ? false : this.setRules(card, pos);
}

Board.prototype.setRules = function(card, pos) {
  this.grid[pos[0]][pos[1]] = card;
  
  this.renderBoard();
  console.log("after render");
  this.checkBigger(card, pos);
  console.log("it checks!");
}

Board.prototype.checkBigger = function(card, pos) {
  alert(pos[0]+pos[1]);
  if (pos[1] != 0) {
    console.log('check up');
    this.checkPos(parseInt(pos[0]), parseInt(pos[1]) - 1, card.top, 'bottom', card.color);
  }
  if (pos[1] != this.height - 1) {
    console.log('check down');
    this.checkPos(parseInt(pos[0]), parseInt(pos[1]) + 1, card.bottom, 'top', card.color);
  }
  if (pos[0] != 0) {
    console.log('check left');
    this.checkPos(parseInt(pos[0]) - 1, parseInt(pos[1]), card.left, 'right', card.color);
  }
  if (pos[0] != this.width - 1) {
    console.log('check right');
    this.checkPos(parseInt(pos[0]) + 1, parseInt(pos[1]), card.right, 'left', card.color);
  }
}

Board.prototype.checkPos = function(x, y, value, side, color) {
  var currentPos = this.grid[x][y];
  if (currentPos) {
    switch(side) {
      case "top":
        if (currentPos.top < value) {
          $('.cell-' + x + y)
            .removeClass('red blue')
            .addClass(color);
        }
        break;
       case "right":
        if (currentPos.right < value) {
          $('.cell-' + x + y)
            .removeClass('red blue')
            .addClass(color);
        }
        break;
       case "bottom":
        if (currentPos.bottom < value) {
          $('.cell-' + x + y)
            .removeClass('red blue')
            .addClass(color);
        }
        break;
       case "left":
        if (currentPos.left < value) {
          $('.cell-' + x + y)
            .removeClass('red blue')
            .addClass(color);
        }
        break;
    }
  }
}

Board.prototype.renderBoard = function() {
  for (var i = 0; i < this.grid.length ; i++) {
    for (var j = 0; j < this.grid.length ; j++) {
      console.log(this.grid);
    }
  }
}
