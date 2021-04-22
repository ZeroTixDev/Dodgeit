var win;
const fov = 1;
var mainMenu = true;
var playerCamera = new Vec(0,0);
var outlinelock = false;
var outline = false;
var currentHero = 0;
var heros = ["Magmax","Jotunn","Kopo"]
var herocolors = [];
var switchHeroLock = false;
var switchModeLock = false;
var mouseP = false;
var modes = ["Normal"];
var mode = 0;
var imgJotunn;
var finishedSpeedrun = false;
var time = 0;
var skipFiveLevelLock = false;
var mouseMode = false;
var timeM = 0;
var skippedLevel = false;
var skipLevel = false;
var cursorSize = 5;
var cursorChange = false;
var fireworksIndex  = 0;
const game = new Game();
const controller = new Controller();
const display = new Display();
const engine = new Engine(update,render);
var canvas;
var ctx;
var s;
var spawnFireworks = 0;
function mousePressed(){
 mouseP = true; 
}
function mouseReleased(){
 mouseP = false; 
}
function mouseClicked(){
 if(!mainMenu && !finishedSpeedrun){
   if(mouseMode){
    mouseMode = false; 
   }else if(!mouseMode){
    mouseMode = true; 
   }
 }

}
function resize(){ 
  let winw = window.innerWidth;
  let winh = window.innerHeight;
  let xvalue = winw/canvas.width;
  let yvalue = winh/canvas.height;
 
  s = xvalue;
  if(yvalue<xvalue){
    s =yvalue;
  }
  canvas.style.transform ="scale(" + s +")";
  canvas.style.left = (winw-canvas.width)/2 + "px";
  canvas.style.top =(winh-canvas.height)/2+"px";
  win = new Vec(canvas.width,canvas.height);
}
function loadImages(){
  imgLogo = new Image();
  imgLogo.src  = 'https://cdn.discordapp.com/attachments/720377166424178728/725772850580947074/ddodge_logo_final.png'

  imgJotunn =new Image();
  imgJotunn.src = 'https://evades.io/winter-wreath.07f00139.png'
  imgJotunnPower1 = new Image();
  imgJotunnPower1.src='https://evades.io/decay.b84a5b9a.png'

  imgJotunnPower2 = new Image();
  imgJotunnPower2.src =  'https://evades.io/shatter.32a8da4c.png'

  imgMagmax = new Image();
  imgMagmax.src = 'https://evades.io/santa-hat.8ff7f164.png'
  imgMagmaxPower1 = new Image();
  imgMagmaxPower1.src ='https://evades.io/flow.dae3149d.png'
  imgMagmaxPower2 = new Image();
  imgMagmaxPower2.src= 'https://evades.io/harden.5bbbb359.png'
  imgMagmaxPumpkin = new Image();
  imgMagmaxPumpkin.src = 'https://evades.io/pumpkin_on.5fe3afd5.png'
  imgMagmaxPumpkinOff = new Image();
  imgMagmaxPumpkinOff.src = 'https://evades.io/pumpkin_off.bfce688c.png'
  imgKopo=  new Image();
  imgKopo.src = 'https://evades.io/silver-crown.ffa388d3.png'
  imgKopoPower1 = new Image();
  imgKopoPower1.src = ('https://evades.io/fusion.4854fbec.png')
  imgKopoPower2 = new Image();
  imgKopoPower2.src ='https://evades.io/black_hole.c2eb364f.png'
  imgAreaTeleporter = new Image();
  imgAreaTeleporter.src ='https://www.xmple.com/wallpaper/cyan-turquoise-gradient-linear-2880x1800-c2-16b2d4-16d48f-a-225-f-14.svg'
  imgSideTeleporter = new Image();
  imgSideTeleporter.src ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTArSgslidc3roSmkvs2SfmGvU-Jc-IRVX5CQ&usqp=CAU'
  imgTeleporter = new Image();
  imgTeleporter.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcICAgIBwcHBwcIBwoHBwcHBw8ICQcNFREWFhURExUYHCggGBolJxMfITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDisZFRkrKy0tLSsrKysrKy03LTcrKysrKysrKysrKysrKy0rLSsrKysrKy0tNy0rKystNzcrLf/AABEIAKgBLAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAACAQAGBQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAaAQEBAQEBAQEAAAAAAAAAAAACAQMABQQG/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8A+sIqV+TsegNQkGxRQhCxUo0qlCxRqFRCkNGnRoVRo0qlCqNRalGqKUqNRUo0qiKKUqjlGotYo5GZjjmZma5czMzfLmZlb5RlRW+XMzRm+UWMzNo57iEjyrHyjUJKNiiNKpQsIUVAsUalKpQsUKlKjQsURp0aFijRp0aNIalWpRUahVKijUVHcVKi1CjkZUOOZmZrlzMzN8uZUVvlGVIrfLmZlb5RmZm8c95CR5dj5BonRoWKNSlRCxRQqgWENGnRoWKNGlUoWKFSlRoWENSlRo2KNGmNHiilKjUVEVK5UqKixUZmaRyMrNcuRlZtlzNGZvlGVmb5cyszfKMqK3jnviaPMsfGFQkGxRonRoWKNQqlZ2EFSlUoWKFGnRoWENGlUoWKFSlRo2KKElGwho0qlRRSqlc4WVFiozMcVGZmkczMzbLmZmb5RWZm+XKyK+jLmVGbZR0SEjz7HxBUOjQsURp0aFijRp0aFijRp0aFhDRpVKzsIKlKjQsUaNOiNhDRpVKKhUKiKpRJK5RSkhKiKlKKjMzSOZmZrlzNGZtlzKjN81FVGfRmuVmZtlHSJSSvjsfAFSlUCxQqU7BoWENGnRrOxRo06NCwgqUqNCwho06NZ2KFSlRo0ho0qlCkNGklRQqUqlRRRUVUqValKKjKhxzIzNYqsjNc1ysjN81FZFbZrlZFb5qOnQkYWPOGwaY0LFFKVQLCCjTo0LFGjSqVnYQUadGhYQVCos6Q0aVShVCjTo0aQ0aVGio1KVGoQoQuVKlWpSisjMUVGZDlczMjWVVZGa5qKos2zpxayM2mnOsRUKx5aDSqULFFCShYoUaVSs7CgUadGs7CGjTo0KQUadGs6QUadGhSCjTohSGjSo0VGjSqVCEaSVFGoqKqItReqyMhSqzMjSVzMyNJVVkZrNIqizaac7BCR9VjyRqFUoWKNGlUoWEFiUqNZ2KNGnRrOlAo06NZ0oFGnRoUoFGlRrOkNEqNCkNGnRo0gqUqNEoKValRRRRriaoyV3VZGqL1WRkOVyoyHNKrIzSacrajNZpztEVHp14yJVQKo1KVGhSGjTo1nVCpSo1nTgUadGs6UCjTo1nSgUKdGs6UGjSo0KUGjSo0KQ0aVGiQ0aVSisEaVGoSJVSu6qDVSr1UZqi9VkZClVWRmkrlZGaSudtUrM9qvFaizBVRKzBVGjWZnSGjWZnSg0azM6UGjWZnSGhWZnSg0arM6cCjWYKQ0azDSgpWYVGjVYSg0WZyolZnEiMzlRGYorIzHHMzM0jn/9k=';
  imgMagmaxWow = new Image();
  imgMagmaxWow.src ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYZgqJ81xqC6oNYrRQUy8OACMYOPHJKe4Jbw&usqp=CAU'
  imgJotunnThonk = new Image();
  imgJotunnThonk.src = 'data:image/jpeg;base64,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';
  imgKopoGlasses = new Image();
  imgKopoGlasses.src ='data:image/jpeg;base64,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'
}
var mouse = new Vec(0,0);
function setup() {
  noCanvas()
 // frameRate(60);

  if(mainMenu){
  win = new Vec(1280,720);
  }
  herocolors = [ new Color(245, 12, 12), new Color(19, 165, 191), new Color(119, 86, 122)]
canvas = document.getElementById('cvs');  
  canvas.width = win.x;
  canvas.height = win.y;
ctx = canvas.getContext('2d')
canvas.style.position = "absolute";
    ctx.imageSmoothingEnabled = true;
  resize();
  document.onmousemove = function(t){
    let e = canvas.getBoundingClientRect();
      mouse = new Vec((t.pageX - e.left) / s,(t.pageY - e.top) / s)
}
  loadImages();
 engine.start();
}
function keyPressed(){
  if(!mainMenu){
 controller.keys[keyCode] = true; 
  }
}
function keyReleased(){
  if(!mainMenu){
 controller.keys[keyCode] = false; 
  }
}
document.oncontextmenu = function(event){
  event.preventDefault()
}
function windowResized() {
 resize()
}

