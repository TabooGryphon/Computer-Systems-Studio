function SadFace() {
  this.x = width * 0.5;
  this.y = height * 0.6;
  this.sf = sad;
  this.size = 0.6;
  this.scaleFactor = 0.1;

  this.display = function() {
    push();
    imageMode(CENTER);
    image(this.sf, this.x, this.y);
    pop();
  }

  this.smallLarge = function() {
    if (this.size == 1) {
      this.scaleFactor = (-this.scaleFactor);
    } else if (this.size == 0.5) {
      this.scaleFactor = (-this.scaleFactor);
    }
    this.size = this.size + this.scaleFactor;
  }

}