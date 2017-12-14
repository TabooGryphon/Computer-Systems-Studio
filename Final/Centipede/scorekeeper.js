function ScoreKeeper() {
  this.score = 0;
  this.damageBrickPoints = 50;
  this.destroyBrickPoints = 150;
  this.breakWormPoints = 300;
  this.destroyWormPoints = 2000;

  this.displayScore = function() {
    push();
    textAlign(CENTER);
    fill('white');
    stroke('red');
    strokeWeight(5);
    textSize(60);
    text('Score', width / 2, height * 0.1);
    text(this.score, width / 2, height * 0.2);
    pop();
  }
  
    this.winScore = function() {
    push();
    textAlign(CENTER);
    fill('white');
    stroke('red');
    strokeWeight(5);
    textSize(60);
    text('Score', width / 2, height * 0.5);
    text(this.score, width / 2, height * 0.6);
    pop();
  }

  this.gameScore = function() {
    push();
    textAlign(CENTER);
    fill('white');
    stroke('red');
    strokeWeight(5);
    textSize(12);
    text('Score', width - 100, 10);
    text(this.score, width - 50, 10);
    pop();
  }

  this.damageBrick = function() {
    this.score = this.score + this.damageBrickPoints;
  }

  this.destroyBrick = function() {
    this.score = this.score + this.destroyBrickPoints;
  }

  this.breakWorm = function() {
    this.score = this.score + this.breakWormPoints;
  }

  this.destroyWorm = function() {
    this.score = this.score + this.destroyWormPoints;
  }
  
  this.reset = function() {
    this.score = 0;
  }

}