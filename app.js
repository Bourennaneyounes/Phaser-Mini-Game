var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug : false
        },
        inputEnabled : true
    },
    scene: { preload: preload, create: create, update: update }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('road' , 'assets/road.jpg');
    this.load.image('sideRoad' , 'assets/sideRoad.jpg');
    this.load.image('background',  'assets/background.jpg');
    this.load.image('player', 'assets/player.png');
    this.load.image('wall_h','assets/wall_h.jpg');
    this.load.image('wall_v','assets/wall_v.jpg');
    this.load.image('redCarUp','assets/red_car_up.jpg');
    this.load.image('redCarDown','assets/red_car_down.jpg');
    this.load.image('purpleCarUp','assets/purple_car_up.png');
    this.load.image('purpleCarDown','assets/purple_car_down.png');
    ///////////////////////////////////////////////
    this.load.image('redCarRight','assets/red_car_right.jpg');
    this.load.image('redCarLeft','assets/red_car_left.jpg');
    this.load.image('purpleCarRight','assets/purple_car_right.png');
    this.load.image('purpleCarLeft','assets/purple_car_left.png');
    //////////////////////////////////////
    this.load.image('passagePieton_h','assets/passagePieton_h.jpg');
    this.load.image('passagePieton_v','assets/passagePieton_v.jpg');
    this.load.spritesheet('dude', 'assets/dude.png', 
    { frameWidth: 32, frameHeight: 48 });
   
  
}
var platforms;
var cursors;
var player;
var walls;
var passages
var redCarUp;
var redCarDown;
var purpleCarUp;
var purpleCarDown;
///////////////////////////
var redCarRight;
var redCarLeft;
var purpleCarRight;
var purpleCarLeft;
/////////////////////////
var graphics = this.graphics;
function createSideRoad(){
    platforms.create(100,80, 'sideRoad').setScale(1).refreshBody();
    platforms.create(100,320, 'sideRoad').setScale(1).refreshBody();
    platforms.create(100,560, 'sideRoad').setScale(1).refreshBody();
    /////////////////////////////////////////////////////////////////
    platforms.create(400,80, 'sideRoad').setScale(1).refreshBody();
    platforms.create(400,320, 'sideRoad').setScale(1).refreshBody();
    platforms.create(400,560, 'sideRoad').setScale(1).refreshBody();
    /////////////////////////////////////////////////////////////////
    platforms.create(700,80, 'sideRoad').setScale(1).refreshBody();
    platforms.create(700,320, 'sideRoad').setScale(1).refreshBody();
    platforms.create(700,560, 'sideRoad').setScale(1).refreshBody();
}
function createPassageP(){
    passages.create(250,120, 'passagePieton_h').setScale(0.7).refreshBody();
    passages.create(550,120, 'passagePieton_h').setScale(0.7).refreshBody();
    passages.create(250,360, 'passagePieton_h').setScale(0.7).refreshBody();
    passages.create(550,360, 'passagePieton_h').setScale(0.7).refreshBody();
    passages.create(550,520, 'passagePieton_h').setScale(0.7).refreshBody();
    passages.create(250,520, 'passagePieton_h').setScale(0.7).refreshBody();

/////////////////////////////////////////////////////
    passages.create(170,200, 'passagePieton_v').setScale(0.7).refreshBody();
    passages.create(170,440, 'passagePieton_v').setScale(0.7).refreshBody();
    passages.create(460,200, 'passagePieton_v').setScale(0.8).refreshBody();
    passages.create(460,440, 'passagePieton_v').setScale(0.8).refreshBody();
    passages.create(750,200, 'passagePieton_v').setScale(0.7).refreshBody();
    passages.create(750,440, 'passagePieton_v').setScale(0.7).refreshBody();
    



}
function createWalls(){
     var j=0;
     while(j<600){
        for(var i = 0;i<120;i++){
            walls.create(10+i,175+j, 'wall_h').setScale(0.1).refreshBody();
            walls.create(290+i,175+j, 'wall_h').setScale(0.1).refreshBody();
            walls.create(588+i,175+j, 'wall_h').setScale(0.1).refreshBody();
        }
        walls.create(210,175+j, 'wall_h').setScale(0.1).refreshBody();
        walls.create(512,175+j, 'wall_h').setScale(0.1).refreshBody();
        walls.create(783,175+j, 'wall_h').setScale(0.1).refreshBody();
     
     j = j +240;
     }
     ///////////////////
     var k=0;
     while(k<800){
        for(var i = 0;i<80;i++){
            walls.create(228+k,i, 'wall_v').setScale(0.1).refreshBody();
            walls.create(228+k,240+i, 'wall_v').setScale(0.1).refreshBody();
            walls.create(228+k,550+i, 'wall_v').setScale(0.1).refreshBody();
        }
        walls.create(228+k,160, 'wall_v').setScale(0.1).refreshBody();
        walls.create(228+k,400, 'wall_v').setScale(0.1).refreshBody();
        walls.create(228+k,480, 'wall_v').setScale(0.1).refreshBody();
        
     k = k +300; 
    }
    ///////////////////////
    var z=0;
    while(z<600){
        for(var i = 0;i<120;i++){
            walls.create(10+i,225+z, 'wall_h').setScale(0.1).refreshBody();
            walls.create(290+i,225+z, 'wall_h').setScale(0.1).refreshBody();
            walls.create(588+i,225+z, 'wall_h').setScale(0.1).refreshBody();
        }
        walls.create(210,225+z, 'wall_h').setScale(0.1).refreshBody();
        walls.create(512,225+z, 'wall_h').setScale(0.1).refreshBody();
        walls.create(783,225+z, 'wall_h').setScale(0.1).refreshBody();
     
     z = z +240;
     }
     //////////////////////////////////
     var l=0;
     while(l<800){
        for(var i = 0;i<80;i++){
            walls.create(272+l,i, 'wall_v').setScale(0.1).refreshBody();
            walls.create(272+l,240+i, 'wall_v').setScale(0.1).refreshBody();
            walls.create(272+l,550+i, 'wall_v').setScale(0.1).refreshBody();
        }
        walls.create(272+l,160, 'wall_v').setScale(0.1).refreshBody();
        walls.create(272+l,400, 'wall_v').setScale(0.1).refreshBody();
        walls.create(272+l,480, 'wall_v').setScale(0.1).refreshBody();
        
     l = l +300; 
    }

     
}

