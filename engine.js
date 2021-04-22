  class Engine{
   constructor(update,render){
     this.afr = undefined;
     this.lastTime = null;
     this.updated = false;
   }
    run(time){
      if(this.lastTime!=null){
     let delta =(time-this.lastTime)/1000
      update(delta);
      render(delta);
      frames+=60*delta
      }
      this.lastTime = time;
      this.afr = window.requestAnimationFrame((time)=>{this.run(time)});
    }
    start(){
     this.afr = window.requestAnimationFrame((time)=>{this.run(time)});
    }
  }
