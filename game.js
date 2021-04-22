class Game {
  constructor() {
    this.areas = ["Crystal Core", "Crystal Core Hard", "Disastrous Wonderland", "Nightmare", "Ominous Occult", "Big Bad Balls","Crowded Cave"]
    this.zone = 0;
    this.world = {
      teleporters: [new Teleporter(world.x - 60, 0, 60, world.y, 'right')],
      safes: [new Safe(0, 0, 360, world.y), new Safe(world.x - 420, 0, 360, world.y)],
      areaTeleporters: [new AreaTeleporter(0, 0, 360, 40, 'top'), new AreaTeleporter(0, world.y - 40, 360, 40, 'bottom'), new AreaTeleporter(0,0,60,world.y,'side')],
    }
    this.hellZone = 50;
    this.enemies = [];
    this.bullets = [];
    this.resetEnemies = function() {
      this.enemies = [];
      this.bullets = []; 
      this.world.areaTeleporters=[];
    }
    this.level = 0;
  }
  loadLevel() {
    world = new Vec(3150, 450);
    this.resetEnemies();
    if (this.zone === 0) {
      if (this.level === 0) {
        this.resetEnemies();
        
        this.spawnEnemy(5, 4, 100, 'border');
        this.spawnEnemy(5, 3, 75, 'normal');
      } else if (this.level === 1) {
        this.resetEnemies();
        this.spawnEnemy(5, 4, 100, 'border');
        this.spawnEnemy(15, 4, 50, 'normal')
      } else if (this.level === 2) {
        this.resetEnemies();
        this.spawnEnemy(5, 4, 100, 'border');
        this.spawnEnemy(20, 2, 60, 'normal');
      } else if (this.level === 3) {
        this.resetEnemies();
        this.spawnEnemy(25, 3, 40, 'normal');
        this.spawnEnemy(5, 2, 80, 'normal');
        this.spawnEnemy(2, 1.5, 150, 'normal');
      } else if (this.level === 4) {
        this.resetEnemies();
        this.spawnEnemy(3, 1.5, 200, 'normal');
        this.spawnEnemy(40, 2.5, 40, 'normal');
      } else if (this.level === 5) {
        this.resetEnemies();
        this.spawnEnemy(25, 2, 40, 'dasher');
      } else if (this.level === 6) {
        this.resetEnemies();
        this.spawnEnemy(5, 4, 100, 'border');
        this.spawnEnemy(25, 2, 50, 'dasher');
        this.spawnEnemy(5, 3.5, 120, 'normal');
      } else if (this.level === 7) {
        this.resetEnemies();
        this.spawnEnemy(15, 2, 140, 'dasher');
      } else if (this.level === 8) {
        this.spawnEnemy(10, 3, 100, 'border');
        this.resetEnemies();
        this.spawnEnemy(30, 2, 30, 'dasher');
        this.spawnEnemy(30, 1.5, 30, 'normal');
      } else if (this.level === 9) {
        this.resetEnemies();
        this.spawnEnemy(5, 6, 100, 'border');
        this.spawnEnemy(2, 2, 200, 'dasher');
        this.spawnEnemy(1, 2, 200, 'normal');
        this.spawnEnemy(10, 2.3, 40, 'dasher');
        this.spawnEnemy(20, 3, 40, 'normal');
      } else if (this.level === 10) {
        this.resetEnemies();
        this.spawnEnemy(20, 3, 40, 'homing');
      } else if (this.level === 11) {
        this.resetEnemies();
        this.spawnEnemy(4, 2, 170, 'homing');
        this.spawnEnemy(10, 2.5, 70, 'homing');
      } else if (this.level === 12) {
        this.resetEnemies();
        this.spawnEnemy(12, 2.5, 30, 'homing');
        this.spawnEnemy(20, 3, 40, 'normal');
      } else if (this.level === 13) {
        this.resetEnemies();
        this.spawnEnemy(15, 3, 35, 'normal');
        this.spawnEnemy(5, 3, 55, 'homing');
        this.spawnEnemy(5, 2, 55, 'dasher');
      } else if (this.level === 14) {
        this.resetEnemies();
        this.spawnEnemy(10, 4, 100, 'border');
        this.spawnEnemy(30, 2, 50, 'normal');
        this.spawnEnemy(2, 1.5, 150, 'normal');
        this.spawnEnemy(2, 1.5, 150, 'homing');
        this.spawnEnemy(2, 2, 150, 'dasher');
      } else if (this.level === 15) {
        this.resetEnemies();
        this.spawnEnemy(20, 2.5, 30, 'slowdown');
      } else if (this.level === 16) {
        this.resetEnemies();
        this.spawnEnemy(15, 2.5, 40, 'slowdown');
        this.spawnEnemy(30, 3, 40, 'normal');
      } else if (this.level === 17) {
        this.resetEnemies();
        this.spawnEnemy(15, 2.5, 70, 'slowdown');
        this.spawnEnemy(8, 2, 40, 'dasher');
        this.spawnEnemy(2, 1.5, 100, 'dasher');
        this.spawnEnemy(10, 2, 30, 'normal');
      } else if (this.level === 18) {
        this.resetEnemies();
        this.spawnEnemy(5, 2.5, 120, 'slowdown');
        this.spawnEnemy(5, 1.5, 120, 'dasher');
        this.spawnEnemy(8, 2.5, 80, 'normal');
      } else if (this.level === 19) {
        this.resetEnemies();
        this.spawnEnemy(5, 5, 50, 'border');
        this.spawnEnemy(40, 2.5, 35, 'normal');
        this.spawnEnemy(4, 2, 150, 'slowdown');
        this.spawnEnemy(1, 2, 200, 'homing');
        this.spawnEnemy(2, 2, 150, 'dasher');
      } else if (this.level === 20) {
        this.resetEnemies();
        this.spawnEnemy(20, 2, 40, 'close');
      } else if (this.level === 21) {
        this.resetEnemies();
        this.spawnEnemy(15, 3, 60, 'close');
        this.spawnEnemy(10, 3, 30, 'slowdown');
      } else if (this.level === 22) {
        this.resetEnemies();
        this.spawnEnemy(5, 4, 100, 'border');
        this.spawnEnemy(90, 2, 30, 'normal');
      } else if (this.level === 23) {
        this.resetEnemies();
        this.spawnEnemy(5, 4, 100, 'border');
        this.spawnEnemy(80, 1.5, 30, 'dasher');

      } else if (this.level === 24) {
        this.resetEnemies();
        this.spawnEnemy(35, 2, 10, 'close');
        this.spawnEnemy(10, 1.5, 80, 'border');
      } else if (this.level === 25) {
        this.resetEnemies();
        this.spawnEnemy(10, 2, 40, 'sniper', 400);
      } else if (this.level === 26) {
        this.resetEnemies();
        this.spawnEnemy(20, 2, 30, 'sniper', 300);
      } else if (this.level === 27) {
        this.resetEnemies();
        this.spawnEnemy(10, 2, 100, 'sniper', 400);
      } else if (this.level === 28) {
        this.resetEnemies();
        this.spawnEnemy(7, 2, 40, 'exploder', 200);
      } else if (this.level === 29) {
        this.resetEnemies();
        this.spawnEnemy(10, 2, 50, 'border');
        this.spawnEnemy(4, 2, 80, 'slowdown');
        this.spawnEnemy(2, 2, 80, 'sniper', 250);
        this.spawnEnemy(5, 2, 100, 'dasher');
        this.spawnEnemy(2, 2, 80, 'exploder', 400);
        this.spawnEnemy(30, 2, 30, 'normal');
      } else if (this.level === 30) {
        this.resetEnemies();
        this.spawnEnemy(10, 2.5, 100, 'close');
      } else if (this.level === 31) {
        this.resetEnemies();
        this.spawnEnemy(12, 2.5, 150, 'slowdown');
      } else if (this.level === 32) {
        this.resetEnemies();
        this.spawnEnemy(25, 3, 200, 'normal');
      } else if (this.level === 33) {
        this.resetEnemies();
        this.spawnEnemy(15, 3, 150, 'homing')
      } else if (this.level === 34) {
        this.resetEnemies();
        this.spawnEnemy(15, 3, 80, 'sniper', 200);
      } else if (this.level === 35) {
        this.resetEnemies();
        this.spawnEnemy(30, 3, 50, 'normal');
        this.spawnEnemy(15, 2, 80, 'slowdown');
      } else if (this.level === 36) {
        this.resetEnemies();
        this.spawnEnemy(30, 2, 30, 'close');
        this.spawnEnemy(40, 2, 20, 'normal');
      } else if (this.level === 37) {
        this.resetEnemies();
        this.spawnEnemy(70, 4, 20, 'normal');
      } else if (this.level === 38) {
        this.resetEnemies();
        this.spawnEnemy(55, 4, 20, 'slowdown');
      } else if (this.level === 39) {
        this.resetEnemies();
        this.spawnEnemy(7, 3, 120, 'normal');
        this.spawnEnemy(5, 3, 120, 'slowdown');
        this.spawnEnemy(4, 2, 70, 'close')
        this.spawnEnemy(40, 4, 40, 'normal');
        this.spawnEnemy(10, 5, 50, 'border');
      } else if (this.level === 40) {
        this.resetEnemies();
        this.spawnEnemy(50, 4, 40, 'normal');
        this.spawnEnemy(30, 4, 30, 'slowdown');
        this.spawnEnemy(2, 2, 120, 'dasher');
        this.spawnEnemy(1, 2, 150, 'homing');
      }
    } 
    else if (this.zone === 1) {
       world = new Vec(4000, 350);
      if (this.level === 0) {
        this.resetEnemies();
        this.spawnEnemy(20, 4, 40, 'icicle');
        this.spawnEnemy(15, 4, 40, 'normal');
      } else if (this.level === 1) {
        this.resetEnemies();
        this.spawnEnemy(25, 4, 60, 'icicle');
        this.spawnEnemy(15, 4, 50, 'normal');
      } else if (this.level === 2) {
        this.resetEnemies();
        this.spawnEnemy(30, 5, 40, 'icicle');
        this.spawnEnemy(15, 3, 35, 'normal');
      } else if (this.level === 3) {
        this.resetEnemies();
        this.spawnEnemy(50, 4, 30, 'icicle');
        this.spawnEnemy(15, 3, 60, 'normal');
      } else if (this.level === 4) {
        this.resetEnemies();
        world = new Vec(5000, 250);
        this.spawnEnemy(100, 3, 20, 'icicle');
        this.spawnEnemy(20, 4, 30, 'normal');
      } else if (this.level === 5) {
        this.resetEnemies();
        world = new Vec(4000, 750);
        this.spawnEnemy(50, 6, 45, 'icicle');
        this.spawnEnemy(30, 3, 30, 'dasher');
        this.spawnEnemy(20, 3, 40, 'normal');
      } else if (this.level === 6) {
        this.resetEnemies();
        world = new Vec(4200, 850);
        this.spawnEnemy(55, 7, 30, 'icicle');
        this.spawnEnemy(50, 5, 40, 'normal');
      } else if (this.level === 7) {
        this.resetEnemies();
        world = new Vec(4300, 950);
        this.spawnEnemy(55, 7, 30, 'icicle');
        this.spawnEnemy(55, 3.5, 40, 'dasher');
      } else if (this.level === 8) {
        this.resetEnemies();
        world = new Vec(4000, 200);
        this.spawnEnemy(25, 4, 30, 'icicle');
        this.spawnEnemy(25, 2, 40, 'dasher');
      } else if (this.level === 9) {
        this.resetEnemies();
        world = new Vec(5000, 2000);
        this.spawnEnemy(300, 5, 30, 'normal');
      } else if (this.level === 10) {
        this.resetEnemies();
        world = new Vec(5000, 2000);
        this.spawnEnemy(150, 5, 30, 'normal');
        this.spawnEnemy(150, 4, 30, 'dasher');
        this.spawnEnemy(10, 5, 200, 'normal');
        this.spawnEnemy(10, 4, 200, 'dasher');
        this.spawnEnemy(50, 10, 200, 'border');
      } else if (this.level === 11) {
        this.resetEnemies();
        world = new Vec(4000, 1500);
        this.spawnEnemy(200, 1.5, 30, 'homing');
        this.spawnEnemy(50, 10, 200, 'border');

      } else if (this.level === 12) {
        this.resetEnemies();
        world = new Vec(3000, 1000);
        this.spawnEnemy(20, 1.5, 30, 'homing');
        this.spawnEnemy(40, 7, 30, 'normal');
        this.spawnEnemy(50, 10, 200, 'border');

      } else if (this.level === 13) {
        this.resetEnemies();
        this.spawnEnemy(25, 1.5, 30, 'homing');
        this.spawnEnemy(25, 1.5, 30, 'normal');
        this.spawnEnemy(25, 1.5, 30, 'dasher');

      } else if (this.level === 14) {
        this.resetEnemies();
        world = new Vec(5000, 90);
        this.spawnEnemy(30, 0.5, 15, 'homing');

      } else if (this.level === 15) {
        this.resetEnemies();
        world = new Vec(5000, 1000);
        this.spawnEnemy(500, 0.5, 15, 'homing');
        this.spawnEnemy(10, 4, 100, 'normal');
        this.spawnEnemy(60, 30, 60, 'border');

      } else if (this.level === 16) {
        this.resetEnemies();
        world = new Vec(5000, 1000);
        this.spawnEnemy(220, 3, 30, 'slowdown');
        this.spawnEnemy(60, 30, 60, 'border');

      } else if (this.level === 17) {
        this.resetEnemies();
        world = new Vec(2500, 500);
        this.spawnEnemy(200, 0.5, 30, 'slowdown');
        this.spawnEnemy(60, 30, 60, 'border');
 
      } else if (this.level === 18) {
        this.resetEnemies();
        world = new Vec(3120, 450);
        
        this.spawnEnemy(44, 6, 20, 'normal');
        
        this.spawnEnemy(4, 8, 60, 'border');

      }else if (this.level === 19) {
        this.resetEnemies();
        world = new Vec(3120, 450);
        
        this.spawnEnemy(44, 4, 40, 'slowdown');
        
        this.spawnEnemy(4, 8, 60, 'border');

      }else if (this.level === 20) {
        this.resetEnemies();
        world = new Vec(3120, 450);
        
        this.spawnEnemy(29, 5, 20, 'normal');
        this.spawnEnemy(29, 3, 30, 'dasher');
        
        this.spawnEnemy(4, 8, 60, 'border');

      }else if (this.level === 21) {
        this.resetEnemies();
        world = new Vec(3120, 450);
        
        this.spawnEnemy(29, 5, 20, 'close');
        this.spawnEnemy(12, 8, 60, 'border');

      }else if (this.level === 22) {
        this.resetEnemies();
        world = new Vec(3120, 450);
        
        this.spawnEnemy(25, 4, 60, 'close');
        this.spawnEnemy(12, 8, 60, 'border');

      }else if (this.level === 23) {
        this.resetEnemies();
        world = new Vec(3120, 450);
        
        this.spawnEnemy(90, 4, 20, 'normal');
        this.spawnEnemy(12, 8, 60, 'border');

      } else if (this.level === 24) {
        this.resetEnemies();
        world = new Vec(3120, 600);
        
        this.resetEnemies();
        this.spawnEnemy(35, 6.5, 10, 'close');
        this.spawnEnemy(10, 1.5, 80, 'border');

      } else if (this.level === 25) {
        this.resetEnemies();
        world = new Vec(5000, 1000);
        
        this.resetEnemies();
        this.spawnEnemy(30, 3, 40, 'sniper', 250);
        this.spawnEnemy(10, 35, 120, 'border');

      } else if (this.level === 26) {
        this.resetEnemies();
        world = new Vec(5000, 1000);
        
        this.resetEnemies();
        this.spawnEnemy(10, 3, 40, 'sniper', 250);
        this.spawnEnemy(100, 5, 30, 'normal');
        this.spawnEnemy(10, 35, 120, 'border');

      } else if (this.level === 27) {
        this.resetEnemies();
        world = new Vec(6000, 1200);
        
        this.resetEnemies();
        this.spawnEnemy(10, 3, 200, 'sniper', 250);
        this.spawnEnemy(100, 5, 30, 'normal');
        this.spawnEnemy(10, 35, 120, 'border');

      } else if (this.level === 28) {
        this.resetEnemies();
        world = new Vec(6000, 1200);
        
        this.resetEnemies();
        this.spawnEnemy(5, 3, 400, 'sniper', 250);
        this.spawnEnemy(100, 3, 60, 'normal');
        this.spawnEnemy(10, 35, 120, 'border');

      } else if (this.level === 29) {
        this.resetEnemies();
        world = new Vec(10000, 3000);
        
        this.resetEnemies();
        this.spawnEnemy(2, 3, 2500, 'sniper', 300);
        this.spawnEnemy(250, 1, 200, 'slowdown');

      } else if (this.level === 30) {
        this.resetEnemies();
        world = new Vec(5000, 1000);
        
        this.resetEnemies();
        this.spawnEnemy(30, 2, 25, 'sniper', 300);
        this.spawnEnemy(250, 1, 30, 'slowdown');
        this.spawnEnemy(100, 40, 140, 'border');

      } else if (this.level === 31) {
        this.resetEnemies();
        world = new Vec(3120, 450);
        
        this.resetEnemies();
        this.spawnEnemy(50, 3, 30, 'icicle');
        this.spawnTele(360, 0, 200, 200);
        this.spawnTele(1073, 250, 200, 200);
        this.spawnTele(1787, 0, 200, 200);
        this.spawnTele(2500, 250, 200, 200);

      } else if (this.level === 32) {
        this.resetEnemies();
        world = new Vec(3120, 450);
        
        this.resetEnemies();
        this.spawnEnemy(70, 6, 30, 'icicle');
        this.spawnTele(360, 0, 300, 300);
        this.spawnTele(1040, 150, 300, 300);
        this.spawnTele(1720, 0, 300, 300);
        this.spawnTele(2400, 150, 300, 300);

      } else if (this.level === 33) {
        this.resetEnemies();
        world = new Vec(3120, 450);
        
        this.resetEnemies();
        this.spawnEnemy(44, 6, 35, 'normal');
        this.spawnTele(360, 0, 300, 300);
        this.spawnTele(1040, 150, 300, 300);
        this.spawnTele(1720, 0, 300, 300);
        this.spawnTele(2400, 150, 300, 300);

      } else if (this.level === 34) {
        this.resetEnemies();
        world = new Vec(3120, 450);
        
        this.resetEnemies();
        this.spawnEnemy(65, 3, 35, 'dasher');
        this.spawnTele(360, 0, 300, 300);
        this.spawnTele(1040, 150, 300, 300);
        this.spawnTele(1720, 0, 300, 300);
        this.spawnTele(2400, 150, 300, 300);

      } else if (this.level === 35) {
        this.resetEnemies();
        world = new Vec(3120, 650);
        
        this.resetEnemies();
        this.spawnEnemy(45, 1, 35, 'dasher');
        this.spawnEnemy(45, 5, 35, 'normal');
        this.spawnTele(360, 0, 300, 500);
        this.spawnTele(1040, 150, 300, 500);
        this.spawnTele(1720, 0, 300, 500);
        this.spawnTele(2400, 150, 300, 500);

      } else if (this.level === 36) {
        this.resetEnemies();
        world = new Vec(3120, 650);
        
        this.resetEnemies();
        this.spawnEnemy(80, 6, 25, 'normal');
        this.spawnTele(360, 0, 300, 500);
        this.spawnTele(1040, 150, 300, 500);
        this.spawnTele(1720, 0, 300, 500);
        this.spawnTele(2400, 150, 300, 500);

      } else if (this.level === 37) {
        this.resetEnemies();
        world = new Vec(3120, 650);
        
        this.resetEnemies();
        this.spawnEnemy(100, 4, 45, 'normal');
        this.spawnTele(360, 0, 300, 500);
        this.spawnTele(1040, 150, 300, 500);
        this.spawnTele(1720, 0, 300, 500);
        this.spawnTele(2400, 150, 300, 500);

      } else if (this.level === 38) {
        this.resetEnemies();
        world = new Vec(3120, 650);
        
        this.resetEnemies();
        this.spawnEnemy(55, 3.5, 45, 'close');
        this.spawnTele(360, 0, 300, 500);
        this.spawnTele(1040, 150, 300, 500);
        this.spawnTele(1720, 0, 300, 500);
        this.spawnTele(2400, 150, 300, 500);

      } else if (this.level === 39) {
        this.resetEnemies();
        world = new Vec(3120, 650);
        
        this.resetEnemies();
        this.spawnEnemy(55, 5, 30, 'normal');
        this.spawnEnemy(30, 0.1, 20, 'close');
        this.spawnTele(360, 0, 300, 500);
        this.spawnTele(1040, 150, 300, 500);
        this.spawnTele(1720, 0, 300, 500);
        this.spawnTele(2400, 150, 300, 500);

      } else if (this.level === 40) {
        this.resetEnemies();
        world = new Vec(3120, 650);
        
        this.resetEnemies();
        this.spawnEnemy(50, 8, 30, 'normal');
        this.spawnEnemy(15, 1, 20, 'dasher');
        this.spawnEnemy(15, 1, 20, 'close');
        this.spawnEnemy(15, 1, 20, 'homing');
        this.spawnTele(360, 0, 300, 500);
        this.spawnTele(1040, 150, 300, 500);
        this.spawnTele(1720, 0, 300, 500);
        this.spawnTele(2400, 150, 300, 500);

      }
    } else if (this.zone === 2) {
      if (this.level === 0) {
        this.resetEnemies();
        this.spawnEnemy(15, 5, 40, 'rotate');
      } else if (this.level === 1) {
        this.resetEnemies();
        this.spawnEnemy(30, 2, 40, 'rotate');
        this.spawnEnemy(20, 2, 30, 'normal');
      } else if (this.level === 2) {
        this.resetEnemies();
        this.spawnEnemy(25, 5, 40, 'rotate');
      } else if (this.level === 3) {
        this.resetEnemies();
        this.spawnEnemy(10, 4, 20, 'rotate');
        this.spawnEnemy(10, 4, 20, 'circle');
        this.spawnEnemy(20, 3, 20, 'normal');
      } else if (this.level === 4) {
        this.resetEnemies();
        this.spawnEnemy(15, 4, 40, 'weird');
      } else if (this.level === 5) {
        this.resetEnemies();
        this.spawnEnemy(10, 3, 100, 'weird');
        this.spawnEnemy(7, 3, 100, 'rotate');
        this.spawnEnemy(6, 2, 100, 'circle');
        this.spawnEnemy(5, 2, 100, 'slowdown');
      } else if (this.level === 6) {
        this.resetEnemies();
        this.spawnEnemy(8, 3, 30, 'exploder', 300);
      } else if (this.level === 7) {
        this.resetEnemies();
        this.spawnEnemy(60, 2, 20, 'weird');
        this.spawnEnemy(5, 3, 70, 'exploder', 300);
      } else if (this.level === 8) {
        this.resetEnemies();
        this.spawnEnemy(20, 3, 40, 'sniper', 350);
      } else if (this.level === 9) {
        this.resetEnemies();
        this.spawnEnemy(15, 3, 50, 'circle');
        this.spawnEnemy(25, 2, 40, 'weird');
        this.spawnEnemy(10, 2, 70, 'slowdown');
        this.spawnEnemy(7, 3, 30, 'exploder', 250);
      } else if (this.level === 10) {
        this.resetEnemies();
        world = new Vec(7000, 350);
        this.spawnEnemy(25, 2, 35, 'circle');
        this.spawnEnemy(25, 2, 35, 'rotate');
        this.spawnEnemy(25, 2, 35, 'weird');
        this.spawnEnemy(3, 2, 35, 'exploder', 400);
        this.spawnEnemy(3, 2, 35, 'sniper', 400);
        this.spawnEnemy(30, 2, 65, 'border');
      }
    } else if (this.zone === 3) {
      world = new Vec(6150, 450);
      if (this.level === 0) {
        this.resetEnemies();
        this.spawnEnemy(60, 2, 30, 'normal');
        this.spawnEnemy(20, 3, 50, 'slowdown');
        this.spawnEnemy(8, 3, 120, 'rotate');
      } else if (this.level === 1) {
        this.resetEnemies();
        this.spawnEnemy(200, 2, 50, 'slowdown');
      } else if (this.level === 2) {
        this.resetEnemies();
        this.spawnEnemy(35, 4, 40, 'rotate');
        this.spawnEnemy(30, 4, 40, 'weird');
        this.spawnEnemy(35, 4, 40, 'circle');
      } else if (this.level === 3) {
        this.resetEnemies();
        this.spawnEnemy(28, 2.5, 40, 'exploder', 300);
        this.spawnEnemy(20, 2.5, 60, 'sniper', 350);
      } else if (this.level === 4) {
        this.resetEnemies();
        this.spawnEnemy(25, 4, 50, 'normal');
        this.spawnEnemy(30, 4, 35, 'normal');
        this.spawnEnemy(15, 3.5, 80, 'normal');
        this.spawnEnemy(15, 3, 150, 'normal');
      } else if (this.level === 5) {
        this.resetEnemies();
        this.spawnEnemy(100, 4, 60, 'normal');
        this.spawnEnemy(55, 3, 40, 'slowdown');
      }
    } else if (this.zone === 4) {
      world = new Vec(6240, 240);
      this.resetEnemies();
      if (this.level === 0) {
        this.spawnEnemy(50, 2, 20, 'normal');
      } 
      if (this.level === 1) {
        this.spawnEnemy(75, 2, 20, 'normal');
      } 
      if (this.level === 2) {
        this.spawnEnemy(40, 2, 20, 'normal');
        this.spawnEnemy(40, 2, 20, 'slowdown');
      } 
      if (this.level === 3) {
        this.spawnEnemy(50, 4, 20, 'normal');
      } 
      if (this.level === 4) {
        this.spawnEnemy(37, 4, 20, 'normal');
        this.spawnEnemy(38, 4, 20, 'slowdown');
      } 
      if (this.level === 5) {
        this.spawnEnemy(16, 4, 20, 'normal');
        this.spawnEnemy(16, 4, 20, 'slowdown');
        this.spawnEnemy(17, 4, 20, 'immune');
      } 
      if (this.level === 6) {
        this.spawnEnemy(25, 4, 20, 'normal');
        this.spawnEnemy(25, 4, 20, 'slowdown');
        this.spawnEnemy(25, 4, 20, 'immune');
      } 
      if (this.level === 7) {
        this.spawnEnemy(50, 4, 20, 'normal');
        this.spawnEnemy(10, 2, 20, 'sniper', 200);
      } 
      if (this.level === 8) {
        this.spawnEnemy(40, 4, 20, 'normal');
        this.spawnEnemy(20, 2, 20, 'sniper', 200);
      } 
      if (this.level === 9) {
        this.spawnEnemy(25, 7, 20, 'normal');
      } 
      if (this.level === 10) {
        this.spawnEnemy(50, 7, 20, 'normal');
      } 
      if (this.level === 11) {
        this.spawnEnemy(30, 7, 20, 'normal');
        this.spawnEnemy(20, 7, 20, 'slowdown');
      } 
      if (this.level === 12) {
        this.spawnEnemy(15, 7, 20, 'normal');
        this.spawnEnemy(15, 7, 20, 'slowdown');
        this.spawnEnemy(20, 7, 20, 'immune');
        
      } 
      if (this.level === 13) {
        this.spawnEnemy(30, 9, 36, 'immune');
        this.spawnEnemy(20, 2, 36, 'immune');
      } 
      if (this.level === 14) {
        this.spawnEnemy(40, 10, 36, 'immune');
      } 
      if (this.level === 15) {
        this.spawnEnemy(125, 3, 18, 'immune');
        this.spawnEnemy(25, 3, 18, 'slowdown');
      } 
      if (this.level === 16) {
        this.spawnEnemy(175, 3, 20, 'immune');
        this.spawnEnemy(25, 3, 20, 'slowdown');
      } 
      
    } else if (this.zone === 5) {
      world = new Vec(4000, 420);
      if (this.level === 0) {
        this.resetEnemies();
        this.spawnEnemy(10, 4, 90, 'border');
        this.spawnEnemy(20, 4, 90, 'switch');
        this.spawnEnemy(1,0,420,'switch');

      } else if (this.level === 1) {
        this.resetEnemies();
          this.spawnEnemy(10, 4, 90, 'border');
       this.spawnEnemy(2,0,420,'switch');
        this.spawnEnemy(25, 3, 90, 'switch');
      } else if (this.level === 2) {
        this.resetEnemies();
          this.spawnEnemy(10, 4, 90, 'border');
      this.spawnEnemy(3,3,420,'switch');
        this.spawnEnemy(40,3,100,'switch');
      }else if(this.level === 3){
       this.resetEnemies();
        world = new Vec(5000,380);
        this.enemies.push(new BorderEnemy(random(5,10),190));
        this.enemies[this.enemies.length-1].pos = new Vec(190/2,190/2);
         this.enemies.push(new BorderEnemy(random(5,10),190));
        this.enemies[this.enemies.length-1].pos = new Vec(world.x-190/2,world.y-190/2);
         this.enemies.push(new BorderEnemy(random(5,10),190));
        this.enemies[this.enemies.length-1].pos = new Vec(random(190/2,190*3),world.y-190/2);
        this.spawnEnemy(50,3,60,'switch');
      }
    }else if(this.zone===6){
        if(this.level === 0){
      this.resetEnemies();
      this.spawnEnemy(50,0.1,15,'normal'); 
    }else if(this.level === 1){
      this.resetEnemies();
      this.spawnEnemy(150, 0.1, 15, 'normal')
    } else if(this.level === 2){
      this.resetEnemies();
      this.spawnEnemy(100, 1, 15, 'normal')
    } else if(this.level === 3){
      this.resetEnemies();
      this.spawnEnemy(50, 0.5, 18, 'normal')
      this.spawnEnemy(50, 1.5, 12, 'normal')

    } else if(this.level === 4){
      this.resetEnemies();
      this.spawnEnemy(70, 0.5, 20, 'normal')
      this.spawnEnemy(70, 1.5, 15, 'normal')

    } else if(this.level === 5){
      this.resetEnemies();
      this.spawnEnemy(70, 0.5, 20, 'normal')
      this.spawnEnemy(40, 3.5, 15, 'normal')

    } else if(this.level === 6){
      this.resetEnemies();
      this.spawnEnemy(70, 0.5, 30, 'normal')
      this.spawnEnemy(40, 3.5, 20, 'normal')

    } else if(this.level === 7){
      this.resetEnemies();
      this.spawnEnemy(70, 0.5, 50, 'normal')
      this.spawnEnemy(40, 1.5, 30, 'normal')

    } else if(this.level === 8){
      this.resetEnemies();
      this.spawnEnemy(40, 5, 15, 'normal')

    } else if(this.level === 9){
      this.resetEnemies();
      this.spawnEnemy(55, 4, 30, 'normal')

    } else if(this.level === 10){
      this.resetEnemies();
      this.spawnEnemy(75, 1.2, 75, 'normal')

    } 
else if(this.level === 11){
      this.resetEnemies();
      this.spawnEnemy(25, 0.1, 12, 'circle')
      this.spawnEnemy(25, 0.1, 12, 'rotate')
      this.spawnEnemy(25, 0.1, 12, 'weird')
      
    } else if(this.level === 12){
      this.resetEnemies();
      this.spawnEnemy(25, 1, 12, 'circle')
      this.spawnEnemy(25, 1, 12, 'rotate')
      this.spawnEnemy(25, 1, 12, 'weird')
      
    } else if(this.level === 13){
      this.resetEnemies();
      this.spawnEnemy(40, 3, 20, 'circle')
      this.spawnEnemy(25, 1, 12, 'rotate')
      this.spawnEnemy(25, 1, 12, 'weird')
      
    } else if(this.level === 14){
      this.resetEnemies();
      this.spawnEnemy(25, 1, 12, 'circle')
      this.spawnEnemy(40, 3, 20, 'rotate')
      this.spawnEnemy(25, 1, 12, 'weird')
      
    } else if(this.level === 15){
      this.resetEnemies();
      this.spawnEnemy(25, 1, 12, 'circle')
      this.spawnEnemy(25, 1, 12, 'rotate')
      this.spawnEnemy(40, 3, 20, 'weird')
      
    } else if(this.level === 16){
      this.resetEnemies();
      this.spawnEnemy(25, 1, 12, 'circle')
      this.spawnEnemy(25, 1, 12, 'rotate')
      this.spawnEnemy(25, 1, 12, 'weird')
      this.spawnEnemy(40, 3, 20, 'normal')
    } else if(this.level === 17){
      this.resetEnemies();
      this.spawnEnemy(55, 0.5, 12, 'circle')
      this.spawnEnemy(55, 0.5, 12, 'rotate')
      this.spawnEnemy(55, 0.5, 12, 'weird')
      this.spawnEnemy(70, 1, 12, 'normal')
    } else if(this.level === 18){
      this.resetEnemies();
      this.spawnEnemy(20, 3, 12, 'circle')
      this.spawnEnemy(20, 3, 12, 'rotate')
      this.spawnEnemy(20, 3, 12, 'weird')
      this.spawnEnemy(20, 3, 12, 'normal')
    } 
else if(this.level === 19){
      this.resetEnemies();
      this.spawnEnemy(25, 1, 30, 'circle')
      this.spawnEnemy(25, 1, 30, 'rotate')
      this.spawnEnemy(25, 1, 30, 'weird')
      this.spawnEnemy(25, 1, 30, 'normal')
    } else if(this.level === 20){
      this.resetEnemies();
      this.spawnEnemy(25, 1, 12, 'circle')
      this.spawnEnemy(25, 1, 12, 'rotate')
      this.spawnEnemy(25, 1, 12, 'weird')
      this.spawnEnemy(70, 3, 12, 'normal')
    } else if(this.level === 21){
      this.resetEnemies();
      this.spawnEnemy(150, 1.5, 12, 'megaslow')
    } else if(this.level === 22){
      this.resetEnemies();
      this.spawnEnemy(120, 1.8, 12, 'megaslow')
    } else if(this.level === 23){
      this.resetEnemies();
      this.spawnEnemy(90, 2.5, 12, 'megaslow')
    } else if(this.level === 24){
      this.resetEnemies();
      this.spawnEnemy(60, 3, 12, 'megaslow')
      this.spawnEnemy(1, 7, 30, 'megaslow')
    } else if(this.level === 25){
      this.resetEnemies();
      this.spawnEnemy(20, 1, 60, 'megaslow')
      this.spawnEnemy(100, 1, 30, 'megaslow')
    } else if(this.level === 26){
      this.resetEnemies();
      this.spawnEnemy(15, 1, 120, 'megaslow')
      this.spawnEnemy(60, 1, 60, 'megaslow')
    } else if(this.level === 27){
      this.resetEnemies();
      this.spawnEnemy(5, 1, 149, 'megaslow')
      this.spawnEnemy(30, 3, 30, 'megaslow')
    } 
else if(this.level === 28){
      this.resetEnemies();
      this.spawnEnemy(5, 1, 30, 'megaslow')
      this.spawnEnemy(50, 3, 30, 'normal')
    } else if(this.level === 29){
      this.resetEnemies();
      this.spawnEnemy(70, 1, 30, 'megaslow')
      this.spawnEnemy(70, 1, 30, 'normal')
    } else if(this.level === 30){
      this.resetEnemies();
      this.spawnEnemy(20, 1, 70, 'megaslow')
      this.spawnEnemy(20, 1, 60, 'megaslow')
      this.spawnEnemy(20, 1, 50, 'megaslow')
      this.spawnEnemy(20, 1, 40, 'megaslow')
      this.spawnEnemy(20, 1, 30, 'megaslow')
      this.spawnEnemy(20, 1, 20, 'megaslow')

    } else if(this.level === 31){
      world = new Vec(3150, 390);
      this.resetEnemies();
      this.spawnEnemy(10, 1, 70, 'liquid')

    } else if(this.level === 32){
      world = new Vec(3150, 330);
      this.resetEnemies();
      this.spawnEnemy(20, 1.5, 30, 'liquid')

    } else if(this.level === 33){
      world = new Vec(3150, 270);
      this.resetEnemies();
      this.spawnEnemy(30, 1.5, 30, 'liquid')

    } else if(this.level === 34){
      world = new Vec(3150, 210);
      this.resetEnemies();
      this.spawnEnemy(30, 1, 30, 'liquid')

    } else if(this.level === 35){
      world = new Vec(3150, 150);
      this.resetEnemies();
      this.spawnEnemy(30, 0.5, 30, 'liquid')

    } else if(this.level === 36){
      world = new Vec(4152, 45);
      this.resetEnemies();
      this.spawnEnemy(10, 0.25, 8, 'liquid')

    } 
else if(this.level === 37){
      world = new Vec(4152, 90);
      this.resetEnemies();
      this.spawnEnemy(30, 2, 12, 'normal')

    } else if(this.level === 38){
      world = new Vec(4152, 90);
      this.resetEnemies();
      this.spawnEnemy(12, 4, 12, 'normal')

    } else if(this.level === 39){
      world = new Vec(1500, 90);
      this.resetEnemies();
      this.spawnEnemy(10, 1, 12, 'liquid')

    } else if(this.level === 40){
      world = new Vec(6300, 90);
      this.resetEnemies();
      this.spawnEnemy(18, 0.5, 30, 'liquid')
      this.spawnEnemy(18, 0.5, 30, 'megaslow')
      this.spawnEnemy(18, 0.5, 30, 'normal')
      this.spawnEnemy(6, 0.5, 30, 'weird')
      this.spawnEnemy(6, 0.5, 30, 'circle')
      this.spawnEnemy(6, 0.5, 30, 'rotate')
      

    } 
      if (this.level < 33){
this.spawnEnemy(55, 3, 60, 'border')
}
  }else if(this.zone === 50){
     world = new Vec(5000,1000);
      if(this.level === 0){
       this.resetEnemies();
       this.spawnEnemy(150,4,40,'switch');
        this.spawnEnemy(50,5,70,'switch');
        this.spawnEnemy(15,4,200,'switch');
      }else if(this.level === 1){
       this.resetEnemies();
        this.spawnEnemy(20,5,30,'dasher');
          this.spawnEnemy(20,5,30,'homing');
          this.spawnEnemy(20,5,30,'circle');
          this.spawnEnemy(20,5,30,'rotate');
          this.spawnEnemy(20,5,30,'weird');
      }else if(this.level === 2){
       this.resetEnemies();
        this.spawnEnemy(50,5,30,'sniper',200);
      }else if(this.level === 3){
       this.resetEnemies();
        this.spawnEnemy(60,5,30,'freeze',200);
      }else if(this.level === 4){
       this.resetEnemies();
        this.spawnEnemy(120,5,30,'immune');
      }
    }
    if (this.level >= 1) {
      this.world.teleporters = [new Teleporter(world.x - 60, 0, 60, world.y, 'right'), new Teleporter(0, 0, 60, world.y, 'left')]
    } else {
      this.world.teleporters = [new Teleporter(world.x - 60, 0, 60, world.y, 'right')]
    }
    if (this.level === 0&&this.zone!=this.hellZone) {
      this.world.areaTeleporters = [new AreaTeleporter(0, 0, 360, world.y/10, 'top'), new AreaTeleporter(0, world.y - world.y/10, 360, world.y/10, 'bottom')]
    } 
    if(this.level === 0 && this.zone === this.hellZone){
     this.world.areaTeleporters=[new AreaTeleporter(310,100,50,world.y-100,'side'),new AreaTeleporter(1010,100,400,50,'side'),new AreaTeleporter(1010,300,400,50,'side'),new AreaTeleporter(1010,500,400,50,'side'),new AreaTeleporter(1010,700,400,50,'side')] 
    }
    if(this.level === 0 && this.zone === 0){
     this.world.areaTeleporters=[new AreaTeleporter(0, 0, 360, world.y/10, 'top'), new AreaTeleporter(0, world.y - world.y/10, 360, world.y/10, 'bottom'),new AreaTeleporter(0,0,50,world.y,'side')]; 
    }
    this.world.safes = [new Safe(0, 0, 360, world.y), new Safe(world.x - 420, 0, 360, world.y)]
  }
}
Game.prototype.player = {
  pos: new Vec(150, 225),
  radius: 15,
  vel: new Vec(0, 0),
  spd: 3.7,
  baseRadius: 15,
  baseSpd: 3.7,
  friction: 0.8,
  slowdown: false,
  freezed: false,
  megaslow: false,
  deaths:0,
  heroProperties(hero) {
    this.hero = hero;
    this.harden = undefined;
    this.auraLocation = new Vec(-10000, 0);
    this.auraSize = 2;
    this.flow = false;
    if (hero == 'Magmax') {
      this.harden = false;
      this.flow = false;
      this.hardenlock = false;
      this.hardenMaxTime = 240;
      this.hardenCooldown = 180;
      this.cooldown = 0
    
    }else if (hero == 'Jotunn') {
      this.shard = true;
      this.cooldown = 0;
      this.shardCooldown = 420;
    
    }else if (hero == "Kopo") {
      this.smalllock = false;
      this.smallSize = 10;
      this.isSmall = false;
      this.history = [];
      this.auraSize = 150;
      this.dhAt = 0;
      this.auraLocation = new Vec(-10000, 0);
      this.auraDuration = 240;
      this.aura = false;
      this.cooldown = 0;
      this.auraCooldown = 600;
      this.auraOn = false;
      this.auraDisabled = true;
      this.auraAfter = false;
      this.disableAuraTimer = 0;
    }
  },
  simulate(game, controller,dt) {
    /* movement */
    if (controller.shift) {
      this.spd = (this.baseSpd / 2)
    } else {
      this.spd = this.baseSpd
    }
     if (this.slowdown) {
      if (this.flow) {
        this.spd = this.baseSpd*2*0.45;
      } else {
        this.spd = this.baseSpd *0.45;
      }
    }
    if (this.megaslow) {
      if (this.flow) {
        this.spd = 0.7;
      } else {
        this.spd = 0.4;
      }
    }
    if(this.freeze>=0){
     this.freeze-=60*dt 
    }
    if(this.freeze<=0){
     this.freeze=0;
      this.freezed = false;
    }
    /* magmax abilities */
    if(this.hero=="Magmax"){
    if (!this.freezed) {
      if (controller.firstAbility) {
        if ( !this.harden) {
          this.flow = true;
          this.spd = this.baseSpd * 2
        }
      } else{
        this.flow = false;
      }
    }
    if (controller.secondAbility) {
      if (!this.flow && this.cooldown <= 0) {
        this.harden = true;
      }

    } else {
      this.harden = false;
    }
      if (this.harden) {
        this.spd = 0;
      }
      if (this.cooldown >= 0.01 && !this.harden) {
        this.cooldown-=60*dt;
      }
      if(this.cooldown<=0){
       this.cooldown = 0; 
      }
      if(this.hardenMaxTime<=0){
       this.hardenMaxTime =0;
      }
      if (this.harden && this.hardenMaxTime >= 0.01) {
        this.hardenMaxTime-=60*dt;
      }
      if (this.hardenMaxTime === 0) {
        this.harden = false;
        this.hardenMaxTime = 240
        this.cooldown = this.hardenCooldown;
      }
      if (!this.harden && this.hardenMaxTime < 240) {
        this.harden = false;
        this.hardenMaxTime = 240
        this.cooldown = this.hardenCooldown;
      }
      if (!this.harden) {
        this.hardenMaxTime = 240
      }
    }
    /* jotunn abilities */
    if (this.hero == "Jotunn") {
      if (this.cooldown <= 0.05) {
        this.cooldown = 0;
        this.shard = true;
      }
      if (this.cooldown >= 0.01) {
        this.cooldown-=60*dt;
      }
    }
    /* kopo's abilities */
    if (this.hero == "Kopo") {
      if (this.cooldown <=0.009) {
        this.aura = true;
      }
      if (this.disabledAuraTimer >= 0) {
        this.disabledAuraTimer-=60*dt;
      }
      if (this.disabledAuraTimer <= 0) {
        this.disabledAuraTimer = 0;
      }
      if (this.cooldown >= 0.01) {
        this.cooldown-=60*dt;
      }
      if (controller.firstAbility && !this.smalllock) {
        this.smalllock = true;
        if (!this.isSmall) {
          this.radius = this.smallSize;
          this.isSmall = true;
        } else if (this.isSmall) {
          this.radius = this.baseRadius;
          this.isSmall = false;
        }
      }
      if (!controller.firstAbility) {
        this.smalllock = false;
      }
      if (controller.secondAbility && this.aura && this.isSmall) {
        this.auraLocation = new Vec(this.pos.x+this.vel.x, this.pos.y+this.vel.y);
        this.auraSize = 150;
        this.auraAfter = false;
        this.auraDisabled = false;
        this.cooldown = this.auraCooldown;
        this.aura = false;
        this.auraOn = true;
        this.dhAt = game.zone;
      }
      if (this.auraOn) {
        this.auraDuration-=60*dt;
      }
      if (!this.auraOn) {
        this.auraDuration = 120;
      }
      if (this.isSmall) {
        if (this.history.length - 1 > 120) {
          this.history.splice(0, 1);
          this.history.splice(1,1)
        }
        this.history.push(new Vec(this.pos.x, this.pos.y));
  this.history.push(new Vec(this.pos.x, this.pos.y));
      } else {
        this.history = [];
      }
      if (this.auraOn) {
        this.auraSize += 200*dt;
        if (this.auraDuration<=0) {
          this.auraLocation = new Vec(-10000, 0);
          this.auraOn = false;
          this.disabledAuraTimer = 45;
          this.auraDisabled = true;
          this.auraAfter = true;
        }
      }
    }
    if (controller.up) {
      this.vel.y -= this.spd;
    }
    if (controller.down) {
      this.vel.y += this.spd;
    }
    if (controller.right) {
      this.vel.x += this.spd;
    }
    if (controller.left) {
      this.vel.x -= this.spd;
    }
    if (this.freezed) {
      this.vel = new Vec(0, 0);
      this.harden = false;
    }
  
    this.pos.x += this.vel.x*playSpeed/3*(dt)
    this.pos.y += this.vel.y*playSpeed/3*(dt)
    this.vel.x *=Math.pow(this.friction/(playSpeed*600),dt)
    this.vel.y *=Math.pow(this.friction/(playSpeed*600),dt);
    this.megaslow = false;
    this.slowdown = false;
    /* bounding player */
    if (this.pos.x < this.radius) {
      this.pos.x = this.radius;
    }
    if (this.pos.x + this.radius > world.x) {
      this.pos.x = world.x - this.radius;
    }
    if (this.pos.y + this.radius > world.y) {
      this.pos.y = world.y - this.radius;
    }
    if (this.pos.y - this.radius < 0) {
      this.pos.y = this.radius
    }
    /* teleporter collision things*/
    for (let teleporter of game.world.teleporters) {
      let rectHalfSizeX = teleporter.w / 2
      let rectHalfSizeY = teleporter.h / 2
      let rectCenterX = teleporter.x + rectHalfSizeX;
      let rectCenterY = teleporter.y + rectHalfSizeY;
      let distX = Math.abs(this.pos.x - rectCenterX);
      let distY = Math.abs(this.pos.y - rectCenterY);
      if ((distX < rectHalfSizeX + this.radius) && (distY < rectHalfSizeY + this.radius)) {
        if (teleporter.type == 'right') {
          /* right teleporter*/

          game.level++;
          game.loadLevel();
          if (this.hero == "Kopo") {
            this.history = [];
          }
          this.pos = new Vec(150, world.y / 2);
          this.vel = new Vec(0, 0);
        }
        if (teleporter.type == "left") {
          /* left teleporter */
          if (game.level != 0) {

            game.level--;
            game.loadLevel();
            if (this.hero == "Kopo") {
              this.history = [];
            }
            this.pos = new Vec(world.x - 100, world.y / 2)
            this.vel = new Vec(0, 0);
          }
        }
      }
    }
    for (let teleporter of game.world.areaTeleporters) {
      let rectHalfSizeX = teleporter.w / 2
      let rectHalfSizeY = teleporter.h / 2
      let rectCenterX = teleporter.x + rectHalfSizeX;
      let rectCenterY = teleporter.y + rectHalfSizeY;
      let distX = Math.abs(this.pos.x - rectCenterX);
      let distY = Math.abs(this.pos.y - rectCenterY);
      if ((distX < rectHalfSizeX + this.radius) && (distY < rectHalfSizeY + this.radius)) {
        if (teleporter.type == 'top') {
          /* top teleporter*/
          if (game.zone === 0) {
            game.zone = game.areas.length - 1
          } else {
            game.zone--;
          }
          game.loadLevel();
          if (this.hero == "Kopo") {
            this.history = [];
          }
          this.pos.y = world.y - 60;
          if(this.pos.x-this.radius<50){
           this.pos.x= world.x/15
          }
        }
        if (teleporter.type == "bottom") {
          /* bottom teleporter */
          if (game.zone === game.areas.length - 1) {
            game.zone = 0;
          } else {
            game.zone++;
          }
          game.loadLevel();
          if (this.hero == "Kopo") {
            this.history = [];
          }
          this.pos.y = 60;
           if(this.pos.x-this.radius<50){
           this.pos.x= world.x/15
          }
        }
           if(teleporter.type=='side'){
             if(game.zone ===0&&game.level === 0){
              world = new Vec(5000,1000);
           game.zone = game.hellZone;
            game.level =0;
            game.loadLevel();
             if (this.hero == "Kopo") {
            this.history = [];
          }
            this.pos = new Vec(100,world.y/2);
            this.vel = new Vec(0,0);
             }else if(game.zone ===game.hellZone){
              game.loadLevel();
                if (this.hero == "Kopo") {
            this.history = [];
          }
            this.pos = new Vec(100,world.y/2);
            this.vel = new Vec(0,0);
             }
             if(game.zone !== game.hellZone){
                 game.loadLevel();
                 if (this.hero == "Kopo") {
            this.history = [];
          }
            this.pos = new Vec(100,world.y/2);
            this.vel = new Vec(0,0);
             }
          }
      }
    }
  },
  collideEnemy(controller, game) {
    
    if(controller.secondAbility && this.shard){
      for(let enemy of game.enemies){
        if (dist(this.pos.x, this.pos.y, enemy.pos.x, enemy.pos.y) < enemy.size / 2 + 150) {
          if (enemy.type != "border" && enemy.type != 'immune') {
            if (enemy.type != 'switch') {
              this.shard = false;
              enemy.shatter = true;
              enemy.shattered(this.shardCooldown);
            }else if(enemy.type=='switch'){
             this.shard = false;
              enemy.canDie=false;
                enemy.shatter = true;
              enemy.shattered(this.shardCooldown);
            }
          }
        }
      }
          this.shard = false;
      this.cooldown = this.shardCooldown;
         }
    for(let enemy of game.enemies){
      enemy.inAura = false;
        if (dist(enemy.pos.x, enemy.pos.y, this.pos.x, this.pos.y) < this.radius + 200 && enemy.type == 'liquid') {  
          enemy.speedState = 'fast';
        } else if (enemy.type == 'liquid') {
          enemy.speedState = 'normal';
        }
       if (this.hero == "Jotunn" ) {
          if (dist(this.pos.x, this.pos.y, enemy.pos.x, enemy.pos.y) < enemy.size / 2 + 150) {
            if (!enemy.shatter&&enemy.type!="border"&&(enemy.type!="switch"||(enemy.type=='switch'&&enemy.canDie))) {
              enemy.slowdown = true;
            }
          } else if (enemy.shatter||(enemy.type=='switch'&&!enemy.canDie)) {
            enemy.slowdown = false;
          } else {
            enemy.slowdown = false;
          }
      }
      if (this.hero == "Kopo") {
          if (this.auraOn && enemy.type != "border" && enemy.type != 'immune') {
            if (dist(enemy.pos.x, enemy.pos.y, this.auraLocation.x, this.auraLocation.y) < enemy.size / 2 + this.auraSize / 2 && this.pos.x + this.radius > 360 && this.pos.x - this.radius < world.x - 420 && this.dhAt === game.zone) {
              enemy.pos.x = this.auraLocation.x + randomNumber(this.auraSize / 4, this.auraSize / 2) - randomNumber(this.auraSize / 4, this.auraSize / 2);
              enemy.pos.y = this.auraLocation.y + randomNumber(this.auraSize / 4, this.auraSize / 2) - randomNumber(this.auraSize / 4, this.auraSize / 2);
              enemy.xv = 0;
              enemy.yv = 0;
              enemy.inAura = true;
            }
          }
          if (this.disabledAuraTimer <= 0 && enemy.xv === 0 && enemy.yv === 0 && !this.auraOn) {
            enemy.randomizeVel();
          }
        }
      if (dist(this.pos.x, this.pos.y, enemy.pos.x, enemy.pos.y) < this.radius + enemy.size / 2) {
          if (!this.harden || this.harden === undefined) {
            if (!enemy.shatter) {
              if ((dist(this.auraLocation.x, this.auraLocation.y, enemy.pos.x, enemy.pos.y) > enemy.size / 2 + this.auraSize / 2)) {
                if((enemy.type=='switch'&&enemy.canDie)||(enemy.type!='switch')){
                this.freezed = false;
                if (this.pos.y - this.radius < 50) {
                  this.pos.y = 80
                }
                if (this.pos.y + this.radius > world.y - 50) {
                  this.pos.y = world.y - 80;
                }
                this.pos.x = 90;
              
                game.resetEnemies();
                game.loadLevel();
                  this.deaths++;
              }
              }
            }
          }
        }
      if (enemy.type == 'slowdown') {
          if (dist(this.pos.x, this.pos.y, enemy.pos.x, enemy.pos.y) < this.radius + 200 && this.pos.x - this.radius > 360 && this.pos.x + this.radius < world.x - 420 && !enemy.shatter) {
            this.slowdown = true;
          }
        }
        if (enemy.type == 'megaslow') {
          if (dist(this.pos.x, this.pos.y, enemy.pos.x, enemy.pos.y) < this.radius + 100 && this.pos.x - this.radius > 360 && this.pos.x + this.radius < world.x - 420 && !enemy.shatter) {
            this.megaslow = true;
          }
        }
  }
      for (let bullet of game.bullets) {
        if (dist(this.pos.x, this.pos.y, bullet.pos.x, bullet.pos.y) < this.radius + bullet.size / 2) {
          if (bullet.type == 'freeze' && !this.freezed) {
            this.freeze =120;
            this.freezed = true;
          } else if (bullet.type == "normal" || bullet.type == "exploder") {
            if (!this.harden) {
              this.freezed = false;
              if (this.pos.y - this.radius < 50) {
                this.pos.y = 80
              }
              if (this.pos.y + this.radius > world.x - 50) {
                this.pos.y = world.x - 80;
              }
              this.pos.x = 90;
              game.resetEnemies();
              game.loadLevel();
              this.deaths++;
            }
          }
        }
      }
    }
  }
