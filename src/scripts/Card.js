function Card (values) {
  this.top = values.top;
  this.right = values.right;
  this.bottom = values.bottom;
  this.left = values.left;
  this.color = values.color;
}

Card.prototype.changeColor = function() {
  this.color == "red" ? this.color = "blue" : this.color = "red";
}
