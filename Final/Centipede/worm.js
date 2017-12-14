function Worm(speed, x, row) {
  this.x = x;
  this.y = 8;
  this.size = 16;
  this.speed = speed;
  this.row = row;
  this.hitTell = false;

  this.display = function() {
    push();
    stroke('black');
    strokeWeight(1);
    fill('brown');
    ellipse(this.x, this.y, this.size, this.size);
    pop();
  }

  this.move = function(prevX, prevY) {
    this.x = this.x + this.speed;
    
    
    if (this.x > width - this.size / 2) {
      this.y = this.y + this.row;
      this.speed = -this.speed;
      this.x = width - this.size/2;

    }
    if (this.x < this.size / 2) {
      this.y = this.y + this.row;
      this.speed = -this.speed;
      this.x = this.size/2;
    }

  }


  this.contact = function(brick) {
    this.brick = brick;
    this.radius = this.size / 2
    this.distance = dist(this.x, this.y, brick.x + (brick.size / 2), brick.y + (brick.size / 2))
    if (this.distance <= this.radius + (brick.size / 2)) {
      return (true);
    } else {
      return (false);
    }

  }

  this.turn = function() {
    this.y = this.y + this.row;
    this.speed = (-this.speed);
  }

  this.hit = function() {
    this.hitTell = true;
  }

  this.wormHit = function() {
    if (this.hitTell == true) {
      return (true);
    }
  }

}