function update(dt){
  if(!mainMenu){
  if(game.player.pos.x+game.player.radius>360 && game.player.pos.y-game.player.radius<2760){
  if(game.zone === 0 || game.zone === 1){ //Crystal Cone and Crystal Cone Hardd
    game.player.friction = 0.8;
  }
  if(game.zone === 2){ //Disastrous Wonderland
    game.player.friction = 0.7;
  }
  if(game.zone === 3 || game.zone === 4){ //Nightmare and Nightmare hard
    game.player.friction = 0.7;
  }
    if(game.zone === 5){ //Novel Name
      game.player.friction = 0.74
  }else if(game.zone === 6){
     game.player.friction = 0.78;
  }
  }else{
   game.player.friction = 0.75; 
  }
 
    game.player.collideEnemy(controller,game);
 game.player.simulate(game,controller,dt)
  if(controller.outline && !outlinelock){
   if(outline){
    outline = false; 
   }else{
    outline = true; 
   }
    outlinelock = true;
  }
  if(!controller.outline){
   outlinelock = false; 
  }
  for(let enemy of game.enemies){
    enemy.update(game,dt);
    if(enemy.type =='close'){
     enemy.sizeUpdate(game.player,dt); 
    }
  }
  for(let i=game.bullets.length -1; i>=0;i--){
   game.bullets[i].update(dt);
    if(game.bullets[i].toDelete){
     game.bullets.splice(i,1); 
    }
  }
  if(controller.skipLevel){
   game.player.pos.x = world.x-100; 
    skippedLevel = true;
    skipLevel = true;
  }
    if(skipLevel){
     skippedLevel = true; 
    }
    if(skippedLevel){
     skipLevel = true; 
    }
       /*
  if(controller.skipFiveLevels&&!skipFiveLevelLock){
    skipFiveLevelLock = true;
   game.level+=4;
    game.player.pos.x = world.x-100;
  }
  if(!controller.skipFiveLevels){
   skipFiveLevelLock = false; 
  }*/
  playerCamera = game.player.pos;
  }
 /* if(cursorSize>=0&&!cursorChange){
  cursorSize+=15*dt
    cursorChange = false;
  }
  if(cursorSize>=10){
   cursorSize =10;
    cursorChange = true;
  }
  if(cursorChange||cursorSize>=10){
   cursorSize-=15*dt
  }
  if(cursorSize<=0){
    cursorSize =0;
   cursorChange = false; 
  }*/
 

}

