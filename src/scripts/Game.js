player1 = new Player("red");
player2 = new Player("blue");

function Game () {
  this.players = [player1, player2];
  this.cardsByPlayer = 5;
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
  return _.shuffle(cardsArray);
}

Game.prototype.setDecks = function() {
  var newArray = _.chunk(this.setCards(),this.cardsByPlayer);
  for(var i=0; i<newArray.length; i++){
    this.players[i].deck = newArray[i];
  }
}

Game.prototype.playCard = function(player, card, pos) {
  board.placeCard(card, pos);
  player.takeCard(card);
}

function getRandomValue(min=1, max=6) {
  return Math.floor(Math.random() * ((max + 1) - min) + min);
}

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var game;

$(document).ready(function(){
  game = new Game();
  board = new Board();

  var html = '';
  board.setGrid();
  game.setDecks();

  var card1 = new Card({color: 'red', top: 1, right: 3, bottom: 7, left: 1});


  var grid = board.grid;

  player1.deck.forEach(function(card, index) {
    html += '<div class="card pink" id="player1_card_' + index + '">';
    html +=   '<span class="top">'+ card.top + '</span>';
    html +=   '<span class="right">'+ card.right + '</span>';
    html +=   '<span class="bottom">'+ card.bottom + '</span>';
    html +=   '<span class="left">'+ card.left + '</span>';
    html += '</div>';
  });

  player2.deck.forEach(function(card, index) {
    html += '<div class="card green" id="player2_card_' + index + '">';
    html +=   '<span class="top">'+ card.top + '</span>';
    html +=   '<span class="right">'+ card.right + '</span>';
    html +=   '<span class="bottom">'+ card.bottom + '</span>';
    html +=   '<span class="left">'+ card.left + '</span>';
    html += '</div>';
  });

  for(var i = 0; i < grid.length; i++) {
    var row = grid[i];
    for(var j = 0; j < row.length; j++) {
      html += '<div class="cell">';
      html += '</div>';
    }
  }

  document.getElementById('main-wrapper').innerHTML = html;
  $(".card").click(function(){
    console.log("card clicked!");
    var selectedCard = $(this).attr("id");
    console.log(selectedCard);
    $(this).siblings().removeClass("selected-card");
    $(this).addClass("selected-card");
  });
  $(".cell").click(function(){
    if($(".selected-card")[0]){
      board.placeCard(card1, [0, 1]);
    }
  })

});
