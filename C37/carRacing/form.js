class Form{
    constructor(){
        this.input=createInput("Name");
        this.button=createButton("Play");
        this.greeting=createElement('h2');
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
    display(){
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(350,0);

        var input=createInput("Name");
        var button=createButton("Play");
        var greeting=createElement('h3');
        input.position(350,160);
        button.position(400,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount=playerCount+1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello!!!"+name);
            greeting.position(400,160);
        })
    }
}