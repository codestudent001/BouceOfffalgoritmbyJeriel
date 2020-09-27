var fixedRect, movingRect,rectangle,square;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

rectangle = createSprite(250,200,100,40);
rectangle.shapeColor = "yellow";
rectangle.velocityX = 3;
rectangle.velocityY = 2;

square = createSprite(800,600,50,50);
square.shapeColor = "red";
square.velocityX = -2;
square.velocityY = -2;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

}

function draw() {
  background(0,0,0);  
    
    bounceOff(rectangle,square);
    bounceOff(movingRect,fixedRect);
  drawSprites();
}






