function setup() {
  createCanvas(800,400);
  box1=createSprite(100, 200, 50, 50);
  box2=createSprite(700, 200, 50, 50);
  box1.debug=true;
  box2.debug=true;
  box1.velocityX=4;
  box2.velocityX=-4;
  
}

function draw() {
  background(255,255,255);  
//box1.x=mouseX;
//box1.y=mouseY;
console.log(box1.x-box2.x);
console.log(box1.width/2+box2.width/2);

if(box1.x-box2.x<=box1.width/2+box2.width/2 && box2.x-box1.x<=box1.width/2+box2.width/2 && 
  box1.y-box2.y<=box1.height/2+box2.height/2 && box2.y-box1.y<=box1.height/2+box2.height/2){
box1.shapeColor="red";
box2.shapeColor="yellow";
box1.velocityX=-box1.velocityX;
box2.velocityX=-box2.velocityX;

} else{
  box1.shapeColor="green";
  box2.shapeColor="blue";
  
}
  drawSprites();
}