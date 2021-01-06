var grid = 50;
var width = 1366;
var height = 2100;
var grassHeight = 100;
var carGroup1,carGroup2,carGroup3,carGroup4,carGroup5,carGroup6,carGroup7,carGroup8,carGroup9;
var logGroup1,logGroup2,logGroup3,logGroup4,logGroup5,logGroup6;

function setup() {
  createCanvas(1366,2100);

  carGroup1 = new Group();
  carGroup2 = new Group();
  carGroup3 = new Group();
  carGroup4 = new Group();
  carGroup5 = new Group();
  carGroup6 = new Group();
  carGroup7 = new Group();
  carGroup8 = new Group();
  carGroup9 = new Group();

  logGroup1 = new Group();
  logGroup2 = new Group();
  logGroup3 = new Group();
  logGroup4 = new Group();
  logGroup5 = new Group();
  logGroup6 = new Group();
  
  
  var bottomGrass1 = createSprite(683,height-50,width,grassHeight);
  bottomGrass1.shapeColor = "green";

  //add the for loop for the 3 rows of the car

  var bottomGrass2 = createSprite(683,height-450,width,grassHeight);
  bottomGrass2.shapeColor = "green";
  
  //add the for loop for the 3 rows of the log

  var bottomGrass3 = createSprite(683,height-850,width,grassHeight);
  bottomGrass3.shapeColor = "green";

  //add the for loop for the next 3 rows of the car

  var bottomGrass4 = createSprite(683,height-1250,width,grassHeight);
  bottomGrass4.shapeColor = "green";
  
  //add the for loop for the next 3 rows of the log

  var bottomGrass5 = createSprite(683,height-1650,width,grassHeight);
  bottomGrass5.shapeColor = "green";
 
  //add the for loop for the next 3 rows of the car

  bottomGrass6 = createSprite(683,height-2050,width,grassHeight);
  bottomGrass6.shapeColor = "green";
}

function draw() {
  background(0);  
  drawSprites();
}