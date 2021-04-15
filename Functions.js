
function movement(a){
    if(keyDown("w")){
        noble.y -=a;
    }

    if(keyDown("a")){
        noble.x -=a;
    }

    if(keyDown("s")){
        noble.y +=a;
    }

    if(keyDown("d")){
        noble.x +=a;
    }

    if(keyDown(UP_ARROW)){
        noble.y -=a;
    }

    if(keyDown(LEFT_ARROW)){
        noble.x -=a;
    }

    if(keyDown(DOWN_ARROW)){
        noble.y +=a;
    }

    if(keyDown(RIGHT_ARROW)){
        noble.x +=a;
    }
}

function look(){
    if(camera.isActive()){
        camera.position.x = noble.x;
        camera.position.y = noble.y;
        }
}

function Lv1Touch(){
    noble.collide(TopWall);
    noble.collide(BottomWall);
    noble.collide(LeftWall);
    noble.collide(RightWall);
    noble.collide(obstacle1);
    noble.collide(obstacle2);
}

function oof(){
    if(noble.isTouching(obstacle3)||noble.isTouching(obstacle4)||noble.isTouching(obstacle5)||noble.isTouching(obstacle6)||noble.isTouching(obstacle7)||noble.isTouching(obstacle8)||noble.isTouching(obstacle9)||noble.isTouching(obstacle10)||noble.isTouching(obstacle11)||noble.isTouching(obstacle12)||noble.isTouching(obstacle13)||noble.isTouching(obstacle14)||noble.isTouching(obstacle15)||noble.isTouching(obstacle16)||noble.isTouching(obstacle17)||noble.isTouching(obstacle18)||noble.isTouching(obstacle19)||noble.isTouching(obstacle20)||noble.isTouching(obstacle21)||noble.isTouching(obstacle22)||noble.isTouching(obstacle23)||noble.isTouching(obstacle24)||noble.isTouching(obstacle26)||noble.isTouching(obstacle27)||noble.isTouching(obstacle28)||noble.isTouching(obstacle31)||oofGroup.isTouching(noble)){
    noble.x = spawnX;
    noble.y = spawnY;
    life = life - 1;
    }
}

function lv1(){
    
noble= createSprite(spawnX,spawnY,10,10);

obstacle1 = createSprite(20,180,100,10);

obstacle2 = createSprite(20,210,100,10);

obstacle3 = createSprite(65,150,10,60);
obstacle3.shapeColor = "red";

obstacle4 = createSprite(65,260,10,100);
obstacle4.shapeColor = "red";

obstacle5 = createSprite(70,315,50,10);
obstacle5.shapeColor = "red";

obstacle6 = createSprite(30,272,30,10);
obstacle6.velocityX = 5;
obstacle6.shapeColor = "red";

obstacle7 = createSprite(70,60,10,70);
obstacle7.shapeColor = "red";

obstacle8 = createSprite(89,360,20,50);//y velo
obstacle8.shapeColor = "red";

obstacle9 = createSprite(30,60,20,10);
obstacle9.shapeColor = "red";

obstacle10 = createSprite(150,150,10,100);
obstacle10.shapeColor = "red";

obstacle11 = createSprite(100,150,10,10);//y velo
obstacle11.shapeColor = "red";
obstacle11.velocityY = 5;

obstacle12 = createSprite(350,25,10,50);
obstacle12.shapeColor = "black";

obstacle13 = createSprite(375,45,50,10);
obstacle13.shapeColor = "black";

obstacle14 = createSprite(200,175,10,70);
obstacle14.shapeColor = "red";

obstacle15 = createSprite(255,175,10,75);
obstacle15.shapeColor = "red";

obstacle16 = createSprite(240,220,50,10);
obstacle16.shapeColor = "red";

obstacle17 = createSprite(222,127,50,10);
obstacle17.shapeColor = "red";

obstacle18 = createSprite(136,255,10,50); //tilt this
obstacle18.shapeColor = "red";
obstacle18.rotation = 30;

obstacle19 = createSprite(331,177,10,90); 
obstacle19.shapeColor = "red";

obstacle20 = createSprite(228,298,10,100); //tilt this
obstacle20.shapeColor = "red";

obstacle21 = createSprite(185,275,50,10);
obstacle21.shapeColor = "red";

obstacle22 = createSprite(260,261,70,10);
obstacle22.shapeColor = "red";
obstacle22.rotation = -70

obstacle23 = createSprite(113,310,10,50);//tilt
obstacle23.shapeColor = "red";

obstacle24 = createSprite(150,45,50,10);
obstacle24.shapeColor = "red";

obstacle25 = createSprite(227,40,10,50);// y velo
obstacle25.shapeColor = "red";
obstacle25.velocityY = 5;

obstacle26 = createSprite(200,352,240,10);
obstacle26.shapeColor = "red";

obstacle27 = createSprite(302,72,10,100);//tilt
obstacle27.shapeColor = "red";
obstacle27.rotation = -30;

obstacle28 = createSprite(178,275,50,10);
obstacle28.shapeColor = "red";

boobytrap = createSprite(380,370,20,40);//dispenser
boobytrap.shapeColor = "blue";

wire = createSprite(305,375,0.001,30);//tripwire

obstacle31 = createSprite(65,107,50,10);//x velo
obstacle31.velocityX = -5;
obstacle31.shapeColor = "red";

key1 = createSprite(25,230,10,10);
key1.shapeColor = "green";

key3 = createSprite(228,178,10,10);
key3.shapeColor = "gold"

TopWall = createSprite(185,0,440,10); 

BottomWall = createSprite(185,400,440,10);

LeftWall = createSprite(-30,200,10,400);

RightWall = createSprite(400,200,10,400);

barrier = createSprite(100,260,50,10);
barrier.visible = false;

barrier2 = createSprite(100,125,50,10);
barrier2.visible = false;

oofGroup = createGroup();
keyGroup = new Group();

lava = createSprite(200,800,700,700);
lava.shapeColor = "orange";

portal = createSprite(390,10,10,10);
portal.shapeColor = "purple";

portalGroup = createGroup();
portalGroup.add(portal);
}

