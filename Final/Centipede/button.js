function TextButton(x, y, w, h, txt) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.txt = txt;

  this.button = function() {
    push();
    rectMode(CENTER, CENTER);
    fill(150);
    rect(this.x, this.y, this.w, this.h);
    fill(0);
    textAlign(CENTER, CENTER);
    text(this.txt, this.x, this.y);
    pop();
  }

  this.useButton = function() {
    if (mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2 && mouseY > this.y - this.h / 2 && mouseY < this.y + this.h / 2 && mouseIsPressed) {
      return (true);
    } else {
      return (false);
    }
  }
}