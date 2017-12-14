var fb;
var canvas;

function setup() {
  if (windowWidth < 1024) {
    canvas = createCanvas(windowWidth * 0.955, 100);
    canvas.parent('sketch-holder');
  } else {
    canvas = createCanvas(windowWidth * 0.975, 100);
    canvas.parent('sketch-holder');
  }
  fb = new Football(2.5);
}

function draw() {
  clear();
  fb.display();
  fb.move();
}

function windowResized() {
  if (windowWidth < 1024) {
    resizeCanvas(windowWidth * 0.955, 100);
  } else {
    resizeCanvas(windowWidth * 0.975, 100);
  }
  fb = new Football(2.5);
}

function Football(m) {
  this.m = m;
  this.x = -50;
  this.y = 50;

  // Draw Football
  this.display = function() {
    //football
    push();
    noStroke();
    fill('brown');
    ellipse(this.x, this.y, 90, 50);
    //laces
    stroke('white');
    strokeWeight(7);
    line(this.x - 15, this.y, this.x + 15, this.y);
    for (var a = -15; a <= 15; a = a + 5) {
      strokeWeight(2);
      line(this.x + a, this.y + 7, this.x + a, this.y - 7);
    }
  }

  this.move = function() {
    this.x = this.x + this.m;
    if (this.x > width + 50) {
      this.x = -50;
    }

  }
}