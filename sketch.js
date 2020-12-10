var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,line ,line1 ;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var zom1,zom2,zom3,zom4,zom5,zpm6;
var zomi1,zomi2,zomi3,zomi4,zomi5,zomi6;
var zom1d,zom4d,zom5d,zpm6d;
var zomi1d,zomi4d,zomi5d,zomi6d;
var heli;
var line1 ,line2 ,line3 ;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	zomi1=loadImage("z1.png")
	zomi2=loadImage("z2.png")
	zomi3=loadImage("z3.png")
	zomi4=loadImage("z5.png")
	zomi5=loadImage("z6.png")
	zomi6=loadImage("z7.png")
   
	zomi1d=loadImage("z1.png")
	zomi4d=loadImage("z5.png")
	zomi5d=loadImage("z6.png")
	zomi6d=loadImage("z7.png")

    heli=loadImage("h2.png")

}


function setup() {
	createCanvas(1200, 500);
	rectMode(CENTER);
	
	x1=random(50,220);
	y1=random(350,400);

	x2=random(50,100);
	y2=random(200,250);

	x3=random(1000,1100);
	y3=random(50,70);

	x4=random(800,900);
	y4=random(120,180);

	x5=random(930,1130);
	y5=random(230,290);

	x6=random(180,270);
	y6=random(70,130);

	x1d=random(1050,1100);
	y1d=random(380,400);

	x4d=random(350,650);
	y4d=random(200,300);

	x5d=random(580,730);
	y5d=random(380,420);

	x6d=random(790,850);
	y6d=random(300,380)

	
	packageSprite=createSprite(width/2,80,10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.setCollider("rectangle",0,0,270,110);
	helicopterSprite.debug = false

	zom1=createSprite(x1,y1, 10,10);
	zom1.addImage(zomi1)
	zom1.scale=0.6

	zom2=createSprite(x2,y2, 10,10);
	zom2.addImage(zomi2)
	zom2.scale=0.6

	zom3=createSprite(x3,y3, 10,10);
	zom3.addImage(zomi3)
	zom3.scale=0.6

	zom4=createSprite(x4,y4, 10,10);
	zom4.addImage(zomi4)
	zom4.scale=0.6

	zom5=createSprite(x5,y5, 10,10);
	zom5.addImage(zomi5)
	zom5.scale=0.6

	zom6=createSprite(x6,y6, 10,10);
	zom6.addImage(zomi6)
	zom6.scale=0.6

	zom1d=createSprite(x1d,y1d, 10,10);
	zom1d.addImage(zomi1d)
	zom1d.scale=0.6

	zom4d=createSprite(x4d,y4d, 10,10);
	zom4d.addImage(zomi4d)
	zom4d.scale=0.6

	zom5d=createSprite(x5d,y5d, 10,10);
	zom5d.addImage(zomi5d)
	zom5d.scale=0.6

	zom6d=createSprite(x6d,y6d, 10,10);
	zom6d.addImage(zomi6d)
	zom6d.scale=0.6


	line1=createSprite(300, 430, 15,100);
	line2=createSprite(400,470,200,20);
	line3=createSprite(500,430,15,100);
	line1.shapeColor="red"
	line2.shapeColor="red"
	line3.shapeColor="red"


	groundSprite=createSprite(width/2, height-10, width,30);
	groundSprite.shapeColor="yellow"




	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 100 , 5 , {restitution:0.9, isStatic:true});
	World.add(world, packageBody);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 500, width, 10 , {isStatic:true} );
 	World.add(world, ground);


//create lines
line1 = Bodies.rectangle(300, 430, 15,100 , {isStatic:true} );
World.add(world, line1);
line2 = Bodies.rectangle(400,470,200,20, {isStatic:true} );
World.add(world, line2);
line3 = Bodies.rectangle(500,430,15,100 , {isStatic:true} );
World.add(world, line3); 


	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  textFont("Bodoni MT Black")
  textSize(40)
  fill("red")
  text("PRESS  'SPACE BAR' TO DROP THE PACKAGE ",100,40)

  if(keyCode===32){

	Matter.Body.setStatic(packageBody,false)
    

}



