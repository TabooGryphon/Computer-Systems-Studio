var off, def, fUp, fDown, offButton, defButton, defense, offense;
var reset;
var off = [];
var def = [];
var fieldHeight, fieldWidth;
var os;
var addLetter;
var canvas;
var field;
var lineVar;
var printLine = [];
var paint;

function setup() {
  offense = false;
  defense = false;
  addLetter = false;
  field = true;
  lineVar = false;
  fieldWidth = windowWidth * 0.5;
  fieldHeight = (windowHeight * 0.9);
  canvas = createCanvas(fieldWidth, fieldHeight);
  canvas.parent('drawing-board');
  offButton = new TextButton(10, 10, 40, 15, 'O');
  defButton = new TextButton(10, 35, 40, 15, 'X');
  fieldButton = new TextButton(10, 60, 40, 15, 'Field');
  lineButton = new TextButton(10, 85, 40, 15, 'Draw');
  reset = new TextButton(10, 110, 40, 15, 'Reset');
  ds = new Defense(mouseX, mouseY);
  os = new Offense(mouseX, mouseY);
  paint = new Draw(mouseX,mouseY);
}


function mousePressed() {
  if (offButton.useButton() && mouseButton == LEFT) {
    offense = true;
    defense = false;
  }
  if (defButton.useButton()) {
    defense = true;
    offense = false;
  }
  if (fieldButton.useButton()) {
    if (field == true) {
      field = false;
    } else if (field == false) {
      field = true;
    }
  }
  if (lineButton.useButton()) {
    lineVar = true;
    offense = false;
    defense = false;
  }
  addLetter = true;
}

function windowResized() {
  fieldWidth = windowHeight * 0.7;
  fieldHeight = (windowHeight * 0.9);
  resizeCanvas(fieldWidth, fieldHeight);
}


function draw() {
  if (field == true) {
    fieldDown(fieldHeight);
  } else if (field == false) {
    fieldUp(fieldHeight);
  }
  offButton.button();
  defButton.button();
  fieldButton.button();
  lineButton.button();
  reset.button();

  if (defense == true && offense == false) {
    ds.mouse();
    if (defButton.useButton() == false && fieldButton.useButton() == !true && mouseButton == LEFT && keyIsDown(SHIFT) == !true) {
      if (addLetter == true && def.length < 11) {
        def.push(new Defense(mouseX, mouseY));
      }
    }
    for (i = 0; i < def.length; i++) {
      if (def[i].over() && keyIsDown(SHIFT) && mouseIsPressed) {
        def.splice(i, 1);
      }
    }
  }
  if (def.length > 0) {
    for (i = 0; i < def.length; i++) {
      def[i].display();
    }
  }
  if (offense == true && defense == false) {
    os.mouse();
    if (offButton.useButton() == false && fieldButton.useButton() == !true && mouseButton == LEFT && keyIsDown(SHIFT) == !true) {
      if (addLetter == true && off.length < 11) {
        off.push(new Offense(mouseX, mouseY));
      }
    }
    for (i = 0; i < off.length; i++) {
      if (off[i].over() && keyIsDown(SHIFT) && mouseIsPressed) {
        off.splice(i, 1);
      }
    }
  }
  if (off.length > 0) {
    for (i = 0; i < off.length; i++) {
      off[i].display();
    }
  }
  
  if (lineVar == true && offense == false && defense == false) {
    paint.mouse();
    if (mouseIsPressed && offButton.useButton() == false && defButton.useButton() == false && lineButton.useButton() == false) {
      printLine.push(new Draw());
    }
  }
  if(printLine.length > 0){
    for(i=0;i<printLine.length;i++){
    printLine[i].display();
    }
  }



  addLetter = false;
  if (reset.useButton() && mouseIsPressed) {
    off = [];
    def = [];
    printLine = [];
    offense = false;
    defense = false;
    addLetter = false;
    lineVar = false;
  }

}