function lv1Draw(){

movement(2.3);
obstacle23.rotation = obstacle23.rotation+3;
obstacle19.rotation = obstacle19.rotation-5;
obstacle27.rotation = obstacle27.rotation+3;

Lv1Touch();

text("Life Left: " + life, noble.x-35, noble.y-10);

oof();

if(spawnX===17 && spawnY === 194){
    text("Grab the green key!",80,220);
}

    obstacle11.bounceOff(barrier);
    obstacle11.bounceOff(barrier2);
    obstacle31.bounceOff(LeftWall);
    obstacle31.bounceOff(obstacle10);
    obstacle25.bounceOff(TopWall);
    obstacle25.bounceOff(obstacle17);
    obstacle6.bounceOff(LeftWall);
    obstacle6.bounceOff(obstacle4);


if(noble.isTouching(wire)){
    oofThing = createSprite(364,380,10,5);
    oofThing.velocityX = -8;
    oofThingy = createSprite(100,362,10,5)
    oofThingy.velocityX = 8;
    oofGroup.add(oofThingy);   
    oofGroup.add(oofThing);
    oofGroup.setLifetimeEach(40); 
}

if(noble.isTouching(key1)){
    key1.destroy();
    key2 = createSprite(10,10,10,10);
    key2.shapeColor = "blue";
    keyGroup.add(key2);
    spawnX = 23;
    spawnY = 230;
}


if(spawnX===23 && spawnY === 230){
    look();
    text("Key2 is somewhere in the top left hand corner of the map!",10, 390);
    text("That orange thing is lava! It will rise after getting Key2!",10,450);
    text("The gold key opens after you touch Key2",10,-10); 
}

if(keyGroup.isTouching(noble)){
    keyGroup.destroyEach();   
    obstacle14.destroy();
    lava.velocityY = -1.2;
    alert("Lava is rising! Get the gold key, touch the purple portal, and escape!");
}

if(noble.isTouching(key3)){
    key3.destroy();
    obstacle12.destroy();
    obstacle13.destroy();
}

if(noble.isTouching(lava)){
    gs = "end";
}

if(noble.isTouching(portal)){
    gs = "win";
}

}


function start(){
    if (gs==="start"){
        text("Welcome to Maze Runner! Move with WASD or Arrow keys.",10,100);
        text("Further instructions will be displayed. Anything in red will hurt you!",20,200)
        text("Press A to begin game!",10,300);

        if(keyWentDown("a")){
        gs = "lv1"
        lv1();
        }
    }
    
    if(gs === "lv1"){
        Lv1Touch();
        lv1Draw();
    }

    if(life===0){
        gs = "end";
    }

    if(gs==="win"){
        yeetLv1();
        alert("You escaped... A new trial of your chosing awaits you...");
        
            if (window.confirm('Ok for first trial, Cancel for second trial')){
                window.open('https://worldtortise20.github.io/New_Trex/','_blank');
             }
        else{
            window.open('https://worldtortise20.github.io/New_Ghost_Jumper/','_blank');
        }
    }

    if(gs==="end"){
        yeetLv1();
        camera.x = 200;
        camera.y = 200;
        textSize(14);
        fill("red");
        text("Mission failed.... Reload Game (ctrl+r) to get em next time!",20,200);
    }

}

function yeetLv1(){
    noble.destroy();
    obstacle1.destroy();
    obstacle2.destroy();
    obstacle3.destroy();
    obstacle4.destroy();
    obstacle5.destroy();
    obstacle6.destroy();
    obstacle7.destroy();
    obstacle8.destroy();
    obstacle9.destroy();
    obstacle10.destroy();
    obstacle11.destroy();
    obstacle12.destroy();
    obstacle13.destroy();
    obstacle14.destroy();
    obstacle15.destroy();
    obstacle16.destroy();
    obstacle17.destroy();
    obstacle18.destroy();
    obstacle19.destroy();
    obstacle20.destroy();
    obstacle21.destroy();
    obstacle22.destroy();
    obstacle23.destroy();
    obstacle24.destroy();
    obstacle25.destroy();
    obstacle26.destroy();
    obstacle27.destroy();
    obstacle28.destroy();
    obstacle31.destroy();
    TopWall.destroy();
    boobytrap.destroy();
    wire.destroy();
    BottomWall.destroy();
    LeftWall.destroy();
    RightWall.destroy();
    key1.destroy();
    key3.destroy();
    lava.destroy();
    barrier.destroy();
    barrier2.destroy();
    portal.destroy();
}