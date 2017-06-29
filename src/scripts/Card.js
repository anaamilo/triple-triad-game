function Card (values) {
  // this.color = "red";
  // this.position = {x: 0, y: 0};
  this.top = values.top;
  this.right = values.right;
  this.bottom = values.bottom;
  this.left = values.left;
}

Card.prototype.changeColor = function() {
  this.color == "red" ? this.color = "blue" : this.color = "red";
}
