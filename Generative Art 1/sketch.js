var colourA, colourB;
var numStrands = 2;
var maxCircleSize = 22;
var phase = 0;
var speed = 0.025;
var numRows = 10;
var numCols = 16;

function setup() {
  createCanvas(500, 500);

  noStroke();
  colourA = color(182, 105, 132)
  colourB = color(105, 162, 182)
}

function draw() {
  background(47, 47, 79);


  phase = frameCount * speed;

  for (var strand = 0; strand < numStrands; strand += 1) {
    for (var col = 0; col < numCols; col++) {
      for (var row = 0; row < numRows; row++) {
        var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);
        fill(lerpColor(colourA, colourB, row / numRows))
        var colOffset = map(col, 0, numCols, 0, TWO_PI);
        var x = map(col, 0, numCols, 50, width - 50)
        var y = (height / 2 - 50) + row * 10 + sin(strandPhase + colOffset) * 50;
        var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;

        ellipse(x, y, circleSize, circleSize)
        var circleSize = sizeOffset * maxCircleSize
      }
    }
  }
}