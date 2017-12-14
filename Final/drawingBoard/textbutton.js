function TextButton(x, y, w, h, txt) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.txt = txt;

  this.button = function() {
    push();
    fill(150);
    rect(this.x, this.y, this.w, this.h);
    fill(0);
    textAlign(CENTER, CENTER);
    text(this.txt, this.x + this.w / 2, this.y + this.h / 2);
    pop();
  }
  this.buttonArea = function() {
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h && mouseIsPressed) {
      return (true);
    } else {
      return (false);
    }
  }
  this.useButton = function() {
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h && mouseIsPressed) {
      return (true);
    } else {
      return (false);
    }
  }
}