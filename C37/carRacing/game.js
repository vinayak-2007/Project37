//getState()  :- read the GS from the DB
//.ref()  :- it will refer the database
//.on()  :- listen the updates
//.val()  :- helps to add a value
//update(state)  :- update the GS in the DB 
//databaseReference.on()  :- creates a listener which keeps listining to the GS frome theDB
//databaseReference.update("/")  :- update the DB 
//DOM :- Document Object Model
class Game{
    constructor(){}

        getState(){
            var gameStateRef= database.ref('gameState');
            gameStateRef.on("value",function(data){
                gameState=data.val();

            })
        
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })

        
    }
    start(){
        if(gameState===0){
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();

        }
        
    }
    play(){
        form.hide();
        textSize(30);
        text("GameStat",120,100);
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
        var display_position=130;
        for(var plr in allPlayers){
            if(plr==="player"+player.index)
            fill("red");
            else fill("black");
        }
        }
    }
}