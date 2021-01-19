
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;
var rope;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(950,100,30);
	mango3=new mango(1100,180,30);
	mango4=new mango(1000,200,30);
	mango5=new mango(1200,130,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj = new stone(230,420,20)
	


	rope = new Rope(stoneObj.body,{x:230,y:420});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  textSize(30)
  text("Press space to try again",100,70,)
 
  image(boy ,200,340,200,300);
  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stoneObj.display();

  
  
  rope.display();
  
 
  groundObject.display();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
 
}


function mouseDragged(){

	Matter.Body.setPosition(stoneObj.body,{x: mouseX , y: mouseY})
}


function mouseReleased(){

	rope.fly();
}

function detectollision(Lstone, Lmango)
{

	mangoBodyPosition = Lmango.body.position
	stoneBodyPosition = Lstone.body.position

	var distance=dist(mangoBodyPosition.x,mangoBodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y)
	
	if(distance<=Lmango.r+Lstone.r)
	{
        Matter.Body.setStatic(Lmango.body,false);
	}
}


function keyPressed()
{
	if(keyCode=== 32)
	{
      Matter.Body.setPosition(stoneObj.body,{x:230 , y:420})
      rope.attach(stoneObj.body)
	}
}