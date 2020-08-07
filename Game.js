class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }


    h1 = createSprite(2675, 270, 1, 150);
    h1.addImage(hi);
    h1.scale = 0.4;

    h2 = createSprite(2650, 313, 20, 150);
    h2.addImage(hi);
    h2.scale = 0.4;

    h3 = createSprite(2625, 356, 20, 150);
    h3.addImage(hi);
    h3.scale = 0.4;

    h4 = createSprite(2600, 399, 20, 150);
    h4.addImage(hi);
    h4.scale = 0.4;

    

    h5 = createSprite(4560, 270, 20, 150);
    h5.addImage(hi);
    h5.scale = 0.4;

    h6 = createSprite(4535, 313, 20, 150);
    h6.addImage(hi);
    h6.scale = 0.4;

    h7 = createSprite(4510, 356, 20, 150);
    h7.addImage(hi);
    h7.scale = 0.4;

    h8 = createSprite(4485, 399, 20, 150);
    h8.addImage(hi);
    h8.scale = 0.4;


    
    h9 = createSprite(6445, 270, 20, 150);
    h9.addImage(hi);
    h9.scale = 0.4;

    h10 = createSprite(6420, 313, 20, 150);
    h10.addImage(hi);
    h10.scale = 0.4;

    h11 = createSprite(6395, 356, 20, 150);
    h11.addImage(hi);
    h11.scale = 0.4;

    h12 = createSprite(6370, 399, 20, 150);
    h12.addImage(hi);
    h12.scale = 0.4;



    runner1 = createSprite(100,265);
    runner1.addAnimation("runner1", ri1);
    runner1.scale = 1.5;

    runner2 = createSprite(100,308);
    runner2.addAnimation("runner2", ri2);
    runner2.scale = 1.5;

    runner3 = createSprite(100,351);
    runner3.addAnimation("runner3", ri3);
    runner3.scale = 1.5;

    runner4 = createSprite(100,394);
    runner4.addAnimation("runner4", ri4);
    runner4.scale = 1.5;



    


































    

    runners = [runner1, runner2, runner3, runner4];

    
  }

  play(){
    form.hide();

    Player.getPlayerInfo();

    player.getRunnersAtEnd();
    
    if(allPlayers !== undefined){
      
      background("#3BAB21");
      track = image(trackImg, 735, 0, 0, displayHeight-300);

      

      var index = 0;

      var x;

      for(var plr in allPlayers){
        
        index = index + 1 ;

        x = displayWidth-300 + allPlayers[plr].distance;
        runners[index-1].x = x;

        

        if (index === player.index){
          runners[index - 1].shapeColor = "red";
          camera.position.x = runners[index-1].x;
          camera.position.y = displayHeight-522;
        }
      
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10;
      player.update();
    }

    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distance -=10;
      player.update();
    }

    if(player.distance > 6800){
      gameState = 2;
      player.rank +=1;
      Player.updateRunnersAtEnd(player.rank);
    }


    if(runner1.collide(h1)){
      gameState = 2;
    }
    if(runner2.collide(h2)){
      gameState = 2;
    }
    if(runner3.collide(h3)){
      gameState = 2;
    }
    if(runner4.collide(h4)){
      gameState = 2;
    }
    if(runner1.collide(h5)){
      gameState = 2;
    }
    if(runner2.collide(h6)){
      gameState = 2;
    }
    if(runner3.collide(h7)){
      gameState = 2;
    }
    if(runner4.collide(h8)){
      gameState = 2;
    }
    if(runner1.collide(h9)){
      gameState = 2;
    }
    if(runner2.collide(h10)){
      gameState = 2;
    }
    if(runner3.collide(h11)){
      gameState = 2;
    }
    if(runner4.collide(h12)){
      gameState = 2;
    }
    

    if (keyCode === 32) {
      runner1.velocityY = runner1.velocityY - 10;
    }


    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }

}
