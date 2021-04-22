class Controller{
 constructor(){
   this.keys = [];
 }
  get up(){
    return (this.keys[87]|| this.keys[38])?true:false;
  }
  get down(){
    return (this.keys[83]|| this.keys[40])?true:false;
  }
  get left(){
    return (this.keys[65]|| this.keys[37])?true:false;
  }
  get right(){
    return (this.keys[68]|| this.keys[39])?true:false;
  }
    get zoomOut(){
   return (this.keys[79])? true:false; 
  }
  get zoomIn(){
   return (this.keys[73]) ? true: false; 
  }
  get zoomReset(){
   return (this.keys[85])?true:false; 
  }
  get skipLevel(){
   return (this.keys[190])?true:false; 
  }
  get skipFiveLevels(){
   return (this.keys[191])?true:false; 
  }
  get shift(){
    return (this.keys[16])?true:false;
  }
  get outline(){
   return (this.keys[80])?true:false; 
  }
  get firstAbility(){
   return (this.keys[90] || this.keys[74])?true:false; 
  }
  get secondAbility(){
   return (this.keys[88] || this.keys[75])?true:false; 
  }
}
