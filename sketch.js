
var play =1 ;
var end =0;
var gamestate = play

var zombie;
var oruga;
var fondo;
var suelo;

function preload(){


}

function setup() {

createCanvas(600, 300);
suelo=createSprite(300,280,600,20);
oruga=createSprite(50,250,20,20);
fondo=createSprite(200,50,30,20);

grupoZombies = new Group();
suelo.visible = false;

}

function draw() {
 background("lightblue");

oruga.collide(suelo);
oruga.velocityY = oruga.velocityY + 1;

salenZombies();

if(gamestate === play){

    
        
   
    
    if(keyDown("space")&& oruga.y >= 250) {
        oruga.velocityY = -12;
            
        }

    // Esta indicación hace el cambio de juego.
    if(grupoZombies.isTouching(oruga)){
 
        gamestate = end;    
            
    }
    
} //fin de la llave del estado play

else if (gamestate === end){
    


    
    if(mousePressedOver(restart)) {
        reset();
      }
      
}

 drawSprites();
}

function salenZombies(){

    if (frameCount % 60 === 0){

        zombie=createSprite(600,100,30,20);
        zombie.velocityX = -5;
        zombie.lifetime = 300;
       grupoZombies.add(zombie);
        }
       
}

function reset(){
    gamestate = play
    zombie.destroyEach(); 
    
    }