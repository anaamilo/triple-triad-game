function Rules () {
  this.turn = 0;
}

Rules.prototype.check = function(pos, card, board) {
  //Check if there are any adjacent cards to thrown card
  switch(pos){
    var dir;
    var dirValue = dir.value;
    var coordX = card.position.x;
     var coordY = card.position.y;
    case 'top':
      dir = board[coordX][coordY - 1];
      return dir && dirValue.top;
      break;
    case 'right':
      dir = board[coordX + 1][coordY];
      return dir && dirValue.right;
      break;
    case 'bottom':
      dir = board[coordX][coordY + 1];
      return dir && dirValue.bottom;
      break;
    case 'left':
      dir = board[coordX - 1][coordY];
      return dir && dirValue.left;
      break;
  }
}

Rules.prototype.isSameColor = function(){
  //return Card.color == Player.color;
  //Check if adjoining cards have the same color (are already owned by current player)
}

Rules.prototype.isHigherValue = function(){
  //cardsArray.forEach(function(i){
  //  var pos = cardsArray[i].position;
  //  switch (pos){
  //    case 'top':
  //      compare top & bottom;
  // }
  //});
  //Check if adjoining cards have any higher value on opposite sides
}


Rules.prototype.switchTurn = function() {
  this.turn == 1 ? this.turn = 0 : this.turn = 1;
}
