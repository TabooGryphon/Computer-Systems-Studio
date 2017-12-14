function nextLevel() {
  level = level + 1;
  blocks = [];
  worm = [];
  laser = [];
  laserFire = false;
}

function startOver() {
  level = 0;
  blocks = [];
  worm = [];
  laser = [];
  laserFire = false;
}

function startScreen() {
  push();
  background('black');
  textSize(64);
  textAlign(CENTER, CENTER);
  stroke('blue');
  fill('orange');
  text("Ryan's", width / 2, height / 10);
  text('Lawn Defender', width / 2, height / 10 * 1.75);
  textSize(24);
  text('Ready Player One?', width / 2, height / 10 * 7.5);
  textSize(12);
  startButton.button();
  if (startButton.useButton()) {
    nextLevel();
  }
  pop();
}


//******* Objects and Arrays they only need to be created or filled once *******
function newObjectsFillArrays() {
  startButton = new TextButton(width / 2, height / 6 * 5, 75, 37.5, 'Ready!');
  s = new Ship();
  score = new ScoreKeeper();
  levelWin = new LevelComplete();
  lose = new Lose();
  newGameButton = new TextButton(width / 2, height * 0.60, 100, 50, 'New Game');
  nextLevelButton = new TextButton(width / 2, height * 0.50, 100, 50, 'Next Level');
  sads = new SadFace();
  //******* Win Confetti *******
  for (i = 0; i < 500; i++) {
    conRec[i] = new ConfettiRect();
  }
}



function initialVarSet() {
  laserFire = false;
  rowColSpace = 16.5;
  level = 0;
}




function mousePressed() {
  laserFire = true;
}






function fillWormBlocks(x) {
  //*******worm segments*******
  var segments = 10 + (x - 1);
  var z = x - 1;
  if (x > 4) {
    z = 3;
  }
  for (c = 0; c < segments; c++) {
    worm[c] = new Worm(wormSpeed[z], ((segments * 16) + 8) - (16 * c), rowColSpace);
  }
  //********  Worm 2 *******
  if (x > 4) {
    var y = (x - 1) % 4;
    for (d = 0; d < segments; d++) {
      worm2[d] = new Worm(-wormSpeed[y], (width - (segments * 16) - 8) + (16 * d), rowColSpace);
    }
  }
  //******* b is number of blocks *******
  for (i = 0; i < 50 + 10 * (x - 1); i++) {
    blocks[i] = new Blocks(rows[round(random(rows.length - 1))], cols[round(random(1, cols.length - 1))]);
  }
}




function collisions() {

  //Worm Block collision
  for (l = 0; l < worm.length; l++) {
    worm[l].display();
    for (m = 0; m < blocks.length; m++) {
      if (worm[l].contact(blocks[m])) {
        worm[l].turn();
      }
    }
  }
  if (worm2.length > 0) {
    for (l = 0; l < worm2.length; l++) {
      worm2[l].display();
      for (m = 0; m < blocks.length; m++) {
        if (worm2[l].contact(blocks[m])) {
          worm2[l].turn();
        }
      }
    }
  }
  //laser worm collision
  if (laser.length > 0) {
    for (d = 0; d < laser.length; d++) {
      for (e = 0; e < worm.length; e++) {
        if (laser[d].hitWorm(worm[e]) == true) {
          score.breakWorm();
          worm[e].hit();
          laser[d].laserHit();
        }
      }
      for (e = 0; e < worm2.length; e++) {
        if (laser[d].hitWorm(worm2[e]) == true) {
          score.breakWorm();
          worm2[e].hit();
          laser[d].laserHit();
        }
      }
    }

    //Removes hit worm object
    for (d = 0; d < worm.length; d++) {
      if (worm[d].wormHit()) {
        worm.splice(d, 1);
      }
    }
    for (d = 0; d < worm2.length; d++) {
      if (worm2[d].wormHit()) {
        worm2.splice(d, 1);
      }
    }

    //laser block collision detection
    if (laser.length > 0) {
      for (h = 0; h < laser.length; h++) {
        for (k = 0; k < blocks.length; k++) {
          if (laser[h].hitBlock(blocks[k])) {
            score.destroyBrick();
            blocks[k].hit();
            laser[h].laserHit();
          }
        }
      }
    }
  }
}





