class Enemy{
 constructor(spd,size){
   this.size = size;
   this.pos = new Vec(randomNumber(360+this.size/2,world.x-420-this.size/2),randomNumber(this.size/2,world.y-this.size/2));
   this.spd = spd;
   this.angle = ((Math.random()*360)/180) * Math.PI;
   this.xv = Math.cos(this.angle)*this.spd;
   this.yv = Math.sin(this.angle)*this.spd;
   this.type = 'normal'
   this.slowdown = false;
   this.shatter = false;
   this.baseSize = size;
   this.baseSpd = new Vec(this.xv,this.yv);
   if(randomNumber(0,5)<2.5){
      this.xv*=1
      }
   if(randomNumber(0,5)<2.5){
    this.yv*=-1; 
   }
 }
  randomizeVel(){
     this.angle = ((Math.random()*360)/180) * Math.PI;
   this.xv = Math.cos(this.angle)*this.spd;
   this.yv = Math.sin(this.angle)*this.spd;
  }
  collideWorld(){
      if(this.pos.y+this.size/2>world.y|| this.pos.y-this.size/2<0){
    this.yv*=-1 
   }
    if(this.pos.x-this.size/2<360 || this.pos.x+this.size/2>world.x-420){
     this.xv *=-1; 
    }
    if(this.pos.x-this.size/2<360){
     this.pos.x = 360+this.size/2 
    }
    if(this.pos.x+this.size/2 >world.x-420){
     this.pos.x =world.x-420-this.size/2 
    }
    if(this.pos.y-this.size/2<0){
     this.pos.y = this.size/2 
    }
    if(this.pos.y+this.size/2>world.y){
     this.pos.y = world.y-this.size/2 
    }
  }
  update(game,dt){
    if(this.slowdown && !this.shatter){
      this.pos.x += this.xv*0.6*(dt)*playSpeed;
      this.pos.y += this.yv*0.6*(dt)*playSpeed;
    }
    if(this.shatter){
     this.pos.x += this.xv*0.8*(dt)*playSpeed;
      this.pos.y+=this.yv*0.8*(dt)*playSpeed;
      this.cooldownTillDone-=60*dt;
    }
    if(this.cooldownTillDone <0.01){
     this.shatter = false; 
      this.cooldownTillDone = undefined;
    }
    if(!this.shatter && !this.slowdown){
     this.pos.x +=this.xv*(dt)*playSpeed
      this.pos.y+=this.yv*(dt)*playSpeed
    }
    this.collideWorld();
  this.baseSpd.x = this.xv;
    this.baseSpd.y = this.yv;
    
  }
  shattered(cooldown){
   this.shatter = true;
    this.cooldownTillDone = cooldown;
  }
}
class LiquidEnemy extends Enemy{
 constructor(spd,size){
  super(spd,size);
   this.type ='liquid';  
   this.speedState = 'normal';
    this.xv = Math.cos(this.angle)*this.spd;
   this.yv = Math.sin(this.angle)*this.spd;
   this.baseSpdFast = new Vec(this.xv*3.5,this.yv*3.5);
 }
  update(game,dt){
        
      if(this.speedState == 'normal'){
        this.xv*=1
        this.yv*=1;
      }
    if(this.speedState == 'fast'){
     this.pos.x+=this.xv*1.4*(dt)*playSpeed
      this.pos.y+=this.yv*1.4*(dt)*playSpeed
    }
    if(this.slowdown && !this.shatter){
      if(this.speedState =='fast'){
       this.pos.x+=this.xv*0.6*1.4*(dt)*playSpeed
        this.pos.y+=this.yv*0.6*1.4*(dt)*playSpeed
      }else{
      this.pos.x += this.xv*0.6*(dt)*playSpeed
      this.pos.y += this.yv*0.6*(dt)*playSpeed
      }
    }
    if(this.shatter){
      if(this.speedState=='fast'){
       this.pos.x+=this.xv*0.8*1.4*(dt)*playSpeed
        this.pos.y+=this.yv*0.8*1.4*(dt)*playSpeed
      }else{
     this.pos.x += this.xv*0.8*(dt)*playSpeed
      this.pos.y+=this.yv*0.8*(dt)*playSpeed
      }
      this.cooldownTillDone-=60*dt;
    }
    if(this.cooldownTillDone <0.01){
     this.shatter = false; 
      this.cooldownTillDone = undefined;
    }
    if(!this.shatter && !this.slowdown){
     this.pos.x +=this.xv*(dt)*playSpeed;
      this.pos.y+=this.yv*dt*playSpeed;
    }
    this.collideWorld();
  this.baseSpd.x = this.xv;
    this.baseSpd.y = this.yv;
  }
}
class IcicleEnemy extends Enemy{
 constructor(spd,size){
  super(spd,size);
   this.type = 'icicle';
   this.stop = 0;
   this.on = 'top';
   this.pos = new Vec(randomNumber(360+this.size/2,world.x-420-this.size/2),this.size/2)
   if(randomNumber(0,5)<2.5){
    this.pos.y = world.y-this.size/2 
     this.on = 'bottom';
   }
   this.xv = 0;
   this.yv=0;
 }
  update(game,dt){
    this.stop-=60*dt;
      if(this.stop<=0&&this.on =='bottom'){
        this.yv =-this.spd
        
      }
      if(this.stop<=0 &&this.on =='top'){
       this.yv = this.spd
      }
      if(this.slowdown && !this.shatter){
      this.pos.x += this.xv*0.6*(dt)*playSpeed;
      this.pos.y += this.yv*0.6*(dt)*playSpeed
    }
    if(this.shatter){
     this.pos.x += this.xv*0.8*(dt)*playSpeed
      this.pos.y+=this.yv*0.8*(dt)*playSpeed
      this.cooldownTillDone-=60*dt;
    }
    if(this.cooldownTillDone <=0){
     this.shatter = false; 
      this.cooldownTillDone = undefined;
    }
     if(!this.shatter && !this.slowdown){
     this.pos.x +=this.xv*playSpeed*dt
      this.pos.y+=this.yv*playSpeed*dt;
    }
    if(this.pos.x-this.size/2<360){
     this.pos.x = 360+this.size/2 
    }
    if(this.pos.x+this.size/2 >world.x-420){
     this.pos.x =world.x-420-this.size/2 
    }
    if(this.pos.y-this.size/2<0){
     this.pos.y = this.size/2 
      if(this.on =='bottom'){
        this.on ='top'
       this.stop = randomNumber(90,200);
      }
    }
    if(this.pos.y+this.size/2>world.y){
     this.pos.y = world.y-this.size/2 
      if(this.on == 'top'){
       this.on = 'bottom'
       this.stop = randomNumber(90,200);
      }
    }
    this.baseSpd = new Vec(this.xv,this.yv);
  }
}
class SizingEnemy extends Enemy{
 constructor(spd,size){
   super(spd,size);
   this.type = 'sizing';  
   this.maxSize = this.size*2.5
   this.minSize = this.size/5;
   this.goingDown = false;
 }
  update(game,dt){
    if(this.size>=this.maxSize){
     this.goingDown = true; 
    }
    if(this.size<=this.minSize){
     this.goingDown = false; 
    }
    if(this.goingDown){
      this.size-=random(this.size/40,this.size/39)*(dt)*playSpeed
    }
    if(!this.goingDown){
      this.size+=random(this.size/40,this.size/39)*(dt)*playSpeed
    }
     if(this.slowdown && !this.shatter){
      this.pos.x += this.xv*0.6*(dt)*playSpeed
      this.pos.y += this.yv*0.6*(dt)*playSpeed
    }
    if(this.shatter){
     this.pos.x += this.xv*0.8*(dt)*playSpeed
      this.pos.y+=this.yv*0.8*(dt)*playSpeed
      this.cooldownTillDone-=60*dt;
    }
    if(this.cooldownTillDone  <=0){
     this.shatter = false; 
      this.cooldownTillDone = undefined;
    }
     if(!this.shatter && !this.slowdown){
     this.pos.x +=this.xv*(dt)*playSpeed
      this.pos.y+=this.yv*(dt)*playSpeed
    }
    this.collideWorld();
    this.baseSpd = new Vec(this.xv,this.yv);
  }
}
class CircleEnemy extends Enemy{
 constructor(spd,size){
  super(spd,size);
   this.type = 'circle'
 }
  update(game,dt){
            if(this.slowdown&&!this.shatter){
  this.pos.x += this.xv*((sin(frames/40)+1)*(dt)*0.6*playSpeed+ random(-0.1, 0.1))
      this.pos.y += this.yv*((cos(frames/40)+1)*(dt)*0.6*playSpeed+ random(-0.1, 0.1))
    }
    if(this.shatter){
       this.pos.x += this.xv*((sin(frames/40)+1)*(dt)*0.8*playSpeed+ random(-0.1, 0.1))
  this.pos.y += this.yv*((cos(frames/40)+1)*(dt)*0.8*playSpeed+ random(-0.1, 0.1))
      this.cooldownTillDone-=60*dt;
    }
      if(this.cooldownTillDone <=0){
     this.shatter = false; 
      this.cooldownTillDone = undefined;
    }
    if(!this.shatter && !this.slowdown){
   this.pos.x += this.xv*(sin(frames/40)+1)*(dt)*playSpeed+ random(-0.1, 0.1)
  this.pos.y += this.yv*(cos(frames/40)+1)*(dt)*playSpeed + random(-0.1, 0.1)
    }
     this.collideWorld();
      this.baseSpd.x = this.xv;
    this.baseSpd.y = this.yv;
  }
}
class RotatingEnemy extends Enemy{
 constructor(spd,size){
  super(spd,size);
   this.type = 'rotate';
     this.moverot = randomNumber(0, Math.PI * 2);
  this.xv = this.spd * Math.cos(this.moverot);
  this.xv = this.spd * Math.sin(this.moverot);
      this.baseSpd = new Vec(this.xv,this.yv);
   if(randomNumber(0,5)<2.5){
    this.bruh = -1 
   }else{
    this.bruh = 1; 
   }
 }
  update(game,dt){
    if(this.slowdown&&!this.shatter){
     this.pos.x+=this.xv*0.6*dt*playSpeed
      this.pos.y+=this.yv*0.6*dt*playSpeed
    }
    if(this.shatter){
     this.pos.x +=this.xv*0.8*dt*playSpeed
      this.pos.y+=this.yv*0.8*dt*playSpeed
      this.cooldownTillDone-=60*dt;
    }
      if(this.cooldownTillDone <=0){
     this.shatter = false; 
      this.cooldownTillDone = undefined;
    }
    if(!this.shatter && !this.slowdown){
     this.pos.x+=this.xv*dt*playSpeed
      this.pos.y+=this.yv*dt*playSpeed
    }
    this.collideWorld();
    this.xv = (this.spd * cos(this.moverot)*(dt)*playSpeed + random(-0.05, 0.05));
  this.yv = (this.spd * sin(this.moverot)*(dt)*playSpeed + random(-0.05, 0.05));
  this.moverot +=0.007*this.spd*this.bruh*(dt)*playSpeed;
      this.baseSpd.x = this.xv;
    this.baseSpd.y = this.yv;
  }
}
class WeirdEnemy extends Enemy{
 constructor(spd,size){
  super(spd,size);
   this.type ='weird';
 }
  update(game,dt){
    if(this.slowdown&&!this.shatter){
     this.pos.x+=this.xv*sin((cos(frames/40)+1))*0.6*(dt)*playSpeed
      this.pos.y+=this.yv*cos((sin(frames/40)+1))*0.6*(dt)*playSpeed
    }
    if(this.shatter){
     this.pos.x+=this.xv*sin((cos(frames/40)+1))*0.8*(dt)*playSpeed
      this.pos.y+=this.yv*cos((sin(frames/40)+1))*0.8*(dt)*playSpeed
      this.cooldownTillDone-=60*dt;
    }
      if(this.cooldownTillDone  <=0){
     this.shatter = false; 
      this.cooldownTillDone = undefined;
    }
    if(!this.shatter && !this.slowdown){
     this.pos.x +=this.xv*sin((cos(frames/40)+1))*(dt)*playSpeed
      this.pos.y+=this.yv*cos((sin(frames/40)+1))*(dt)*playSpeed
    }
    this.collideWorld();
      this.baseSpd.x = this.xv;
    this.baseSpd.y = this.yv;
  }
}
class HomingEnemy extends Enemy{
  constructor(spd,size){
   super(spd,size);
    this.type = 'homing';
      
  if (random(0, 1)<0.5){this.xv *= -1;}
  if (random(0, 1)<0.5){this.yv *= -1;}
  
  this.period = randomNumber(5,10);
  }
  update(game,dt){
        if(this.slowdown&&!this.shatter){
      this.pos.x += this.xv*(Math.sin(frames/this.period)+1)*0.6*(dt)*playSpeed
      this.pos.y += this.yv*(Math.sin(frames/this.period)+1)*0.6*(dt)*playSpeed
    }
    if(this.shatter){
     this.pos.x += this.xv*(Math.sin(frames/this.period)+1)*0.8*(dt)*playSpeed
     this.pos.y += this.yv*(Math.sin(frames/this.period)+1)*0.8*(dt)*playSpeed
      this.cooldownTillDone-=60*dt;
    }
      if(this.cooldownTillDone <=0){
     this.shatter = false; 
      this.cooldownTillDone = undefined;
    }
    if(!this.shatter && !this.slowdown){
      this.pos.x += this.xv*(Math.sin(frames/this.period)+1)*(dt)*playSpeed
     this.pos.y += this.yv*(Math.sin(frames/this.period)+1)*(dt)*playSpeed
    }
  this.collideWorld();
      if (Math.abs(this.xv*(Math.sin(frames/this.period)+1)*(dt)*playSpeed)<0.5 && Math.abs(this.yv*(Math.sin(frames/this.period)+1)*(dt)*playSpeed)<0.5 && game.player.pos.x+game.player.radius< world.x-420 && game.player.pos.x -game.player.radius > 360&& dist(game.player.pos.x, game.player.pos.y, this.pos.x, this.pos.y)<this.size/2+200){

    this.xv = (game.player.pos.x-this.pos.x);
    this.yv = (game.player.pos.y-this.pos.y);
    
    this.magnitude = dist(this.pos.x, this.pos.y, game.player.pos.x, game.player.pos.y);
    this.divide = this.spd/this.magnitude;
    this.xv *= this.divide;
    this.yv *= this.divide;
  }
      this.baseSpd.x = this.xv;
    this.baseSpd.y = this.yv;
  }
}
class FreezeSniper extends Enemy{
 constructor(spd,size,cooldown){
   super(spd,size);
   this.canShoot = false;
   this.cooldown = 0;
   this.theCooldown = cooldown;
   this.type ='freeze';
   this.shatter = false;
 }
  update(game,dt){
   super.update(game,dt);
    if(this.cooldown <= 0){
     this.canShoot = true;
    }
    if(this.cooldown >=0.01){
     this.cooldown-=60*dt;
      this.canShoot = false;
    }
    if(this.shatter){
     this.cooldownTillDone-=60*dt; 
    }
      if(this.cooldownTillDone  <=0){
     this.shatter = false; 
      this.cooldownTillDone = undefined;
    }
    if(this.canShoot&&!game.player.freezed){
       let difX = game.player.pos.x-this.pos.x
      let difY = game.player.pos.y - this.pos.y;
      let rot = Math.atan2(difY,difX);
      game.bullets.push(new FreezeBullet(this.pos.x,this.pos.y,this.spd*2,this.size/2,rot));
      this.canShoot = false
      this.cooldown = this.theCooldown;
    }
      this.baseSpd.x = this.xv;
    this.baseSpd.y = this.yv;
  }
}
class Bullet{
 constructor(x,y,spd,size,angle){
   this.pos = new Vec(x,y);
   this.spd = spd;
   this.angle = angle;
   this.xv = Math.cos(this.angle)*this.spd;
   this.yv = Math.sin(this.angle)*this.spd;
   this.size = size;
   this.life = 360;
   this.toDelete = false;
   this.type = 'normal'
 }
  update(dt){
    if(this.life >=0.01){
      this.life-=60*dt;
    }
    if(this.life <= 0){
     this.toDelete= true; 
    }
    if(this.pos.y - this.size/2<0 || this.pos.y + this.size/2 > world.y || this.pos.x+this.size/2 > world.x-420 || this.pos.x -this.size/2<360){
     this.toDelete = true; 
    }
    this.pos.x += this.xv*(dt)*playSpeed;
    this.pos.y +=this.yv*(dt)*playSpeed;
  }
}
class FreezeBullet extends Bullet{
  constructor(x,y,spd,size,angle){
   super(x,y,spd,size,angle);
    this.type ='freeze';
  }
}
class BorderEnemy{
  constructor(spd,size){
   this.size = size;
    this.type = 'border'
    this.baseSpd = spd + (Math.random() *3)- (Math.random()*1);
    this.xv = this.baseSpd;
    if(Math.random()*5<2.5){
     this.xv *=-1; 
    }
    this.yv = 0;
    this.pos = new Vec(randomNumber(360+this.size/2, world.x-420-this.size/2),0);
    if(Math.random()*5<2.5){
     this.pos.y = this.size/2 
    }else{
     this.pos.y = world.y-this.size/2 
    }
  }
  update(game,dt){
   this.pos.x+=this.xv*(dt)*playSpeed
    if(this.pos.x+this.size/2 > world.x-420){
     this.pos.x = world.x-420-this.size/2;
      this.xv*=-1;
    }
    if(this.pos.x -this.size/2 < 360){
     this.pos.x = 360+this.size/2;
      this.xv*=-1;
    }
  }
}
class SwitchEnemy extends Enemy{
 constructor(spd,size){
  super(spd,size);
   this.type = 'switch';
   this.switch = globalSwitch;
   this.notOnGlobal = false;
   if(randomNumber(0,5)<2.5){
    this.switch= globalSwitch+1; 
     this.notOnGlobal = true;
   }
 if(this.switch%2===0){
  this.canDie = true; 
 }else{
  this.canDie = false; 
 }
 }
  update(game,dt){
     if(this.switch%2===0){
  this.canDie = true; 
 }else{
  this.canDie = false; 
 }
     if(this.slowdown && !this.shatter){
      this.pos.x += this.xv*0.6*(dt)*playSpeed
      this.pos.y += this.yv*0.6*(dt)*playSpeed
    }
    if(this.shatter){
     this.pos.x += this.xv*0.8*(dt)*playSpeed
      this.pos.y+=this.yv*0.8*(dt)*playSpeed
      this.cooldownTillDone-=60*dt;
    }
    if(this.cooldownTillDone  <=0){
     this.shatter = false; 
      this.cooldownTillDone = undefined;
    }
    if(!this.shatter && !this.slowdown){
     this.pos.x +=this.xv*(dt)*playSpeed
      this.pos.y+=this.yv*(dt)*playSpeed
    }
    this.collideWorld();
  this.baseSpd.x = this.xv;
    this.baseSpd.y = this.yv;
    if(this.notOnGlobal){
     this.switch = globalSwitch+1; 
    }else{
      this.switch = globalSwitch;
    }
  }
}
class ImmuneEnemy extends Enemy{
 constructor(spd,size){
  super(spd,size);
   this.type = 'immune';
 }
  update(game,dt){
    this.pos.x+=this.xv*(dt)*playSpeed
    this.pos.y+=this.yv*(dt)*playSpeed
    this.collideWorld();
  }
}
class Exploder extends Enemy{
 constructor(spd,size,cooldown){
  super(spd,size);
   this.type = 'exploder';
   this.canShoot = true;
   this.cooldown = 0;
   this.theCooldown = cooldown;
   this.shatter = false;
   this.t =1;
      this.baseSpd = new Vec(this.xv,this.yv);
 }
  update(game,dt){
   super.update(game,dt);
        if(this.cooldown >=0.01){
     this.cooldown-=60*dt;
      this.canShoot = false;
    }
    if(this.cooldown <=0){
     this.canShoot = true; 
    }
    if(this.shatter){
     this.cooldownTillDone-=60*dt; 
    }
      if(this.cooldownTillDone <=0){
     this.shatter = false; 
      this.cooldownTillDone = undefined;
    }
    if(this.canShoot&&!this.shatter){
    var sqrt2 = 1/1.41421356237;
    if (this.t%2 === 1){
      game.bullets.push(new ExploderBullet(5, 0, this.pos.x, this.pos.y, this.size/2, 119, 68, 148));
     game.bullets.push(new ExploderBullet(0, 5, this.pos.x, this.pos.y, this.size/2, 119, 68, 148));
     game.bullets.push(new ExploderBullet(0, -5, this.pos.x, this.pos.y, this.size/2, 119, 68, 148));
     game.bullets.push(new ExploderBullet(-5, 0, this.pos.x, this.pos.y, this.size/2, 119, 68, 148));
    }
    else{
      game.bullets.push(new ExploderBullet(5*sqrt2, 5*sqrt2, this.pos.x, this.pos.y, this.size/2, 119, 68, 148));
     game.bullets.push(new ExploderBullet(-5*sqrt2, 5*sqrt2, this.pos.x, this.pos.y, this.size/2, 119, 68, 148));
   game.bullets.push(new ExploderBullet(5*sqrt2, -5*sqrt2, this.pos.x, this.pos.y, this.size/2, 119, 68, 148));
   game.bullets.push(new ExploderBullet(-5*sqrt2, -5*sqrt2, this.pos.x, this.pos.y, this.size/2, 119, 68, 148));
    }
    
    this.t++;
    this.cooldown = this.theCooldown; 
    }
      this.baseSpd.x = this.xv;
    this.baseSpd.y = this.yv;
  }
}
class ExploderBullet extends Bullet{
 constructor(xv,yv,x,y,size){
   super(x,y,5,size,0);
   this.xv = xv;
   this.yv = yv;
   this.type = 'exploder';
 }
}
class Sniper extends Enemy{
 constructor(spd,size,cooldown){
  super(spd,size);
   this.type = 'sniper'
   this.canShoot = true;
   this.cooldown = 0;
   this.theCooldown = cooldown;
   this.shatter = false;
 }
  update(game,dt){
   super.update(game,dt);
            if(this.cooldown>=0.01){
     this.cooldown-=60*dt
          this.canShoot = false;
    }
    if(this.cooldown <0.01){
     this.canShoot = true; 
    }
    if(this.shatter){
     this.cooldownTillDone=60*dt; 
    }
      if(this.cooldownTillDone <=0){
     this.shatter = false; 
      this.cooldownTillDone = undefined;
    }
    if(this.canShoot&&!this.shatter){
      let difX = game.player.pos.x-this.pos.x
      let difY = game.player.pos.y - this.pos.y;
      let rot = Math.atan2(difY,difX);
      game.bullets.push(new Bullet(this.pos.x,this.pos.y,this.spd*2,this.size/2,rot));
     this.canShooot = false;
      this.cooldown = this.theCooldown;
    }
  }
}
class DasherEnemy extends Enemy{
 constructor(spd,size){
  super(spd,size); 
   this.type = 'dasher'
      this.baseSpd = new Vec(this.xv,this.yv);
 }
  update(game,dt){
           if(this.slowdown&&!this.shatter){
      this.pos.x += this.xv*(sin(frames/40)+1)*0.6*(dt)*playSpeed
      this.pos.y += this.yv*(sin(frames/40)+1)*0.6*(dt)*playSpeed
    }
    if(this.shatter){
      this.pos.x += this.xv*(sin(frames/40)+1)*0.8*(dt)*playSpeed
      this.pos.y += this.yv*(sin(frames/40)+1)*0.8*(dt)*playSpeed
      this.cooldownTillDone-=60*dt;
    }
      if(this.cooldownTillDone  <=0){
     this.shatter = false; 
      this.cooldownTillDone = undefined;
    }
    if(!this.shatter && !this.slowdown){
    this.pos.x += this.xv*(sin(frames/40)+1)*(dt)*playSpeed
  this.pos.y += this.yv*(sin(frames/40)+1)*(dt)*playSpeed
    }
            this.collideWorld();
      this.baseSpd.x = this.xv;
    this.baseSpd.y = this.yv;
  }
}  
class SlowdownEnemy extends Enemy{
 constructor(spd,size){
  super(spd,size);
   this.type = 'slowdown';
   this.auraSize = 400;
 }
}
class MegaSlowdownEnemy extends Enemy{
 constructor(spd,size){
   super(spd,size);
   this.type= 'megaslow';
   this.auraSize = 200;
 }
}
class DisableEnemy extends Enemy{
 constructor(spd,size){
  super(spd,size);
   this.type='disable';
   this.auraSize =300;
 }
}
class CloseEnemy extends Enemy{
 constructor(spd,size){
  super(spd,size);
   this.type = 'close';
   this.minSize = size;
   this.maxSize = 390;
   this.auraSize = 400;
 }
  sizeUpdate(player,dt){
   if(dist(this.pos.x,this.pos.y,player.pos.x,player.pos.y) < this.auraSize/2 + player.radius && player.pos.x+player.radius>360 && player.pos.x-player.radius <world.x-420){
     if(this.size<this.maxSize){
      this.size+=90*dt
     }
   }else{
     if(this.size > this.minSize){
    this.size-=90*dt
     }
   }
  }
}
