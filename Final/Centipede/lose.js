function Lose() {


  this.condition = function(worm) {
    this.worm = worm;

    if (this.worm.length > 0) {
      for (i = 0; i < this.worm.length; i++) {
        if (this.worm[i].y >= 650) {
          return (true);
        } else {
          return (false);
        }
      }
    }
    return (false);
  }

  this.screen = function(score, sads) {
    this.score = score;
    this.sads = sads;
    push();
    cursor();
    background('black');
    this.sads.display();
    this.score.displayScore();
    textSize(48);
    textAlign(CENTER);
    fill('red');
    text('GAME OVER', width / 2, height * 0.28);
    text('YOU LOSE!!!', width / 2, height * 0.35);
    pop();
  }

}