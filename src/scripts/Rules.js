function Rules () {
  this.turn = 0;
}

Rules.prototype.check = function(pos, card, board) {
  var dir = 0;
  var dirValue = dir.value;
  var coordX = card.position.x;
  var coordY = card.position.y;
  switch(pos){
    case 'top':
      dir = board[coordX][coordY - 1];
      return dir && dirValue.top;
      console.log(dir && dirValue.top);
      break;
    case 'right':
      dir = board[coordX + 1][coordY];
      return dir && dirValue.right;
      console.log(dir && dirValue.right);
      break;
    case 'bottom':
      dir = board[coordX][coordY + 1];
      return dir && dirValue.bottom;
      console.log(dir && dirValue.bottom);
      break;
    case 'left':
      dir = board[coordX - 1][coordY];
      return dir && dirValue.left;
      console.log(dir && dirValue.left);
      break;
  }
}

Rules.prototype.isSameColor = function(card, player){
  return card.color == player.color;
}

Rules.prototype.switchTurn = function() {
  this.turn == "blue" ? this.turn = "red" : this.turn = "blue";
}
