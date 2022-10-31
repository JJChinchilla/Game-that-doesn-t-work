
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bg_img;

function preload()
{
  bg_img = loadImage("background.gif");
}

function setup() {
  createCanvas(400,400);

  //engine = Engine.create();
  //world = engine.world;
  
}


function draw() 
{
  //background(51);
  //Engine.update(engine);
  image(bg_img, 200,200,400,400);
}

