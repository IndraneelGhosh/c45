var angel,bow,arrow;
var p1,p2;


function preload(){
  
  

}

function setup() {
createCanvas(windowWidth,windowHeight);

  //adding the background image
 // bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
//bg.addImage(bgImg)
//bg.scale = 1.1
  

//creating the angel sprite
angel = createSprite(displayWidth-100, displayHeight-300, 50, 50);
 //angel.addImage(shooterImg)
  // angel.scale = 0.3
   angel.debug =false
   //angel.setCollider("rectangle",0,0,100,100)
p1=createSprite(100,250,20,20);
p2=createSprite(250,100,20,20);

}

function draw() {
  background("pink"); 




  //moving the angel up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  angel.y = angel.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 angel.y = angel.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 arrow=createSprite(angel.x,angel.y)
arrow.velocityX=-2;  
  //angel.addImage(shooter_shooting)
 
}

//angel goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
 // angel.addImage(shooterImg)
}

drawSprites();

}
