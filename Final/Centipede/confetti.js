function ConfettiRect() {
  this.x = random(width);
  this.y = random(height);
  this.r = random(5);
  this.s = 0;
  this.colors = ['#F8808D', '#8091F8', '#F8BE4D', 'yellow', '#1CEAA4', '#F2FB97', '#E3504C'];
  this.col = this.colors[round(random(this.colors.length))];
  this.size = random(10);
  this.size2 = random(10);

  this.display = function() {
    push();
    rectMode(CENTER);
    angleMode(DEGREES);
    translate(this.x, this.y);
    rotate(this.s);
    fill(this.colors[round(random(this.colors.length - 1))]);
    rect(0, 0, this.size, this.size2);
    pop()
  }

  this.move = function() {
    push();
    this.s = this.s + this.r;
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    pop();
  }

}