function render(dt){  
  ctx.clearRect(0,0,canvas.width,canvas.height)
  if(mainMenu&&time===0){
   display.menu(dt);
  }else if(!finishedSpeedrun){
  display.draw(game,fov,playerCamera,win,outline,dt)
  }
   if(finishedSpeedrun){
      finishedSpeedrun = true;
      game.level = 41;
    /*  background(125);
      fill(0);
      textSize(40);
      text(`Region Defeated:${game.areas[game.zone]}`,win.x/2-230,40);
      text(`Hero Used:${heros[currentHero]}`,win.x/2-150,80);
      if(time<9){
      text(`Time:${timeM}:0${time}`,win.x/2-70,120);
        }else{
         text(`Time:${timeM}:${time}`,win.x/2-70,120); 
        }
      text(`Deaths:${game.player.deaths}`,win.x/2-70,160);
      if(skippedLevel || skipLevel){
        fill(255,0,0);
        noStroke();
        circle(win.x/2+30,win.y/2-10,300,300);
        fill(0);
       text(`Skipped Levels`,win.x/2-100,win.y/2) 
      }
      */
        ctx.fillStyle="rgb(200, 200, 200)"
      ctx.fillRect(0,0,win.x,win.y);
      for(let i =fireworks.length-1;i>=0;i--){
        fireworks[i].simulate(dt)
       if(fireworks[i].delete===0){
        fireworks.splice(i,1); 
       }
      }
       
if(endtime<60){     ctx.fillStyle=`rgb(${herocolors[currentHero].r},${herocolors[currentHero].g},${herocolors[currentHero].b})`;
      ctx.beginPath();
  ctx.arc(win.x/2, win.y/2, 30, 0,Math.PI*2);
      ctx.fill();
  ctx.fillStyle=`rgba(200, 200, 200,${frames/60})`
  ctx.beginPath();
  ctx.arc(win.x/2, win.y/2, 31, 0,Math.PI*2);
      ctx.fill();
              }
  if (frames*4>450){
    endtime +=1*dt*playSpeed

  }
  
  ctx.font = "50px Trebuchet MS"
  ctx.textAlign ="center"
  if (endtime < 120){
  ctx.fillStyle=`rgba(0, 0, 0, ${1-endtime/2.5})`
  ctx.fillText("You Win!".substring(-1, (endtime / 5)), win.x/2, win.y/2);
  }
  if (endtime > 100 && endtime < 300){
    ctx.fillStyle="black"
  ctx.fillText(`Region Defeated: ${game.areas[game.zone]}`.substring(-1, ((endtime-100) / 5)), win.x/2, win.y/2);
  }
  if (endtime > 299 && endtime < 350){
    ctx.fillStyle=`rgba(0, 0, 0,${ 255-(endtime-299)*10})`
  ctx.fillText(`Region Defeated: ${game.areas[game.zone]}`.substring(-1, ((endtime-100) / 5)), win.x/2, win.y/2 - (endtime-299)*2);
  }
  if (endtime > 350 && endtime < 500){
    ctx.fillStyle="black";
  ctx.fillText(`Hero Used: ${heros[currentHero]}`.substring(-1, ((endtime-350) / 5)), win.x/2, win.y/2);
  }
  if (endtime > 499 && endtime < 550){
    ctx.fillStyle=`rgba(0, 0, 0, ${255-(endtime-499)*10})`
  ctx.fillText(`Hero Used: ${heros[currentHero]}`.substring(-1, ((endtime-100) / 5)), win.x/2, win.y/2 - (endtime-499)*2);
  }
    if (endtime > 549 && endtime < 650){
ctx.fillStyle="black"
      if(time<=9){
ctx.fillText(`Time: ${timeM}:0${time}`.substring(-1, ((endtime-550) / 5)), win.x/2, win.y/2);
      }else{
       ctx.fillText(`Time: ${timeM}:${time}`.substring(-1, ((endtime-550) / 5)), win.x/2, win.y/2); 
      }
  }
  if (endtime > 649 && endtime < 700){
    ctx.fillStyle=`rgba(0, 0, 0, ${255-(endtime-650)*10})`
    if(time<=9){
  ctx.fillText(`Time: ${timeM}:0${time}`.substring(-1, ((endtime-550) / 5)), win.x/2, win.y/2 - (endtime-650)*2);
    }else{
      ctx.fillText(`Time: ${timeM}:${time}`.substring(-1, ((endtime-550) / 5)), win.x/2, win.y/2 - (endtime-650)*2); 
    }
  }
    if (endtime > 699 && endtime < 800){
    ctx.fillStyle="rgb(0, 0, 0)"
  ctx.fillText(`Deaths: ${game.player.deaths}`.substring(-1, ((endtime-700) / 5)), win.x/2, win.y/2);
  }
  if (endtime > 799 && endtime < 850){
    ctx.fillStyle=`rgba(0, 0, 0,${ 255-(endtime-799)*10})`
  ctx.fillText(`Deaths: ${game.player.deaths}`.substring(-1, ((endtime-700) / 5)), win.x/2, win.y/2 - (endtime-799)*2);
  }
  
  if (endtime > 850){
    ctx.fillStyle=`rgba(0, 0, 0,${(endtime-850)*2.5})`
    ctx.font = "40px Trebuchet MS"
      ctx.fillText(`Region Defeated: ${game.areas[game.zone]}`,win.x/2,40);
      ctx.fillText(`Hero Used: ${heros[currentHero]}`,win.x/2,80);
    if(time<=9){
      ctx.fillText(`Time: ${timeM}:0${time}`,win.x/2,120);
    }else{
      ctx.fillText(`Time: ${timeM}:${time}`,win.x/2,120); 
    }
      ctx.fillText(`Deaths: ${game.player.deaths}`,win.x/2,160);
  }
  

  
  fireworksIndex+=5*dt
  if(fireworksIndex>=1){
    fireworksIndex = 0;
    spawnFireworks++;
  }
  if (frames > 150&&spawnFireworks>0){
  let spawnx = randomNumber(0, win.x);
  let spawny = randomNumber(0, win.y*1/2);
  let acolor = new Color(255,randomNumber(0,255),randomNumber(0,100),0.35)
  let size = randomNumber(6, 40);
    for(let i=spawnFireworks;i>=0;i--){
  fireworks.push(new Firework(spawnx, spawny, 0, acolor, size));
  fireworks.push(new Firework(spawnx, spawny, 1, acolor, size));
  fireworks.push(new Firework(spawnx, spawny, 2, acolor, size));
  fireworks.push(new Firework(spawnx, spawny, 3, acolor, size));
  fireworks.push(new Firework(spawnx, spawny, 4, acolor, size));
  fireworks.push(new Firework(spawnx, spawny, 5, acolor, size));
  fireworks.push(new Firework(spawnx, spawny, 6, acolor, size));
  fireworks.push(new Firework(spawnx, spawny, 7, acolor, size));
    }
  spawnFireworks = false;
  }
    }

  ctx.fillStyle="black";
  ctx.beginPath();
  ctx.arc(mouse.x,mouse.y,cursorSize,0,Math.PI*2);
  ctx.fill();

}
setInterval(()=>{
   if(!finishedSpeedrun&&!mainMenu){
   time++;
     if(time===60){
      timeM++;
       time = 0;
     }
  }
},1000)
setInterval(()=>{
  for(let enemy of game.enemies){
   if(enemy.type =='switch'){
     globalSwitch++
     break;
   }
  }
},4000)

