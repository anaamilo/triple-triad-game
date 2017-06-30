function Card (values) {
  // this.color = "red";
  // this.position = {x: 0, y: 0};
  this.top = values.top;
  this.right = values.right;
  this.bottom = values.bottom;
  this.left = values.left;
  this.color = values.color;
}

Card.prototype.changeColor = function() {
  this.color == "red" ? this.color = "blue" : this.color = "red";
}

var board = new Board();
var card1 = new Card({color: 'red', top: 1, right: 3, bottom: 7, left: 1});
var card2 = new Card({color: 'blue', top: 2, right: 0, bottom: 3, left: 4});
var card3 = new Card({color: 'red', top: 3, right: 1, bottom: 4, left: 7});
var card4 = new Card({color: 'blue', top: 4, right: 2, bottom: 2, left: 2});
var card5 = new Card({color: 'red', top: 5, right: 3, bottom: 4, left: 7});
var card6 = new Card({color: 'blue', top: 6, right: 5, bottom: 1, left: 4});
var card7 = new Card({color: 'red', top: 7, right: 3, bottom: 4, left: 7});
var card8 = new Card({color: 'blue', top: 4, right: 2, bottom: 2, left: 4});
var card9 = new Card({color: 'red', top: 2, right: 3, bottom: 4, left: 2});
var deck = [];
deck.push(card1, card2, card3, card4, card5, card6, card7, card8, card9);

// deck.forEach(function(key, i) {  
//   function askPos(param = '') {
//     var place = prompt(param + 'dime la position separada por un espacio, eg: 1 2');
//     place = place.split(' ');
//     if (board.placeCard(key, place)) {
//       askPos('[ERROR]: ');
//     }
//   }
  
//   askPos();
// });
