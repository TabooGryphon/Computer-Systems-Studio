function rowscols(rowColSpace){
  this.rowColSpace = rowColSpace;
    //rows
  for (i = 0; i < 692.5; i = i + this.rowColSpace) {
    this.rows.push(i);
  }
  // columns
  for (j = 0; j < 575; j = j + this.rowColSpace) {
    this.cols.push(j);
  }
}