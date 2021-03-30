var ball,database,position;
var bg,bgImage;
var ballImage;

function setup(){
    database=firebase.database();
    createCanvas(1000,1000);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ball.addImage(ballImage);
    var ballPosition=database.ref('ball/position');
    ballPosition.on("value",readPosition,showerror);
   }

function preload(){
bgImage=loadImage("images/Hot Air Ballon-01.png");
ballImage=loadImage("images/Hot Air Ballon-02.png");
}

function draw(){
    bg.addImage(bgImage);
bg=createSprite(0,0,0,0);

    if(position!==undefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
}
    drawSprites();
}


function readPosition(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}
function writePosition(x,y){
    database.ref('ball/position').set({'x':position.x+x,'y':position.y+y})
}
function showerror(){
    console.log("check error");
}