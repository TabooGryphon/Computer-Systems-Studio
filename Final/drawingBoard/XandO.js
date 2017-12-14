function Offense(x, y) {
  this.x = x;
  this.y = y;
  this.h = height * 0.02;
  this.w = height * 0.015;

  this.mouse = function() {
    push();
    strokeWeight(4);
    stroke('black');
    noFill();
    ellipse(mouseX, mouseY, this.w, this.h);
    pop();
  }

  this.display = function() {
    push();
    strokeWeight(4);
    stroke('black');
    noFill();
    ellipse(this.x, this.y, this.w, this.h);
    pop();
  }

  this.over = function() {
    this.distance = dist(mouseX, mouseY, this.x, this.y);
    if (this.distance < this.w) {
      return (true);
    }
  }
}


function Defense(x, y) {
  this.x = x;
  this.y = y;
  this.offset = height * 0.0075;


  this.mouse = function() {
    push();
    strokeWeight(5);
    stroke('black');
    line(mouseX - this.offset, mouseY - this.offset, mouseX + this.offset, mouseY + this.offset);
    line(mouseX - this.offset, mouseY + this.offset, mouseX + this.offset, mouseY - this.offset);
    pop();
  }

  this.display = function() {
    push();
    strokeWeight(5);
    stroke('black');
    line(this.x - this.offset, this.y - this.offset, this.x + this.offset, this.y + this.offset);
    line(this.x - this.offset, this.y + this.offset, this.x + this.offset, this.y - this.offset);
    pop();
  }

  this.over = function() {
    this.distance = dist(mouseX, mouseY, this.x, this.y);
    if (this.distance < this.offset * 2) {
      return (true);
    }
  }
}