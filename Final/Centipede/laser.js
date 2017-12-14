function Laser(x, y) {
  this.x = x;
  this.y = y;
  this.laserLength = this.y + 15;
  this.hitRemove = false;
  this.laserBoo = false;

  this.clicked = function() {
    this.x1 = mouseX;
    this.y1 = mouseY;
    this.laserLength = this.y1 + 15
    return (true);
  }

  this.laserDispMove = function() {
    push();
    stroke('red');
    strokeWeight(4);
    line(this.x, this.y, this.x, this.laserLength);
    this.y = this.y - 2;
    this.laserLength = this.laserLength - 2;
    pop();
  }


  this.hitBlock = function(other) {
    this.other = other;
    if (this.y < other.bottom && this.x >= other.x && this.x <= other.x + other.wide && this.y >= other.y) {
      return (true);
    }
  }

  this.hitWorm = function(worm) {
    this.worm = worm;
    this.distance = dist(this.x, this.y, this.worm.x, this.worm.y);
    if (this.distance <= worm.size / 2) {
      return (true);
    }
  }

  this.offScreen = function() {
    if (this.laserLength <= 0) {
      return (true);
    } else {
      return (false);
    }
  }

  this.laserHit = function() {
    this.laserBoo = true;
  }


  this.laserSwitch = function() {
    this.hitRemove = false;
  }

}