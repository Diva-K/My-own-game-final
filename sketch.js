const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var backgroundImg;
var stone;
var meteorites=[];
var slingshot;
var lifeline;
var exploding, losing;
var gameState="onSling";
var score = 0;

function preload(){
backgroundImg = loadImage("images/park.png")
exploding = loadSound("explode.mp3")
losing = loadSound("lose.mp3")
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    stone = new Stone(150,height-135)
   ground = createSprite(width/2,height/2+20,width,height)
   ground.addImage(backgroundImg)
   ground.scale=1.4
   slingshot = new SlingShot(stone.body,{x:150,y:height-120})
}

function draw(){
    background(230);
    drawSprites()
    Engine.update(engine);
if(frameCount===50||frameCount%200===0){
    meteorites.push(new Meteorite(width-random(50,100),100))
   // meteorite.display()
}
for(x=0;x<meteorites.length;x++){
meteorites[x].display()
}

if(keyWentDown("a")){
    losing.play()
    }
    stone.display()
    
    slingshot.display()
    for(var x=0;x<meteorites.length;x++){
        
        detectollision(stone,meteorites[x])
    }
   
//console.log(slingshot.sling)
textSize(20)
text("score:"+score,50,50)
}

function mouseDragged(){
    if(gameState==="onSling"){
        Matter.Body.setStatic(stone.body,false)
        Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
    }
   
}

function mouseReleased(){
    slingshot.fly()
    gameState = "launched"
}

function detectollision(lstone,lmango){
 
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
   
      if(distance<=lmango.r+lstone.r)
      {
       
            exploding.play()
            
      score++
      }
  
    }
    function keyPressed(){
        console.log("keyPressed")
        console.log(stone.body.position)
        if(keyCode === 32&&(stone.body.speed<1||stone.body.position.x<0||stone.body.position.x>1200||stone.body.position.y<0||stone.body.position>400)){
         
            slingshot.attach(stone.body);
          
           Matter.Body.setPosition(stone.body,{x:150,y:height-135})
           gameState = "onSling"
           
        }
    }
    