
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var d1,d2,d3
var ground;
var paper, launch;
function preload()
{
	dust_img = loadImage("dustbingreen.png")
	ball= loadImage("paper.png")
}

function setup() {
	createCanvas(1600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 360, 45);
ground=new Ground(800,590,1600,20)
	d1 = new Dustbin(1300, 570, 170, 20);
	d2= new Dustbin(1205, 520, 20, 120);
	d3 = new Dustbin(1395, 520, 20, 120);
	launch = new Launcher(paper.body, {
		x: 200,
		y: 100
	});

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1600,
			height: 600,
			wireframes: false
		}
	});
	Render.run(render);

}


function draw() {
  
  background(255);
  	Engine.update(engine);
	d1.display();
	d2.display();
	d3.display();
	ground.display();
	paper.display()
	image(dust_img, 1190, 330, 220, 250)
	//image(ball,100,400, 40,40)
	launch.display()
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:45,y:-35})
	}
}
function mouseDragged() {
	Matter.Body.setPosition(paper.body, {
		x: mouseX,
		y: mouseY
	});
}


function mouseReleased() {
	alert("mouse released")
	launch.fly();
}


