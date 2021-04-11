class Player{
    constructor(){

        this.index=null;
        this.distance=0;
        this.name=null;
        this.rank=0;
    }

    getCount(){
        var databaseRef=database.ref("playerCount");
        databaseRef.on("value",function(data){
            playerCount=data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            'playerCount':count
        })
    }

    updatePlayerDetails(){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).update({
            'name': this.name,
            'distance':this.distance
        })
    }

    static getPlayerInfo(){
        var playersRef=database.ref("players");
        playersRef.on("value",(data)=>{
            allPlayers=data.val();
        })
    }

    static updateRank(rank){
        database.ref("/").update({
            'allRank':rank
        })
    }

    getRank(){
        var databaseRef=database.ref("allRank");
        databaseRef.on("value",(data)=>{
            this.rank=data.val();
        })
    }

    
}