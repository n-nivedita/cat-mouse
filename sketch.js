var garden
var cat
var mouse


function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png");
    catImage1 = loadImage("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png","images/cat4.png");
    catImage3 = loadImage("images/cat3.png");
    catImage4 = loadImage("images/cat4.png");
    mouseImage1 = loadImage("images/mouse1.png");
    mouseImage2 = loadImage("images/mouse2.png");
    mouseImage3 = loadImage("images/mouse3.png");
    mouseImage4 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(850,600,20,20);
    cat.addImage("catImage1", catImage1);
    cat.scale = 0.15;
    mouse = createSprite(100,600,10,10);
    mouse.addAnimation("mouseImage3", mouseImage3);
    mouse.scale = 0.15;

}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -3;
      cat.changeAnimation("catImage2", catImage2);
  }
 // else{
   //   cat.velocityX = 0;
     // cat.changeAnimation("catImage1", catImage1);
  //}


}
