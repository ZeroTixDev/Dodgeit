class Display{
 constructor(){
  this.spawnedButtons = false;
   this.buttons =[];
   this.spawnedFades = false;
   this.fades=[];
   this.activatedFades = false;
   this.fadesOnScreen = 0;
   this.touchedHeros = false;
   this.heroIndex = 0;
   this.endScreen = false;
 }
  menu(dt){
   /*background(herocolors[currentHero].r,herocolors[currentHero].g,herocolors[currentHero].b)
textFont("Maven Pro");
  stroke(0);
  strokeWeight(2)
 rect(win.x/2-200,win.y/2+200,400,50);
  textSize(90);
  text("Dodge It",win.x/2-180,150);
  textSize(20);
  strokeWeight(1);
  text("I'm not responsible for any damage that happens to your computer. This is a rage game.",win.x/2-320,200);
  textSize(30);
  textFont("Georgia");
  text("PLAY",win.x/2-50,win.y/2+235);
  rect(50,305,200,50);
  text(`Hero:${heros[currentHero]}`,50,295);
  textFont("Helvetica");
  text(`Switch Hero`,60,340);
  rect(win.x-250,305,200,50);
  text(`Switch Mode`,win.x-240,340);
  text(`Mode:${modes[mode]}`,win.x-245,300);
  textSize(25);
  text(`WASD/Arrows keys to move:P to toggle outline:J and K or Z and X to use abilites:Good luck`,win.x/2-500,win.y-20);

//  fill(255);
  textSize(20)
  strokeWeight(1.5);

  textSize(20);
  stroke(0);
  strokeWeight(1.5);
  if(heros[currentHero] !== 0){
    if(heros[currentHero] == "Magmax"){
    text(`Magmax's Abilites\nJ or Z to flow(makes you go 2x faster)\nK or X to harden(makes you invincible but you can't move and you \ncan harden up to 4 seconds with a cooldown of 3 seconds)`,win.x/2-300,win.y/2+100);
}else if(heros[currentHero] == "Jotunn"){
  text(`Jotunn's Abilites\nPassive Ability: If enemies are near you, they get 60% slower(Some enemies\naren't affected)\nShard Ability: K or Z to shatter enemies away(Some enemies aren't affected)`,win.x/2-300,win.y/2+100);
}else if(heros[currentHero] == "Kopo"){
  text(`Kopo's Abilites\nSmol: J or Z to make itself smaller\nDome Hole!(DH) : K or X to place down an aura(which traps enemies for a certain\namount of time and cannot kill you in the aura) when your smol`,win.x/2-300,win.y/2+100);
}
  }
  if(mouseX>50 && mouseX < 250 && mouseY>305 && mouseY<355 && !switchHeroLock){
    if(mouseP){
    switchHeroLock = true;
    if(heros.length-1 == currentHero){
     currentHero = 0; 
    }else{
    currentHero++;
    }
    }
  }else if(!mouseP){
   switchHeroLock = false; 
  }
  if(mouseX>win.x/2-200 && mouseX < win.x/2+200 && mouseY>win.y/2 +200&& mouseY<win.y/2+250 && mouseP){
   mainMenu = false; 
    game.player.heroProperties(heros[currentHero]);
    game.loadLevel();
  }
  if(mouseX<win.x-50 && mouseX>win.x-250 && mouseY>305 && mouseY<355&& !switchModeLock&& mouseP){
    switchModeLock = true;
   if(mode == modes.length-1){
    mode = 0; 
   }else{
    mode++; 
   }
  }
  if(!mouseP){
   switchModeLock = false; 
  } 
  */
   
    if(!this.spawnedButtons){
     this.spawnedButtons = true;
      this.buttons = [new MenuButton(win.x/2-100,win.y/2+win.y/4,0,-6,0,win.y/2-win.y/18,"Magmax"),new MenuButton(win.x/2,win.y/2+win.y/4,0,-7,0,win.y/2-win.y/18,"Jotunn"),new MenuButton(win.x/2+100,win.y/2+win.y/4,0,-8,0,win.y/2-win.y/18,"Kopo")]
    }
    if(!this.touchedHeros){
    ctx.fillStyle = "rgb(205,205,205)"
    }else if(this.touchedHeros){
     ctx.fillStyle = `rgba(${herocolors[this.heroIndex].r-10},${herocolors[this.heroIndex].g-10},${herocolors[this.heroIndex].b-10},0.3)`
    }
    ctx.fillRect(0,0,win.x,win.y);
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.strokeStyle ="black"
    ctx.lineWidth = (5);
    ctx.fillRect(1.5,win.y/2-win.y/4,win.x-5,win.y/2);
    ctx.font = " 45px Trebuchet MS"
 //   noStroke();
    ctx.fillStyle = "rgb(25, 213, 255)"
 //   text("Dodge It",win.x/2-140,win.y/6);
    ctx.drawImage(imgLogo,win.x/2-270,-100,550,450);
      this.touchedHeros=false; 
    for(let button of this.buttons){
     button.simulate(dt); 
      if(button.touched){
       this.touchedHeros=true; 
        if(button.type=="Magmax"){
         this.heroIndex = 0; 
        }
        if(button.type=="Jotunn"){
         this.heroIndex = 1; 
        }
        if(button.type=="Kopo"){
         this.heroIndex = 2; 
        }
      }
      if(mouseP&&button.sa>1&&!this.spawnedFades){
        this.activatedFades = true;
       if(button.type=="Magmax"){
         currentHero=0; 
        }else if(button.type=="Jotunn"){
         currentHero=1; 
        }else if(button.type=="Kopo"){
         currentHero=2;
        }
      }
    }
    if(this.activatedFades){
     this.spawnedFades = true;
     this.activatedFades = false;
      this.fades =[new Fade(win.x,0,-15,0,0,0,win.x*2,win.y/3,"Magmax"),new Fade(win.x,win.y/3,-20,0,0,0,win.x*2,win.y/3,"Jotunn"),new Fade(win.x,win.y/3+win.y/3,-25,0,0,0,win.x*2,win.y/3,"Kopo")]
    }
     for(let fade of this.fades){
      fade.simulate(dt); 
       if(fade.pos.x<win.x/10&&!fade.counted){
         fade.counted = true;
        this.fadesOnScreen++; 
       }
     }
     
    if(this.fadesOnScreen===3){
         mainMenu = false; 
    game.player.heroProperties(heros[currentHero]);
    game.loadLevel();
    }   if(this.touchedHeros){
     ctx.fillStyle = `rgba(${herocolors[this.heroIndex].r-10},${herocolors[this.heroIndex].g-10},${herocolors[this.heroIndex].b-10},0.1)`
     ctx.fillRect(0,0,win.x,win.y);
    }
  }
  draw(game,fov,playerCamera,win,outline,dt){
  
    ctx.fillStyle="rgb(150,150,150)"
    if(game.zone === 0 ){
     ctx.fillStyle = "rgba(168,215,237,0.5)" 
    }else if(game.zone === 1){
     ctx.fillStyle = "rgba(4, 76, 105,0.5);"
    }else if(game.zone === 2){
     ctx.fillStyle = "rgba(200,41,0,0.35)"
    }else if(game.zone === 3 || game.zone ===4){
    ctx.fillStyle = "rgba(10,10,10,0.94)"
    }else if(game.zone === 5){
     ctx.fillStyle = "rgba(221, 204, 255,0.4)"
    }else if(game.zone === 6){
     ctx.fillStyle = "rgba(107, 27, 227,0.4)" 
    }else if(game.zone === game.hellZone){
      ctx.fillStyle = "rgba(40,40,40,0.94)"
    }
    ctx.fillRect(0,0,win.x,win.y);
    /* drawing map */
    if(outline){
     ctx.strokeStyle = "black"
      ctx.lineWidth = (2*fov)
    }
    ctx.fillStyle="rgb(200,200,200)"
    ctx.fillRect(win.x/2 + (0-playerCamera.x)*fov,win.y/2+(0-playerCamera.y)*fov,world.x*fov,world.y*fov);
    if(outline){
     ctx.strokeRect(win.x/2 + (0-playerCamera.x)*fov,win.y/2+(0-playerCamera.y)*fov,world.x*fov,world.y*fov);
    }
    if(game.zone ===0 ){
     ctx.fillStyle= "rgba(168, 215, 237,0.4)" 
    }else if(game.zone===1){
      ctx.fillStyle = "rgba(4, 76, 105,0.4)"
    }else if(game.zone === 2){
     ctx.fillStyle = "rgba(161, 61, 14,0.4)"
    }else if(game.zone === 3){
     ctx.fillStyle = "rgba(10,10,10,0.4)"
    }else if(game.zone === 4){
     ctx.fillStyle = "rgba(0,0,0,0.4)"
    }else if(game.zone === 5){
     ctx.fillStyle = "rgba(221, 204, 255,0.4)"
    }else if(game.zone === 6){
     ctx.fillStyle = "rgba(107, 27, 227,0.4)";
    }
    ctx.fillRect(win.x/2 + (0-playerCamera.x)*fov,win.y/2+(0-playerCamera.y)*fov,world.x*fov,world.y*fov);
    if(game.zone === game.hellZone){
     ctx.fillStyle="rgba(20,20,20,0.55)"
    }
      /* drawing safe zones */
    for(let safe of game.world.safes){
     ctx.fillRect(win.x/2+(safe.x-playerCamera.x)*fov,win.y/2+(safe.y-playerCamera.y)*fov,safe.w*fov, safe.h*fov); 
    }
    /* drawing teleporter*/
    ctx.fillStyle = "rgb(255,242,0)"
    for(let teleporter of game.world.teleporters){
    ctx.drawImage(imgTeleporter,win.x/2+(teleporter.x-playerCamera.x)*fov,win.y/2 + (teleporter.y-playerCamera.y)*fov,teleporter.w*fov,teleporter.h*fov);
    }
    ctx.fillStyle = "rgb(12, 250, 210)"
        for(let teleporter of game.world.areaTeleporters){
      if(teleporter.type=='side'){

        ctx.drawImage(imgSideTeleporter,win.x/2+(teleporter.x-playerCamera.x)*fov,win.y/2 + (teleporter.y-playerCamera.y)*fov,teleporter.w*fov,teleporter.h*fov);
      }else{
       ctx.drawImage(imgAreaTeleporter,win.x/2+(teleporter.x-playerCamera.x)*fov,win.y/2 + (teleporter.y-playerCamera.y)*fov,teleporter.w*fov,teleporter.h*fov);
      }
    }
   
    /* drawing enemies */
    ctx.lineWidth= 0;
    for(let enemy of game.enemies){
      if(enemy.type =='normal'){
          ctx.fillStyle = "rgb(100,100,100)"
      }else if(enemy.type == 'dasher'){
         ctx.fillStyle = "rgb(50,50,200)"
      }else if(enemy.type =='close'){
        ctx.strokeStyle = "black"
        if(!enemy.shatter||!enemy.canDie){
        ctx.lineWidth = (1*fov);
         ctx.fillStyle = "rgb(48, 182, 166)"
        }
      }else if(enemy.type == 'slowdown'){
         ctx.fillStyle = "rgb(212, 53, 32)"
        if(!enemy.shatter||!enemy.canDie){
        ctx.strokeStyle="black"
        ctx.lineWidth =(1*fov);
        }
      }else if(enemy.type == 'sniper'){
          ctx.fillStyle = "rgb(125, 79, 32)"
        //noStroke();
      }else if(enemy.type =='homing'){
         ctx.fillStyle = "rgb(219, 83, 24)"
      }else if(enemy.type == 'freeze'){
         ctx.fillStyle = "rgb(115, 24, 161)"
      }else if(enemy.type == 'exploder'){
         ctx.fillStyle = "rgb(142, 31, 148)"
      }else if(enemy.type =='border'){
         ctx.fillStyle = "rgb(0,0,0)"
      }else if(enemy.type == 'circle'){
              ctx.fillStyle = "rgb(112, 31, 4)"
      }else if(enemy.type == 'rotate'){
         ctx.fillStyle = "rgb(194, 160, 25)"
      }else if(enemy.type =='weird'){
         ctx.fillStyle = "rgb(22, 97, 9 )"
      }else if(enemy.type=='megaslow'){
         ctx.fillStyle = "rgb(27, 171, 152)" 
      }else if(enemy.type == 'sizing'){
         ctx.fillStyle = "rgb(237, 103, 0)"
      }else if(enemy.type == 'icicle'){
         ctx.fillStyle = "rgb(22, 167, 224)"
      }else if(enemy.type =='liquid'){
         ctx.fillStyle = "rgb(11, 117, 143)"
      }else if(enemy.type=='immune'){
         ctx.fillStyle = "rgb(10,10,10)" 
      }else if(enemy.type=="switch" && enemy.canDie){
         ctx.fillStyle = "rgba(50,50,50,0.94)"
      }else if(enemy.type=="switch" && !enemy.canDie){
         ctx.fillStyle = "rgba(120,120,120,0.45)"
      }
     
      if(enemy.shatter){
         ctx.fillStyle = "rgba(150,150,150, 0.7)"
       
      }
       if(outline){
         if(enemy.type=='switch' &&!enemy.canDie){
            ctx.strokeStyle= "rgba(120,120,120,0.29)"
         }
         if(enemy.shatter){
           ctx.strokeStyle="rgba(120,120,120,0.15)"
         }
         ctx.lineWidth = (2*fov) 
      }
      if(enemy.inAura){
         ctx.fillStyle = "rgba(110, 37, 37,0.8)"
      }
      ctx.beginPath();
    ctx.arc(win.x/2+(enemy.pos.x-playerCamera.x)*fov,win.y/2+(enemy.pos.y-playerCamera.y)*fov,enemy.size/2*fov,0,Math.PI*2);
      ctx.fill();
      if(outline){
       ctx.stroke(); 
      }
      if(enemy.slowdown &&(!enemy.shatter)){
        if(enemy.type=="switch"&&enemy.canDie){
         ctx.fillStyle = "rgba(99, 145, 148,0.78)"
          ctx.beginPath();
 ctx.arc(win.x/2+(enemy.pos.x-playerCamera.x)*fov,win.y/2+(enemy.pos.y-playerCamera.y)*fov,enemy.size/2*fov,0,Math.PI*2);
          ctx.fill();
        }else if(enemy.type!='border'&&enemy.type!='immune'){
            ctx.fillStyle= "rgba(59, 130, 245,0.6)"
          ctx.beginPath();
 ctx.arc(win.x/2+(enemy.pos.x-playerCamera.x)*fov,win.y/2+(enemy.pos.y-playerCamera.y)*fov,enemy.size/2*fov,0,Math.PI*2);
          ctx.fill();
        }
      }
      if(enemy.type =='close'){
  ctx.fillStyle="rgba(98, 252, 206, 0.1)"
      }else if(enemy.type == 'slowdown'){
        ctx.fillStyle="rgba(212,53,32,0.1)"
      }else if(enemy.type =='megaslow'){
        ctx.fillStyle="rgba(27, 171, 152,0.1)"
      }
      if(enemy.auraSize){
        ctx.beginPath();
      ctx.arc(win.x/2+(enemy.pos.x-playerCamera.x)*fov,win.y/2+(enemy.pos.y-playerCamera.y)*fov,enemy.auraSize/2*fov,0,Math.PI*2);
        ctx.fill();
      }
    }
    /* drawing bullets */
    
    if(outline){
       ctx.lineWidth = (2*fov) 
    }
    for(let bullet of game.bullets){
      if(bullet.type == 'freeze'){
         ctx.fillStyle = "rgb(55, 77, 176)"
      }else if(bullet.type == 'exploder'){
        ctx.fillStyle = "rgb(142, 31, 148)" 
      }else if(bullet.type=='normal'){
            ctx.fillStyle = "rgb(125, 79, 32)"
      }
      ctx.beginPath();
    ctx.arc(win.x/2+(bullet.pos.x-playerCamera.x)*fov,win.y/2+(bullet.pos.y-playerCamera.y)*fov,bullet.size/2*fov,0,Math.PI*2);
      ctx.fill()
      if(outline){
        ctx.stroke();
      }
      }
    /* drawing player */
    ctx.fillStyle= `rgb(${herocolors[currentHero].r},${herocolors[currentHero].g},${herocolors[currentHero].b})`
    if(game.player.hero=="Kopo"&&game.player.isSmall){
   ctx.fillStyle= `rgb(${herocolors[currentHero].r+50},${herocolors[currentHero].g+30},${herocolors[currentHero].b+30})`
    }
    if(game.player.flow){
     ctx.fillStyle="rgb(232, 124, 0)"
    }else if(game.player.harden){
     ctx.fillStyle="rgb(84, 37, 37)"
    }
    if(game.player.freezed){
      ctx.fillStyle="rgb(30, 58, 217)"
    }
    ctx.beginPath();
    ctx.arc(win.x/2,win.y/2,game.player.radius*fov,0,Math.PI*2);
    ctx.fill();
    if(game.player.hero == "Kopo" && game.player.isSmall){
    
    for(let i = game.player.history.length-1; i>=0;i--){
  
       ctx.fillStyle = `rgba(${herocolors[currentHero].r+(i/2)},${herocolors[currentHero].g+(i/4)},${herocolors[currentHero].b+(i/4)},${0.5*(i/60)})`
    if(game.player.freezed){
      ctx.fillStyle="rgb(30, 58, 217)"
    }
    if(game.player.firstFreeze){
     ctx.fillStyle="rgb(146, 44, 184)"
    }
      ctx.beginPath();
     ctx.arc(win.x/2 +(game.player.history[i].x - playerCamera.x)*fov,win.y/2+(game.player.history[i].y-playerCamera.y)*fov,game.player.radius*fov,0,Math.PI*2);
      ctx.fill();
      }
       if(game.player.auraLocation.x !==-10000&&game.player.dhAt === game.zone){
      ctx.fillStyle=`rgba(154, 92, 196,${game.player.auraDuration/120})`
      ctx.beginPath();
      ctx.arc(win.x/2+(game.player.auraLocation.x-playerCamera.x)*fov,win.y/2+(game.player.auraLocation.y-playerCamera.y)*fov,game.player.auraSize/2*fov,0,Math.PI*2);
ctx.fill();
         ctx.stroke();
    }
    }
    /* level text */
   ctx.font=`${60*fov}px Trebuchet MS`
    ctx.strokeStyle="rgb(170,170,170)"
    ctx.lineWidth = (10*fov)
    ctx.fillStyle="rgb(255,0,0)"
    if(game.zone === 0 || game.zone === 1){
     ctx.fillStyle = "rgb(46, 184, 209)"
    }else if(game.zone === 2){
      ctx.fillStyle = "rgb(205,0,0)"
    }else if(game.zone === 3|| game.zone === 4){
      ctx.fillStyle = "rgb(255,255,255)"
    }else if(game.zone === 5){
      ctx.fillStyle = "rgb(137, 114, 184)"
    }else if(game.zone === 6){
      ctx.fillStyle = "rgb(107, 27, 227)"
    }
    if(game.level !== 0&&game.areas[game.zone]!== undefined){
    ctx.fillText(`${game.areas[game.zone]}: Level ${game.level}`,win.x/2-200 +(600-playerCamera.x)*fov,win.y/2+(-50-playerCamera.y)*fov);
    }else if(game.level === 0&&game.areas[game.zone]!== undefined){
      ctx.fillText(`${game.areas[game.zone]}`,win.x/2-200 +(600-playerCamera.x)*fov,win.y/2+(-50-playerCamera.y)*fov);
    }
    if(game.areas[game.zone]=== undefined){
       ctx.fillText(`Dev Project: Level ${game.level+1}`,win.x/2-200 +(600-playerCamera.x)*fov,win.y/2+(-50-playerCamera.y)*fov);
    }
    if(game.zone === game.hellZone){
      if( game.level === 0){
        ctx.fillText(`Why did you come here? You can't leave`,win.x/2-200 +(400-playerCamera.x)*fov,win.y/2+(-200-playerCamera.y)*fov);
    }else if(game.level === 1){
       ctx.fillText(`Aw, you're still here. You might as well complete the levels`,win.x/2-200 +(400-playerCamera.x)*fov,win.y/2+(-200-playerCamera.y)*fov);
    }else if(game.level === 2){
       ctx.fillText(`Ready to refresh?`,win.x/2-200 +(400-playerCamera.x)*fov,win.y/2+(-200-playerCamera.y)*fov);
    }else if(game.level === 3){
       ctx.fillText(`Why do you insist...`,win.x/2-200 +(400-playerCamera.x)*fov,win.y/2+(-200-playerCamera.y)*fov);
    }else if(game.level === 4){
       ctx.fillText(`You are not a dev. Turn back!`,win.x/2-200 +(400-playerCamera.x)*fov,win.y/2+(-200-playerCamera.y)*fov);
    }else if(game.level === 5){
       ctx.fillText(`Ok noob.....`,win.x/2-200 +(400-playerCamera.x)*fov,win.y/2+(-200-playerCamera.y)*fov);
    }
    }

if(game.player.hero=="Kopo"&&game.player.isSmall){
  //ctx.fill();
  ctx.lineWidth = 6;
 ctx.stroke(); 
}
    ctx.fillStyle = "rgb(125,125,125)"
   // noStroke();
    if(game.player.hero == "Jotunn"){
     //     textFont("Maven Pro");
     
      ctx.strokeStyle="rgba(0,0,170,0.45)"
      ctx.lineWidth = (6);
      ctx.fillStyle="rgba(145,145,145,0.45)"
      ctx.fillRect(win.x/2-98,win.y-60,198,60);
      ctx.strokeStyle="black"
      ctx.lineWidth =(1);
      ctx.fillStyle = "rgba(58, 107, 186,0.65"
      ctx.beginPath();
      ctx.arc(win.x/2,win.y-30,30,0,Math.PI*2);
      ctx.fill();
      ctx.fillStyle = "rgba(58, 107, 186,0.9)"
      ctx.beginPath();
     ctx.arc(win.x/2,win.y-30,30,0,Math.PI*2*(game.player.cooldown/game.player.shardCooldown),true);
      ctx.fill();
   ctx.font = "15px Trebuchet MS";
      ctx.fillStyle="black"
   //   noStroke();
      ctx.fillText("Shatter",win.x/2-24,win.y-28);
      
    }
    if(game.player.hero == "Magmax"){
        ctx.strokeStyle="rgba(170,0,0,0.25)"
      ctx.lineWidth = (2);
      ctx.fillStyle="rgba(145,145,145,0.25)"
      ctx.fillRect(win.x/2-98,win.y-60,198,60);
      ctx.strokeRect(win.x/2-98,win.y-60,198,60);
           ctx.strokeStyle="rgb(237, 61, 26)"
      ctx.lineWidth =(1);
      ctx.fillStyle ="rgba(181, 16, 16,0.6)"
      ctx.beginPath();
      ctx.arc(win.x/2,win.y-30,35,0,Math.PI*2);
      ctx.fill();
      ctx.fillStyle ="rgb(0,0,0)"
      ctx.beginPath();
      ctx.arc(win.x/2,win.y-30,35,0,Math.PI*2*(game.player.cooldown/game.player.hardenCooldown),true);
      ctx.fill();
      if(game.player.harden){
      ctx.beginPath();
      ctx.fillStyle="rgba(177, 1, 1,0.5)"
      ctx.arc(win.x/2,win.y/2,game.player.radius*fov,0,Math.PI*2*(game.player.hardenMaxTime/240),false);
      ctx.fill();
        
      }
    }
    if(game.player.hero == "Kopo"){
      if(game.player.isSmall){
         ctx.strokeStyle="rgba(0,0,170,0.15)"
      ctx.lineWidth = (6);
      ctx.fillStyle="rgba(145,145,145,0.15)"
      ctx.fillRect(win.x/2-98,win.y-60,198,60);
        ctx.strokeRect(win.x/2-98,win.y-60,198,60);
           ctx.strokeStyle="black"
      ctx.lineWidth = (1);
        ctx.fillStyle="rgba(156, 34, 161,0.6)"
        ctx.beginPath();
      ctx.arc(win.x/2,win.y-30,30,0,Math.PI*2);
        ctx.fill();
      ctx.fillStyle="rgba(156, 34, 161,1)"
        ctx.beginPath();
      ctx.arc(win.x/2,win.y-30,30,0,Math.PI*2*(game.player.cooldown/game.player.auraCooldown),true);
        ctx.fill();
      //textFont("Maven Pro");
     ctx.font = "30px Trebuchet MS"
      ctx.fillStyle="rgb(10,10,10)"
        ctx.strokeStyle="black"
        ctx.lineWidth = 1
       ctx.textAlign ="center"
      ctx.fillText("DH",win.x/2,win.y-20);
ctx.textAlign = "left"
      }
    }   ctx.fillStyle="white";
    ctx.fillRect(win.x-133,0,120,35)
    ctx.fillRect(5,0,130,35)
    ctx.font = "25px Trebuchet MS";
      ctx.fillStyle="black"
    
    ctx.fillText(`Deaths:${game.player.deaths}`,10,30)
    if(time>9){
    ctx.fillText(`Time:${timeM}:${time}`,win.x-130,30)
    }else{
      ctx.fillText(`Time:${timeM}:0${time}`,win.x-130,30)
    }

    
  if(game.player.hero =="Jotunn"){
     ctx.drawImage(imgJotunn,win.x/2-25,win.y/2-28,50,55);
    ctx.drawImage(imgJotunnPower1,win.x/2-98,win.y-60,60,60);
    ctx.drawImage(imgJotunnPower2,win.x/2+40,win.y-60,60,60);
    for(let enemy of game.enemies){
     if(enemy.slowdown){
      ctx.fillStyle="rgba(0,0,200,0.15)"
       ctx.fillRect(win.x/2-98,win.y-60,60,60);
       break;
     }
    }
    if(game.player.cooldown >=0.01){
      ctx.fillStyle="rgba(0,0,255,0.2)"
     ctx.fillRect(win.x/2+40,win.y-60,60,60) 
    }
  }
  if(game.player.hero == "Magmax"){
   ctx.drawImage(imgMagmax,win.x/2-25,win.y/2-19,50,40); 
     ctx.drawImage(imgMagmaxPower1,win.x/2-98,win.y-60,60,60);
     ctx.drawImage(imgMagmaxPower2,win.x/2+40,win.y-60,60,60);
    if(game.player.cooldown>=1){
        ctx.drawImage(imgMagmaxPumpkinOff,win.x/2-30,win.y-60,60,60);
    }else{
     ctx.drawImage(imgMagmaxPumpkin,win.x/2-30,win.y-60,60,60);
    }
    if(game.player.flow){
     ctx.fillStyle="rgba(204, 126, 49,0.25)"
      ctx.fillRect(win.x/2-98,win.y-60,60,60);
    }
    if(game.player.harden){
     ctx.fillStyle="rgba(110, 20, 4,0.25)"
      ctx.fillRect(win.x/2+40,win.y-60,60,60);
    }
  }
  if(game.player.hero == "Kopo"){
    if(game.player.isSmall){
   ctx.drawImage(imgKopo,win.x/2-22,win.y/2-29.5,44,60); 
    }else{
      ctx.drawImage(imgKopo,win.x/2-27,win.y/2-31.5,55,65); 
    }
    ctx.drawImage(imgKopoPower1,win.x/2-98,win.y-60,60,60)
     ctx.drawImage(imgKopoPower2,win.x/2+40,win.y-60,60,60);
    if(game.player.isSmall){
     ctx.fillStyle="rgba(0,0,50,0.12)"
      ctx.fillRect(win.x/2-98,win.y-60,60,60);
    }
    if(game.player.cooldown>=1){
      ctx.fillStyle="rgba(0,0,70,0.45)"
      ctx.fillRect(win.x/2+40,win.y-60,60,60);
    }
  } 
       
  if(game.level>=41||game.zone ===4&&game.level>=17&&!this.endScreen){
    finishedSpeedrun = true;
    frames= 0
    }
    
   
    if(this.fades!=[]){
     for(let i=this.fades.length-1;i>=0;i--){
      this.fades[i].simulate(dt);
       if(this.fades[i].pos.x<-win.x*3){
        this.fades.splice(i,1); 
       }
     }
    }
}
  
  
}
