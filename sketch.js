var spawnX = 17;
var spawnY = 194;

var noble, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, obstacle8, obstacle9, obstacle10, obstacle11, obstacle12, obstacle13, obstacle14, obstacle15, obstacle16, obstacle17, obstacle18, obstacle19, obstacle20, obstacle21, obstacle22, obstacle23, obstacle24, obstacle25, obstacle26, obstacle27, obstacle28, obstacle29, boobytrap, wire, obstacle30, obstacle31, key1, camera, oofThing, oofThingy, oofGroup;
var key2, key3, keyGroup, portal, portalGroup;

var gs = "start";
var life = 3;
var lava;
var reminder = "no";

var BottomWall, TopWall, LeftWall, RightWall;


function setup(){
createCanvas(400,400);

}

function draw(){
    background("lightgreen");

 start();

drawSprites();
}