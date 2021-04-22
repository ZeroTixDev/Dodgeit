var frames = 0;
const playSpeed = 60;
var endtime = 0;
var fireworks = [];
class Firework{
 constructor(x,y,dir,color,size){
  this.x = x;
   this.y = y;
   this.dir = dir;
   this.color = color;
   this.xv = 7*cos(this.dir*Math.PI/4)
   this.yv = 7*sin(this.dir*Math.PI/4);
   this.fill = this.color;
   this.gravity = -0.5;
   this.size = size;
 }
  simulate(dt){
   if(this.y>win.y+100){
    this.delete = 0; 
   }
    this.x+=this.xv*playSpeed*dt
    this.y+=this.yv*playSpeed*dt
    this.gravity+=0.03*dt*playSpeed
    this.yv+=this.gravity*dt*playSpeed;
    ctx.fillStyle=`rgba(${this.fill.r},${this.fill.g},${this.fill.b},${this.fill.a})`
    ctx.fillRect(this.x,this.y,this.size,this.size);
  }
}

CanvasRenderingContext2D.prototype.wrapText = function (text, x, y, maxWidth, lineHeight) {

    var lines = text.split("\n");

    for (var i = 0; i < lines.length; i++) {

        var words = lines[i].split(' ');
        var line = '';

        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = this.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                this.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
            } else {
                line = testLine;
            }
        }

        this.fillText(line, x, y);
        y += lineHeight;
    }
};
class Vec{
 constructor(x,y){
 this.x = x;
 this.y = y;
 }
  times(factor){
   return new Vec(this.x*factor,this.y*factor); 
  }
}
class Fade{
 constructor(x,y,xv,yv, stopx,stopy,sizex,sizey,type){
  this.pos = new Vec(x,y);
   this.vel = new Vec(xv,yv);
   this.stop = new Vec(stopx,stopy);
   this.size = new Vec(sizex,sizey);
   this.type=type;
   this.counted = false;
   this.time = 1;
   this.canGoDown =false;
 }
  simulate(dt){
    this.pos.x+=this.vel.x*(dt)*playSpeed
    this.pos.y+=this.vel.y*(dt)*playSpeed
    if(this.type=="Magmax"){
      ctx.fillStyle= `rgba(99, 6, 6, ${this.time})`
    }else if(this.type=="Jotunn"){
     ctx.fillStyle=`rgba(5, 78, 105, ${this.time})`
    }else if(this.type=="Kopo"){
     ctx.fillStyle =`rgba(23, 1, 54, ${this.time})` 
    }
    ctx.fillRect(this.pos.x,this.pos.y,this.size.x,this.size.y);
    if(this.pos.x<0&&!this.canGoDown){
     this.canGoDown = true 
    }
    if(this.canGoDown){
     this.time-=0.15*dt 
    }
  }
}
class MenuButton{
 constructor(x,y,xv,yv,stopx,stopy,type){
   this.sa = 1;
   this.pos = new Vec(x,y);
   this.vel = new Vec(xv,yv);
   this.stop = new Vec(stopx,stopy);
   this.size = new Vec(50,50);
   this.type = type;
   this.time = 3;
   this.touched = true;
   this.hero =0;
   this.stopped = false;
 }
  simulate(dt){
    this.touched = false;
    ctx.font ="20px Trebuchet MS"
   if(mouse.x>this.pos.x-(this.size.x*this.sa)/2&&mouse.x<this.pos.x+(this.size.x*this.sa)/2&&mouse.y>this.pos.y-(this.size.y*this.sa)/2&&mouse.y<this.pos.y+(this.size.y*this.sa)/2){
    this.sa+=50*(dt)
    if(this.type=="Magmax"&&this.vel.y===0){
     ctx.fillStyle="rgb(0,0,0)"
    //  noStroke();
      ctx.textAlign ="center"
      ctx.font = "30px Trebuchet MS"
      ctx.fillText("Magmax",win.x/2,win.y/2+win.y/4-25);
      
    // ctx.font = ctx.font.replace(/\d+px/, "20px");
      ctx.font ="17px Trebuchet MS"
          ctx.wrapText(`Magmax's Abilites\nJ or Z to flow(makes you go 2x faster)\nK or X to harden(makes you invincible but you can't move and you\ncan harden up to 4 seconds with a cooldown of 3 seconds)`,win.x/2,win.y/2+win.y/12,win.x/2,20);
      ctx.drawImage(imgMagmaxWow,win.x/2+win.x/3,win.y/2,150,150)
      this.touched = true;
       this.hero =0;
      ctx.textAlign ="left"
    }else if(this.type=="Jotunn"&&this.vel.y===0){
        ctx.fillStyle ="black"
   //   noStroke();
      ctx.textAlign = "center"
       ctx.font = "30px Trebuchet MS"
      ctx.fillText("Jotunn",win.x/2,win.y/2+win.y/4-25);
      ctx.font ="17px Trebuchet MS"
       ctx.wrapText(`Jotunn's Abilites\nPassive Ability: If enemies are near you, they get 60% slower(Some enemies aren't affected)\nShard Ability: K or Z to shatter enemies away(Some enemies aren't affected)`,win.x/2,win.y/2+win.y/14,win.x/2,20);
       ctx.drawImage(imgJotunnThonk,win.x/2+win.x/3,win.y/2,150,150)
      this.touched = true;
       this.hero =1;
      ctx.textAlign = "left"
    }else if(this.type=="Kopo"&&this.vel.y===0){
     ctx.fillStyle="black"
     // noStroke();
      //textAlign(CENTER, CENTER);
      ctx.textAlign = "center"
        ctx.font = "30px Trebuchet MS"
      ctx.fillText("Kopo",win.x/2,win.y/2+win.y/4-25);
   ctx.font ="17px Trebuchet MS"
      ctx.wrapText(`Kopo's Abilites\nSmol: J or Z to make itself smaller at the cost of a annoying trail\nDome Hole!(DH) : K or X to place down an aura(which traps enemies for a certain\namount of time and cannot kill you in the aura) when your smol`,win.x/2,win.y/2+win.y/14,win.x/2,20);
       ctx.drawImage(imgKopoGlasses,win.x/2+win.x/3,win.y/2,150,150)
      this.touched = true;
       this.hero =2;
      ctx.textAlign = "left"
    }
  }
   this.sa*=0.99
    if(this.sa<=1){this.sa =1;}
    if(this.sa>=1.7){this.sa=1.7}
    this.pos.y+=this.vel.y;
    this.yv*=Math.pow(0.7,1);
   if(this.pos.y<this.stop.y){
    this.vel.y=0; 
     this.stopped = true;
   }
      ctx.lineWidth = 6*this.sa
    if(this.type=='Jotunn'){
    ctx.fillStyle= `rgb(25, 213, 255, ${this.time})`
    }else if(this.type=='Magmax'){
      ctx.fillStyle = `rgb(247, 42, 42,${this.time})`
    }else if(this.type=="Kopo"){
     ctx.fillStyle=`rgb(149, 26, 219,${this.time})`
    }
     ctx.fillRect(this.pos.x-(this.size.x*this.sa)/2,+this.pos.y-(this.size.y*this.sa)/2, this.size.x*this.sa, this.size.y*this.sa)
    if(this.type=="Jotunn"){
 ctx.fillStyle =`rgb(14, 115, 138, ${this.time})`
    }else if(this.type=="Magmax"){
     ctx.fillStyle =`rgb(84, 5, 5, ${this.time})`
    }else if(this.type=="Kopo"){
     ctx.fillStyle = `rgb(50, 8, 74,${this.time})`
    }
  ctx.fillRect(this.pos.x-(this.size.x*this.sa)/2, this.pos.y+(this.size.y*this.sa)/69420, this.size.x*this.sa, this.size.y*this.sa/2)
  if (this.time < 500){
  this.time*= 1.2;
  }
  }
}
function randomNumber(min, max) {  
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}  
var world = new Vec(3150,450);
var globalSwitch= 0;
class Safe{
 constructor(x,y,w,h){
  this.x = x;
   this.y = y;
   this.w =w;
   this.h = h;
 }
}
class Color{
 constructor(r,g,b,a){
  this.r = r;
   this.g = g;
   this.b = b;
   if(a){
    this.a = a; 
   }
 }
}
class Teleporter{
 constructor(x,y,w,h,type){
   this.x = x;
   this.y = y;
   this.w = w;
   this.h = h;
   this.tele = undefined;
   this.type = type;
 }
}
class AreaTeleporter extends Teleporter{
  constructor(x,y,w,h,type){
    super(x,y,w,h,type); 
  }
}
