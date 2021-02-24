const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var man;

var thunder;

var umbrella;

var drops = [];

function preload(){
    man = loadAnimation("walking_1.png", "walking_2.png", "walking_3.png","walking_4.png", "walking_5.png","walking_6.png","walking_7.png","walking_8.png");
    thunder = loadAnimation("1.png","2.png","3.png","4.png");
}
function setup(){
   createCanvas(600,500);
   engine = Engine.create(engine);
   world = engine.world;

   umbrella= new Umbrella(300,250,100,150);
    
}

function draw(){
    background(51);
    Engine.update(engine);

    drops.push(new Drop());

    for(drop of drops){
        drop.display();
        drop.update();
    }

    umbrella.display();

    animation(man,300,150);
    animation(thunder,300,450);

}   

