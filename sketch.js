var balloon,balloonImage1,balloonImage2;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
  var balloonref=database.ref('balloon/height');
  balloonref.on("value",readpos,showerror)

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    updatepos(-6,0)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
   
  }
  else if(keyDown(RIGHT_ARROW)){
    updatepos(6,0)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
  
  }
  else if(keyDown(UP_ARROW)){
    updatepos(0,-2)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
   
  }
  else if(keyDown(DOWN_ARROW)){
    updatepos(0,2)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function readpos(data){
  pos=data.val()
  balloon.x=pos.x;
  balloon.y=pos.y;

}
function showerror(){
  console.log("air ballon game is hacked")
}

function updatepos(x,y){
  database.ref('balloon/height').set({
    'x':pos.x+x,
    'y':pos.y+y
  })
}