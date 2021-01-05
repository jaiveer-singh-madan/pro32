const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;
var block1, block2, block3, block4, block5,block6;
var polygon;
var slingshot;
var polygonImg;
var gameState="play";
var score=0;

function preload(){
    polygonImg=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(850,600);
    engine = Engine.create();
    world = engine.world;

    stand=new Ground(400,500,800,10);
    block1=new Box(300,470,50,50,PI/2);
    block2=new Box(350,470,50,50,PI/2);
    block3=new Box(400,470,50,50,PI/2);
    block4=new Box(325,420,50,50,PI/2);
    block5=new Box(375,420,50,50,PI/2);
    block6=new Box(350,370,50,50,PI/2);

    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot= new SlingShot(this.polygon,{x:100, y:200});

}

function draw(){
    Engine.update(engine);
    strokeWeight(4);
    getBackground();

    stand.display();

    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();
    block6.display();
    block6.score();

    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);
    text("SCORE:"+ score,750,40);
    keyPressed();
    console.log("the background is very slow so it takes time to wipe out the traces of the polygon");
}



function mouseDragged(){
   // if(gameState!=="launched")
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
    gameState="launched";
}
function keyPressed(){
    if(keyCode===32){
      slingshot.attach(this.polygon);
    }
}

async function getBackground(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=18){
        background("white");
    }
    else{
        background("black");
    }

}