function collusion(){
    /////////////1er intersection
    ////////////////////red left and purple down
    if((redCarLeft.x>170 && redCarLeft.x<330 ) &&
       (purpleCarDown.y>150 && purpleCarDown.y<250)){
           purpleCarDown.setVelocityY(0);
        }else{
            purpleCarDown.setVelocityY(150); 
        }
        ///////////////////////////////////// red left red up
        if((redCarLeft.x>200 && redCarLeft.x<300 ) &&
       (redCarUp.y>150 && redCarUp.y<250)){
           redCarLeft.setVelocityX(0);
        }else{
            redCarLeft.setVelocityX(+150); 
        }
        ////////////////////////////////////// purple right purple down
        if((purpleCarRight.x>200 && purpleCarRight.x<300 ) &&
        (purpleCarDown.y>150 && purpleCarDown.y<250)){
            purpleCarRight.setVelocityX(0);
         }else{
             purpleCarRight.setVelocityX(-150); 
         }
         ////////////////////////////////////red up purple right
         if((purpleCarRight.x>200 && purpleCarRight.x<300 ) &&
        (redCarUp.y>150 && redCarUp.y<250)){
            redCarUp.setVelocityY(0);
         }else{
            redCarUp.setVelocityY(-150); 
         }
        ////////////////////////////////////////////
      //  2eme intersection
        ////////////////red Right and purple down
    if((redCarRight.x>200 && redCarRight.x<300 ) &&
    (purpleCarDown.y>400 && purpleCarDown.y<500)){
        redCarRight.setVelocityX(0);
     }else{
         redCarRight.setVelocityX(-150); 
     }
     ///////////////////////////////////// red Right red up
     if((redCarRight.x>200 && redCarRight.x<300 ) &&
    (redCarUp.y>400 && redCarUp.y<500)){
        redCarUp.setVelocityY(0);
     }else{
         redCarUp.setVelocityY(-150); 
     }
     ////////////////////////////////////// purple left purple down
     if((purpleCarLeft.x>200 && purpleCarLeft.x<300 ) &&
     (purpleCarDown.y>400 && purpleCarDown.y<500)){
         purpleCarDown.setVelocityY(0);
      }else{
          purpleCarDown.setVelocityY(150); 
      }
      ////////////////////////////////////red up purple left
      if((purpleCarLeft.x>200 && purpleCarLeft.x<300 ) &&
     (redCarUp.y>400 && redCarUp.y<500)){
         purpleCarLeft.setVelocityX(0);
      }else{
         purpleCarLeft.setVelocityX(150); 
      }
// //   /////////////////////////////////////////////////////////
// //   //// 3eme intersection
// //    ////////////////////red left and purple Up
  if((redCarLeft.x>500 && redCarLeft.x<600 ) &&
       (purpleCarUp.y>150 && purpleCarUp.y<250)){
           redCarLeft.setVelocityX(0);
        }else{
            redCarLeft.setVelocityX(150); 
        }
        ///////////////////////////////////// red left red down
        if((redCarLeft.x>500 && redCarLeft.x<600 ) &&
       (redCarDown.y>150 && redCarDown.y<250)){
           redCarDown.setVelocityY(0);
        }else{
            redCarDown.setVelocityY(+150); 
        }
        ////////////////////////////////////// purple right purple up
        if((purpleCarRight.x>500 && purpleCarRight.x<600 ) &&
        (purpleCarUp.y>150 && purpleCarUp.y<250)){
            purpleCarUp.setVelocityY(0);
         }else{
             purpleCarUp.setVelocityY(-150); 
         }
         ////////////////////////////////////red down purple right
         if((purpleCarRight.x>500 && purpleCarRight.x<600 ) &&
        (redCarDown.y>150 && redCarDown.y<250)){
            purpleCarRight.setVelocityX(0);
         }else{
            purpleCarRight.setVelocityX(-150); 
         }
// //    //// 4eme intersection
// //    ////////////////////red left and purple Up
   if((redCarLeft.x>500 && redCarLeft.x<600 ) &&
   (purpleCarUp.y>150 && purpleCarUp.y<250)){
       redCarLeft.setVelocityX(0);
    }else{
        redCarLeft.setVelocityX(150); 
    }
    ///////////////////////////////////// red right red down
    if((redCarRight.x>500 && redCarRight.x<600 ) &&
   (redCarDown.y>150 && redCarDown.y<250)){
       redCarRight.setVelocityX(0);
    }else{
        redCarRight.setVelocityX(-150); 
    }
    ////////////////////////////////////// purple left purple up
    if((purpleCarLeft.x>500 && purpleCarLeft.x<600 ) &&
    (purpleCarUp.y>150 && purpleCarUp.y<250)){
        purpleCarLeft.setVelocityX(0);
     }else{
         purpleCarLeft.setVelocityX(150); 
     }
     ////////////////////////////////////red down purple left
     if((purpleCarLeft.x>500 && purpleCarLeft.x<600 ) &&
    (redCarDown.y>150 && redCarDown.y<250)){
        redCarDown.setVelocityY(0);
     }else{
        redCarDown.setVelocityY(150); 
     }
}

