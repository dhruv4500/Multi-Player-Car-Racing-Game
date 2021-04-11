class Form{
    constructor(){

        this.title=createElement("h1");
        this.title2=createElement("h2");

        this.input=createInput("Enter Your Name");

        this.button=createButton("Submit");

        this.text=createElement("h2");

        this.reset=createButton("Reset");
    }

    display(){
        
        this.title.html("Car Racing Game");
        this.title.position(width/2,20);

        this.title2.html("Login Here...");
        this.title2.position(500,120)

    
        this.input.position(550,300);

        this.button.position(660,340);

        this.reset.position(1350,100);

        this.reset.mousePressed(()=>{

            gameState=0;
            game.update(0);
            playerCount=0;
            player.updateCount(0);
            Player.updateRank(0);

        })

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            
            var name=this.input.value();
            this.text.html("Hello"+" "+name);
            this.text.position(560,300);
            playerCount+=1;
            player.index=playerCount;
            player.updateCount(playerCount);
            player.name=name;
            player.updatePlayerDetails();
        })
    }

    hide(){
        this.text.hide();
        this.title2.hide();
        this.input.hide();
        this.button.hide();
    }
}