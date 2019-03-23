export default CS1=>{
  
  AFRAME.registerComponent('player', {
    schema:{
      me:{type:'boolean',default:false}
    },
    init: function () {
      if(this.data.me)this.setKeyCtls();
    },
    setKeyCtls: function(){
      document.body.addEventListener('keypress',e=>{
        // 0=idle, 1=walk
         switch(e.which){
           case 87:
           case 38:
           case 83:
           case 40:
             CS1.socket.emit('anim',1);
         }
      });
      document.body.addEventListener('keyup',e=>{
        // 0=idle, 1=walk
         switch(e.which){
           case 87:
           case 38:
           case 83:
           case 40:
             CS1.socket.emit('anim',0);
         }
      });
    },
    tick: function(t,dt){
    
    },
    setAvatar: function(src){
      console.log('setting avatar . . .');
    },
    setAnimation: function(name){
      console.log('setting animation . . .');
    }
    
  });
  
}