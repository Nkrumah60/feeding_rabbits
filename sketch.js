var garden,rabbit;
var gardenImg,rabbitImg;
var appleImage
var leafImage

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage = loadImage("leaf.png")
}


function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating rabbit running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnApples();
  spawnLeaves();

  drawSprites();
}

function spawnApples(){
  if(frameCount%70===0){
    var apples = createSprite(400,20,10,10);
    apples.velocityY = 3;
    apples.addImage("apples",appleImage);
    apples.scale = 0.1;
    var raNum = Math.round(random(50,350));
    apples.x = raNum;
    rabbit.depth = apples.depth;
    rabbit.depth = rabbit.depth +1;
    apples.lifetime = 400/3;
  }
}

function spawnLeaves(){
  if (frameCount%85===0) {
    var leaves = createSprite (400,20,10,10);
    leaves.velocityY = 3;
    leaves.addImage("leaves",leafImage);
    leaves.scale = 0.1;
    var raNum = Math.round(random(50,350));
    leaves.x = raNum;
    rabbit.depth = leaves.depth;
    rabbit.depth = rabbit.depth +1;
    leaves.lifetime = 400/3;
  }

}