function create ()
{
    
////////////////////////////////////////////////
    this.add.image(400,300,'background');
    platforms = this.physics.add.staticGroup();
    walls = this.physics.add.staticGroup();
    passages = this.physics.add.staticGroup();
    createSideRoad();
    createWalls();
    createPassageP();
   /////////////////////////////////////////////////////////////
    player = this.physics.add.sprite(100, 280, 'dude');
    
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

   this.physics.add.collider(player, walls); 

    cursors = this.input.keyboard.createCursorKeys(); 
    //////////////////////////////////////////////////////// 
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start : 0 , end : 3 }),
        frameRate: 10,
        repeat: -1
        });
       this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
            });
            redCarUp = this.physics.add.sprite(260, 570, 'redCarUp').setScale(0.6);
            redCarDown = this.physics.add.sprite(560, 20, 'redCarDown').setScale(0.6);
            purpleCarUp = this.physics.add.sprite(540, 570, 'purpleCarUp').setScale(0.6);
            purpleCarDown = this.physics.add.sprite(240, 20, 'purpleCarDown').setScale(0.6);
            ////////////////////////////////////////////////
            redCarRight = this.physics.add.sprite(780, 428, 'redCarRight').setScale(0.6);
            redCarLeft = this.physics.add.sprite(20, 212, 'redCarLeft').setScale(0.6);
            purpleCarRight = this.physics.add.sprite(780, 190,'purpleCarRight').setScale(0.6);
            purpleCarLeft = this.physics.add.sprite(20, 452, 'purpleCarLeft').setScale(0.6);
            //this.cameras.main.startFollow(player);
            ////////////////////////////////////////////


}

function update () { 
    if (cursors.left.isDown)
        {
             player.setVelocityX(-100);
             player.play('left', true); }
      if (cursors.right.isDown)
        {    player.setVelocityX(100);
             player.play('right', true);
        }
         if(cursors.down.isDown){
            player.setVelocityY(100);
            player.play('turn');
        } if (cursors.up.isDown) 
        { player.setVelocityY(-100); }
     if(cursors.up.isUp && cursors.down.isUp && cursors.right.isUp && cursors.left.isUp)
        {    player.setVelocityX(0);
            player.setVelocityY(0);
            player.play('turn');    
        }
        redCarUp.setVelocityY(-150);
        redCarDown.setVelocityY(150);
        if(redCarUp.y<0) redCarUp.y=570;
        if(redCarDown.y>600) redCarDown.y=0;

        purpleCarUp.setVelocityY(-150);
        purpleCarDown.setVelocityY(150);
        if(purpleCarUp.y<0) purpleCarUp.y=570;
        if(purpleCarDown.y>600) purpleCarDown.y=0;

        redCarRight.setVelocityX(-150);
        redCarLeft.setVelocityX(150);
        if(redCarRight.x<0) redCarRight.x=780;
        if(redCarLeft.x>800) redCarLeft.x=0;

        purpleCarRight.setVelocityX(-150);
        purpleCarLeft.setVelocityX(150);
        if(purpleCarRight.x<0) purpleCarRight.x=780;
        if(purpleCarLeft.x>800) purpleCarLeft.x=0;
        
        collusion();
   
    
     
}
