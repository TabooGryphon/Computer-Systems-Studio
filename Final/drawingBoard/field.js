  //ENDZONE AT BOTTOM

  function fieldDown(fieldHeight) {
    push();
    this.fieldHeight = fieldHeight;
    this.goalline = fieldHeight * 0.2;
    this.lineSpace = height * 0.1;

    background('green');

    //ENDZONE
    fill('red');
    stroke('white');
    strokeWeight(5);
    rect(0, height - this.goalline, width, height);

    //FIELD
    noFill();
    stroke('white');
    strokeWeight(30);
    rect(0, 0, width, height);

    //HASHMARK
    for (i = 0; i < 41; i++) {
      strokeWeight(5);
      line(width / 3, 0 + (height * 0.02 * i), width / 3 + 15, 0 + (height * 0.02 * i));
      line(width / 3 * 2, 0 + (height * 0.02 * i), width / 3 * 2 + 15, 0 + (height * 0.02 * i));
    }


    // YARDLINES
    for (i = 0; i < 9; i++) {
      strokeWeight(5);
      line(0,0 + (this.lineSpace * i), width, 0 + (this.lineSpace * i));
    }

    //OUTER BOARDER
    stroke('black');
    strokeWeight(5);
    rect(0, 0, width - 1.5, height - 1.5);
    pop();
  }

  // ENDZONE AT TOP

  function fieldUp(fieldHeight) {
    push();
    this.fieldHeight = fieldHeight;
    this.goalline = fieldHeight * 0.2;
    this.lineSpace = height * 0.1;

    background('green');

    //ENDZONE
    fill('red');
    stroke('white');
    strokeWeight(5);
    rect(0, 0, width, this.goalline);

    //FIELD
    noFill();
    stroke('white');
    strokeWeight(30);
    rect(0, 0, width, height);

    //HASHMARK
    for (i = 0; i < 45; i++) {
      strokeWeight(5);
      line(width / 3, this.goalline + (height * 0.02 * i), width / 3 + 15, this.goalline + (height * 0.02 * i));
      line(width / 3 * 2, this.goalline + (height * 0.02 * i), width / 3 * 2 + 15, this.goalline + (height * 0.02 * i));
    }


    // YARDLINES
    for (i = 0; i < 9; i++) {
      strokeWeight(5);
      line(0, this.goalline + (this.lineSpace * i), width, this.goalline + (this.lineSpace * i));
    }

    //OUTER BOARDER
    stroke('black');
    strokeWeight(5);
    rect(0, 0, width - 1.5, height - 1.5);
    pop();
  }