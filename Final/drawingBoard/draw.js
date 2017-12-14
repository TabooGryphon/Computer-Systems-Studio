function Draw() {
  this.x = mouseX;
  this.y = mouseY;
  this.size = 5
  this.x1 = this.x;
  this.y1 = this.y;


  this.mouse = function() {
    push();
    fill('yellow');
    noStroke();
    ellipse(mouseX, mouseY, this.size, this.size);
    pop();
  }
  this.display = function() {
    push();
    fill('yellow');
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
    pop();
  }
}