helicopterSprite.depth=zom1.depth
helicopterSprite.depth=zom1.depth+10


  if (keyCode===LEFT_ARROW) {
	helicopterSprite.x= helicopterSprite.x-3
	Matter.Body.translate(packageBody, {x:-3,y:0})
	
  }

  if (keyCode===RIGHT_ARROW) {
	helicopterSprite.x= helicopterSprite.x+4
	Matter.Body.translate(packageBody, {x:4,y:0})
	
  }

  if (keyCode===UP_ARROW) {
	helicopterSprite.y= helicopterSprite.y-3
	Matter.Body.translate(packageBody, {x:0,y:-3})
	
  }

  if (keyCode===DOWN_ARROW) {
	helicopterSprite.y= helicopterSprite.y+4
	Matter.Body.translate(packageBody, {x:0,y:4})
	
  }
  
if(helicopterSprite.isTouching(zom1)){

helicopterSprite.addImage(heli)
helicopterSprite.scale=2
helicopterSprite.velocityX=0
helicopterSprite.velocityY=0
Matter.Body.setStatic(packageBody,true)
}

if(helicopterSprite.isTouching(zom1d)){

	helicopterSprite.addImage(heli)
	helicopterSprite.scale=2
	helicopterSprite.velocityX=0
	helicopterSprite.velocityY=0
	Matter.Body.setStatic(packageBody,true)
	
	}

if(helicopterSprite.isTouching(zom2)){

helicopterSprite.addImage(heli)
helicopterSprite.scale=2
helicopterSprite.velocityX=0
helicopterSprite.velocityY=0
Matter.Body.setStatic(packageBody,true)		
		}

if(helicopterSprite.isTouching(zom3)){

helicopterSprite.addImage(heli)
helicopterSprite.scale=2
helicopterSprite.velocityX=0
helicopterSprite.velocityY=0
Matter.Body.setStatic(packageBody,true)			
			}	

if(helicopterSprite.isTouching(zom4)){

helicopterSprite.addImage(heli)
helicopterSprite.scale=2
helicopterSprite.velocityX=0
helicopterSprite.velocityY=0
Matter.Body.setStatic(packageBody,true)				
				}	

if(helicopterSprite.isTouching(zom4d)){

helicopterSprite.addImage(heli)
helicopterSprite.scale=2
helicopterSprite.velocityX=0
helicopterSprite.velocityY=0
Matter.Body.setStatic(packageBody,true)
		}	

if(helicopterSprite.isTouching(zom5)){

helicopterSprite.addImage(heli)
helicopterSprite.scale=2
helicopterSprite.velocityX=0
helicopterSprite.velocityY=0
Matter.Body.setStatic(packageBody,true)						
	}	
						
if(helicopterSprite.isTouching(zom5d)){

helicopterSprite.addImage(heli)
helicopterSprite.scale=2
helicopterSprite.velocityX=0
helicopterSprite.velocityY=0
Matter.Body.setStatic(packageBody,true)
	}
	
if(helicopterSprite.isTouching(zom6)){

helicopterSprite.addImage(heli)
helicopterSprite.scale=2
helicopterSprite.velocityX=0
helicopterSprite.velocityY=0
Matter.Body.setStatic(packageBody,true)								
	}	

if(helicopterSprite.isTouching(zom6d)){

helicopterSprite.addImage(heli)
helicopterSprite.scale=2
helicopterSprite.velocityX=0
helicopterSprite.velocityY=0
Matter.Body.setStatic(packageBody,true)								
	}
	
  drawSprites();
 
}


function stick(){

	push();
	translate(this.helicopterSprite.position.x, this.helicopterSprite.position.y,10,10);
	imageMode(CENTER);
	pop()

}
