var grid = 50;
var width = 1366;
var height = 2100;
var grassHeight = 100;

function setup() {
  createCanvas(1366,2100);
  
  var bottomGrass1 = createSprite(683,height-50,width,grassHeight);
  bottomGrass1.shapeColor = "green";

  var bottomGrass2 = createSprite(683,height-450,width,grassHeight);
  bottomGrass2.shapeColor = "green";
  
  var bottomGrass3 = createSprite(683,height-850,width,grassHeight);
  bottomGrass3.shapeColor = "green";

  var bottomGrass4 = createSprite(683,height-1250,width,grassHeight);
  bottomGrass4.shapeColor = "green";
  
  var bottomGrass5 = createSprite(683,height-1650,width,grassHeight);
  bottomGrass5.shapeColor = "green";
 
  bottomGrass6 = createSprite(683,height-2050,width,grassHeight);
  bottomGrass6.shapeColor = "green";
}

function draw() {
  background(0);  
  drawSprites();
}