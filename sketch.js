var fixedRect, movingRect;
var box1,box2,box3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1=createSprite(300,100,50,50);
  box1.shapeColor="green";
  box2=createSprite(100,100,50,50);
  box2.shapeColor="green";
  box3=createSprite(600,100,50,50);
  box3.shapeColor="green";
 box2.velocityX=2;
 box3.velocityX=-2; 
}

function draw() {
  background(0,0,0);  

  bounceOff(box2,box3);

  
  drawSprites();
}

