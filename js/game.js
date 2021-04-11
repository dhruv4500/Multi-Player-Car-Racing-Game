class Game{
    constructor(){

    }

    getGameState(){
        var databaseRef=database.ref("gameState");
        databaseRef.on("value",function(data){
            gameState=data.val();
        })
    }

    update(state){
        database.ref("/").update({
            'gameState':state
        })
       // console.log("great")
    }

    start(){
 if(gameState==0){
    form=new Form();
    form.display();

    player=new Player();
    player.getCount();

    
        }

    car1=createSprite(100,550,50,100);
    car2=createSprite(200,550,50,100);
    car3=createSprite(300,550,50,100);
    car4=createSprite(400,550,50,100);

    car1.addImage(carImg1);
    car2.addImage(carImg2);
    car3.addImage(carImg3);
    car4.addImage(carImg4);

    cars=[car1,car2,car3,car4];
    }
    play(){
        form.hide();
        textSize(30);
        text("Game Started",width/2,50)
        Player.getPlayerInfo();
        player.getRank();
        if(allPlayers!==undefined){
            image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
            var index=0;
            var yPos=100;
            textSize(15);
            var distance=0;
            var xVal=120;
            for(var i in allPlayers){
                index+=1;
                distance=displayHeight-allPlayers[i].distance;
                xVal+=250
                cars[index-1].y=distance;
                cars[index-1].x=xVal;
                if(player.index==index){
                cars[index-1].shapeColor="red";
                fill("red");
                ellipse(cars[index-1].x,cars[index-1].y,80);
               // camera.position.x=displayWidth/2;
                camera.position.y=cars[index-1].y;

                }
                if(i==="player"+player.index){
                    fill("red");

                }else{
                    fill("black")
                }
                text(allPlayers[i].name+"  :  "+allPlayers[i].distance,50,yPos)
                yPos+=20;
            }

            

            drawSprites();

        }

        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=50;
            player.updatePlayerDetails();
        }

        if(player.distance>4200){
            gameState=2;
            game.update(2);
            //player.distance=0;
            player.rank+=1;
            Player.updateRank(player.rank);
        }
    }

    end(){
        console.log("end");
        console.log(player.rank);
    }
}