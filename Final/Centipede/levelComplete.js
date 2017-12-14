function LevelComplete() {

  this.condition = function(worm) {
    this.worm = worm;
    if (this.worm.length < 1) {
      return (true);
    } else {
      return (false);
    }
  }

  this.screen = function(score) {
    this.score = score;
    push();
    cursor();
    background('black');
    this.score.displayScore();
    textSize(48);
    textAlign(CENTER);
    fill('red');
    text('LEVEL COMPLETE', width / 2, height * 0.4);
    pop();
  }

}