function displayMove() {
  push();
  textAlign(CENTER);
  fill('black');
  stroke('red');
  textSize(28);
  text('Level - ' + level, width * 0.5, height * 0.8);
  pop();
  // Display and Move ship
  s.display();
  s.move();

  //    Display Blocks
  for (a = 0; a < blocks.length; a++) {
    blocks[a].display();
  }
  //    Shooting Laser
  if (laserFire == true && laser.length < 10) {
    laser.push(new Laser(s.x, s.y));
  }
  // display and move laser
  if (laser.length > 0) {
    for (b = 0; b < laser.length; b++) {
      laser[b].laserDispMove();
    }
  }
  //    Display Worm
  for (c = 0; c < worm.length; c++) {
    worm[c].display();
    worm[c].move();
  }
  for (c = 0; c < worm2.length; c++) {
    worm2[c].display();
    worm2[c].move();
  }
  //  Score During Game
  score.gameScore();
}







function removeObjects() {
  // Remove Hits laser
  if (laser.length > 0) {

    //Removes off screen laser
    for (o = 0; o < laser.length; o++) {
      //laserSwitch();
      if (laser[o].offScreen()) {
        laser.splice(o, 1);
      }
    }
    //Removes lasers that hit block or worm
    if (laser.length > 0) {
      for (h = 0; h < laser.length; h++) {
        if (laser[h].laserBoo) {
          laser.splice(h, 1);
        }
      }
    }
    // Removes Block from Screen
    for (p = 0; p < blocks.length; p++) {
      if (blocks[p].tooSmall()) {
        score.destroyBrick();
        blocks.splice(p, 1);
      }
    }
  }
}



function winLose() {
  if (level > 4 && levelWin.condition(worm) && levelWin.condition(worm2)) {
    levelWin.screen(score);
    for (i = 0; i < conRec.length; i++) {
      conRec[i].display();
      conRec[i].move();
    }
    nextLevelButton.button();
    if (nextLevelButton.useButton()) {
      nextLevel();
    }
  } else if (level < 5 && levelWin.condition(worm)) {
    levelWin.screen(score);
    for (i = 0; i < conRec.length; i++) {
      conRec[i].display();
      conRec[i].move();
    }
    nextLevelButton.button();
    if (nextLevelButton.useButton()) {
      nextLevel();
    }
  } else if (lose.condition(worm)) {
    lose.screen(score, sads);
    newGameButton.button();
    if (newGameButton.useButton()) {
      nextLevel();
      level = 0;
    }
  }
}

function twoWormWin() {
  if (levelWin.condition(worm2) == false || levelWin.condition(worm) == false) {
    return (true);
  } else {
    return (false);
  }
}

function stopLevel() {
  if (level > 4 && lose.condition(worm) == false && lose.condition(worm2) == false && twoWormWin()) {
    return true;
  } else if (level <= 4 && levelWin.condition(worm) == false && lose.condition(worm) == false) {
    return true;
  } else {
    return (false);
  }
}


function winScreen() {
  background('blue');
  fill('orange');
  textSize(65);
  for (i = 0; i < conRec.length; i++) {
    conRec[i].display();
    conRec[i].move();
  }
  textAlign(CENTER, CENTER);
  text('You Have Successfully', width / 2, height * 0.25);
  text('Defended Your Lawn!', width / 2, height * 0.35);
  textSize(48);
  score.winScore();
  textSize(18);
  newGameButton.button();
  if (newGameButton.useButton()) {
    startOver();
  }
}



function varReset() {
  laserFire = false;
}