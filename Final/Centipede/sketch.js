var blocks = [];
var rows = [];
var cols = [];
var laser = [];
var worm = [];
var conRec = [];
var stars = [];
var sads;
var spaceship, ship, w, laserFire, score, conStar, sad, b, levelWin;
var rowColSpace;
var startBoo;
var startButton;
var level;
var wormSpeed = [1, 2, 4, 8];
var worm2 = [];
var canvas;

//  IMAGES
function preload() {
  spaceship = loadImage('images/ship.png');
  sad = loadImage('images/sadface.png')
}

//   SETUP
function setup() {
  canvas = createCanvas(700, 900);
  canvas.parent('game-holder');
  initialVarSet();
  rowscols(rowColSpace); //    Fill Row and Column Arrays for Paths and Block Placement
  newObjectsFillArrays();

}
// END of SETUP
//START OF DRAW
function draw() {
  if (level == 0) {
    startScreen();
  }

  if (level > 0 && level <= 10) {
    noCursor();
    if (blocks.length === 0 && worm.length === 0) {
      fillWormBlocks(level);
    }

    if (stopLevel()) {
      background('green');
      displayMove();
      collisions();
      removeObjects();
    }
    winLose();
  }
  if (level == 11) {
    winScreen();
  }

  varReset();
}

//END OF DRAW