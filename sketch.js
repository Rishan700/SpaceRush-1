var background1,background1Img,play,playimg,logo,logoimg,background2,background2Img;
var player,playerImg,enemy0,enemy0img,enemy1,enemy1img,enemy2,enemy2img;
var laser1,laser1img,laser2,laser2img,explosen,explosenimg;
var gameState = 0;
function preload() {
background1Img = loadImage("Sprites/BackGround.jpg")
playimg = loadImage("Sprites/Play.png")
logoimg = loadImage("Sprites/Logo.png")
background2Img = loadImage("Sprites/background2.jpg")

playerImg = loadImage("Sprites/Ship/Your Ship.png")
enemy0img = loadImage("Sprites/Ship/Loot Ship.png")
enemy1img = loadImage("Sprites/Ship/Fighter Ship.png")
enemy2img = loadImage("Sprites/Ship/Main Ship.png")

laser1img = loadImage("Sprites/Laser/Fighter Laser.png")
laser2img = loadImage("Sprites/Laser/Your Laser.png")
explosenimg = loadImage("Sprites/Explosen.png")


}
function setup() {
  createCanvas(displayWidth,displayHeight);
  background1 = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  background1.addImage(background1Img);
  play = createSprite(800,600)
  play.addImage(playimg)
  logo = createSprite(800,300)
  logo.addImage(logoimg)
  background2 = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  background2.addImage(background2Img);
  background2.visible = false
}
function draw() {
  background(255,255,0);
 if (mousePressedOver(play)) {
   gameState = 1
 }
 if (gameState == 1) {
   background1.destroy();
   play.destroy();
   logo.destroy();
   background2.visible = true
   background2.velocityY = -4;
 }
  drawSprites();
}