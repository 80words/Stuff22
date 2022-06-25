var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;
var zombieGroup
var bulletGroup 
var life=10


function preload(){
  
  heart1Img = loadImage("heart_1.png")
  heart2Img = loadImage("heart_2.png")
  heart3Img = loadImage("heart_3.png")

  shooterImg = loadImage("shooter_2.png")
  shooter_shooting = loadImage("shooter_3.png")

  zombieImg = loadImage("zombie.png")

  bgImg = loadImage("bg.jpeg")
  ebImg = loadImage("game-over.png")

  lose = loadSound("lose.mp3")
  winning = loadSound("win.mp3")
  explosionSound = loadSound("explosion.mp3")

}

function setup() {   
  createCanvas(windowWidth,windowHeight); 
  bg=createSprite(displayWidth/2-20,displayHeight/2-40,20,20) 
  bg.addImage(bgImg)
  player=createSprite(displayWidth-1150,displayHeight-300,50,50) 
  player.addImage(shooterImg)  
  player.scale=0.3 
zombieGroup=new Group()
bulletGroup=new Group() 
heart1=createSprite(displayWidth-150,40,20,20) 
heart1.addImage(heart1Img) 
heart1.scale=0.4 
heart1.visible=false
heart2=createSprite(displayWidth-100,40,20,20) 
heart2.addImage(heart2Img) 
heart2.scale=0.4 
heart2.visible=false
heart3=createSprite(displayWidth-150,40,20,20)
heart3.addImage(heart3Img) 
heart3.scale=0.4

 

}

function draw() {
  background(0);  
  if (life===10) {
    heart3.visible=true 
    heart2.visible=false
    heart1.visible=false
  } 
  if (life===6) {
    heart3.visible=false 
    heart2.visible=true
    heart1.visible=false
  } 
  if (life===3) {
    heart3.visible=false
    heart2.visible=false
    heart1.visible=true
  }
if (keyDown("UP_ARROW")) {
  player.y-=30
} 
if (keyDown("DOWN_ARROW")) {
  player.y+=30
} 
if (keyWentDown("SPACE")) {
  bullet=createSprite(displayWidth-1150,player.y-30,20,10)  
  bullet.velocityX=20 
  bullet.shapeColor="Gold"
  player.addImage(shooter_shooting) 
  bulletGroup.add(bullet)
} 
if (keyWentUp("SPACE")) {
  player.addImage(shooterImg) 

} 
if (zombieGroup.isTouching(bulletGroup)) {
  for(var i=0;i<zombieGroup.length;i++){
    if (zombieGroup[i].isTouching(bulletGroup)) {
      zombieGroup[i].destroy() 
      bulletGroup.destroyEach() 
    }
  }
} 
if (zombieGroup.isTouching(player)) {
  for(var i=0;i<zombieGroup.length;i++){
    if (zombieGroup[i].isTouching(player)) {
      zombieGroup[i].destroy() 
     bulletGroup.destroyEach() 
     life=life-1 

    }
  }
}
enemy()

  drawSprites();

}
function enemy(){
if (frameCount%50===0) {
  zombie=createSprite(random(500,1100),random(100,500),40,40)  
  zombie.addImage(zombieImg) 
  zombie.scale=0.3  
  zombie.velocityX=-50  
  zombieGroup.add(zombie)
}  

}