Game.prototype.spawnTele = function(x,y,w,h){
   this.world.areaTeleporters.push(new AreaTeleporter(x,y,w,h,'side'));
}
Game.prototype.spawnEnemy = function(count, speed, size, type, cooldown) {
  const t = type || "normal";
  for (let i = 0; i < count; i++) {
    if (t == 'normal') {
      this.enemies.push(new Enemy(speed, size));
    } else if (t == 'dasher') {
      this.enemies.push(new DasherEnemy(speed, size));
    } else if (t == 'close') {
      this.enemies.push(new CloseEnemy(speed, size));
    } else if (t == 'slowdown') {
      this.enemies.push(new SlowdownEnemy(speed, size));
    } else if (t == 'sniper') {
      this.enemies.push(new Sniper(speed, size, randomNumber(cooldown - 100, cooldown)));
    } else if (t == 'homing') {
      this.enemies.push(new HomingEnemy(speed, size));
    } else if (t == 'freeze') {
      this.enemies.push(new FreezeSniper(speed, size, randomNumber(cooldown - 100, cooldown)));
    } else if (t == 'exploder') {
      this.enemies.push(new Exploder(speed, size, randomNumber(cooldown - 100, cooldown)));
    } else if (t == 'border') {
      this.enemies.push(new BorderEnemy(speed, size));
    } else if (t == 'circle') {
      this.enemies.push(new CircleEnemy(speed, size));
    } else if (t == 'rotate') {
      this.enemies.push(new RotatingEnemy(speed, size));
    } else if (t == 'weird') {
      this.enemies.push(new WeirdEnemy(speed, size));
    } else if (t == 'megaslow') {
      this.enemies.push(new MegaSlowdownEnemy(speed, size));
    } else if (t == 'sizing') {
      this.enemies.push(new SizingEnemy(speed, size));
    } else if (t == 'icicle') {
      this.enemies.push(new IcicleEnemy(speed, size));
    } else if (t == 'liquid') {
      this.enemies.push(new LiquidEnemy(speed, size));
    } else if (t == 'immune') {
      this.enemies.push(new ImmuneEnemy(speed, size));
    } else if (t == "switch") {
      this.enemies.push(new SwitchEnemy(speed, size));
    }
  }
}
