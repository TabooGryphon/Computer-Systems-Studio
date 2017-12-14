function Ship() {
  this.x = width / 2;
  this.y = 762.5;
  this.img = spaceship;

  this.display = function() {
    push();
    imageMode(CENTER);
    image(this.img, this.x, this.y);
    pop();
  }

  this.move = function() {
    this.x = constrain(mouseX, 5, 695);
    this.y = constrain(mouseY, 650, 875);
  }
}