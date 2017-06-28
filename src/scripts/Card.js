function Card (top, right, bottom, left) {
  this.color = "red";
  this.position = {x: 0, y: 0};
  this.values = {
    top: top,
    right: right,
    bottom: bottom,
    left: left
  };
}

Card.prototype.changeColor = function() {
  // adjoiningCards.forEach(function(i) {
  //   if(i.isHigherValue()){
  //     this.color == "red" ? "blue" : "red";
  //   }
  // });
}
