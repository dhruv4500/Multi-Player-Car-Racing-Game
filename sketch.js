var form;
var gameState=0;
var playerCount=0;
var database;
var player;
var game;
var allPlayers;
var car1,car2,car3,car4,cars;
var carImg1,carImg2,carImg3,carImg4,groundImg,trackImg

function preload(){

    carImg1=loadImage("images/car1.png");
    carImg2=loadImage("images/car2.png");
    carImg3=loadImage("images/car3.png");
    carImg4=loadImage("images/car4.png");
    groundImg=loadImage("images/ground.png");
    trackImg=loadImage("images/track.jpg")
    

}

function setup(){
    createCanvas(displayWidth,displayHeight);
    database=firebase.database();

    game=new Game();
    game.getGameState();
    game.start();
   // game.update(5);
    
    //console.log(database);
}

function draw(){
    background(groundImg);

    if(playerCount>=4){
        gameState=1;
        game.update(gameState);
        //console.log("true work")
    }

    if(gameState==1){
        clear();
        game.play();
    }
    
    if(gameState==2){
        game.end();
    }
    
}