var starImg,bgImg,bg;
var star, starBody;
var fada, fadaImg;
var parede1,parede2;
var star2,star2Img;
var sound



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fadaImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    star2Img = loadImage("images/starImage.png");
    sound = loadSound("sound/JoyMusic.mp3");
}

function setup() {
    createCanvas(800, 750);

    sound.play();
    

    bg = createSprite(400,325);
    bg.addImage(bgImg);

    parede1 = createSprite(0,350,30,800);
    parede2 = createSprite(800,350,30,800);
    parede1.visible = false;
    parede2.visible = false;

    fada = createSprite(400,510,10,10);
    fada.addAnimation("voando",fadaImg);
    fada.scale = 0.3;
    //fada.debug = true;
    fada.setCollider("circle",0,0,500);

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

    
	
	Engine.run(engine);

}

function draw(){
    background(20);
    

    if(keyDown(LEFT_ARROW)){
        fada.x = fada.x - 4.5;
    }

    if(keyDown(RIGHT_ARROW)){
        fada.x = fada.x + 6;

    }

    if(keyWentUp("1")){
      
      star2 = createSprite(-30,30,10,10);
      star2.addImage(star2Img);
      star2.x = Math.round(random(315,730));
      star2.scale = 0.05;

    }

    if(keyDown("space")){
        //star2.x = starBody.position.x;
        star2.y = starBody.position.y;
        Matter.Body.setStatic(starBody,false);
    }
    if(starBody.position.y > 470){
        Matter.Body.setStatic(starBody,true);
    }

    fada.collide(parede1);
    fada.collide(parede2);

    drawSprites();
}
