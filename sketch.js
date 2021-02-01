var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 100, 50);
  movingRect = createSprite(400,200,50,100);

  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "red";
}

function draw() {
  background(255,255,255);  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  if(movingRect.x - fixedRect.x <(movingRect.width + fixedRect.width)/2 && fixedRect.x - movingRect.x <(movingRect.width + fixedRect.width)/2
 && movingRect.y - fixedRect.y <(movingRect.height + fixedRect.height)/2 && fixedRect.y - movingRect.y <(movingRect.height + fixedRect.height)/2){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "yellow";
  }

  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "red";
  }
  
  drawSprites();
}