// Add your JavaScript below!
$(document).ready(function(){
    var alive=true;
    var score=0
    var timer;
    var fruitObj;
    var snakeObj;
    var timer2;
    var isxj=false;
    var NAME="Little Kitty";
    var ima="dddddd.jpg";
     var audio= new Howl({
  urls: ['rw437.mp3'],
  })
     var death= new Howl({
  urls: ['death.mp3'],
  })
     var dog= new Howl({
  urls: ['dog.mp3'],
  })
    var moveBegin=function(){
       timer=setTimeout(function(){
        snakeMove(5,"right");
      },1000/(score+1))
    };
    var snakeMove = function(speed,dir)   {
                
      switch(dir){
      case "right":{
        snakeObj.snakeleft +=speed; 
      }
      break;
      case "left":{
        snakeObj.snakeleft -=speed; 
      }
      break;
        case "top":{
        snakeObj.snakeTop -=speed; 
      }
      break;
      case "bottom":{
        snakeObj.snakeTop +=speed; 
      }
      break;

     }
      $('#snake').css("left",snakeObj.snakeleft+'px');
      $('#snake').css("top", snakeObj.snakeTop +'px');
      timer=setTimeout(function(){
       snakeMove(10,dir);
    },1000/(score+1));
      check();
   }
    var check=function(){
      if(ishit()){
        if(isxj){
        dog.play();
          clearTimeout(timer);  
          alert(NAME+" meets a dog, and gets bitten! \nYou got him "+score+" rats.");
        alive=false;
        return


        }
        
        score+=1;
        $('#snake').width(20+10*score+"px");
        $('#snake').height(20+10*score+"px");
        fruitObj.remove();
        makefruit();
        audio.play();
        $('#score').html(score);
        $('#speed').html(score+1);

        }
      if(isdead()){

        death.play();
        clearTimeout(timer);
          alert(NAME+" ran into the wall and gets headache! \nYou got him "+score+" rats.");
        alive=false;
      }
    }
    
    var makefruit=function(){
      fruitObj = $('<div id="fruit">'+'</div>');
      $('#gamefield').append(fruitObj);
     $('#fruit').width("20px");
     $('#fruit').height("20px");
      $('#fruit').css("position","absolute");
      
      do
      {fruitObj.fruitLeft = Math.floor(Math.random()*380);
      fruitObj.fruitTop = Math.floor(Math.random()*380);
    }while(ishit());
      $('#fruit').css("left",fruitObj.fruitLeft+'px');
      $('#fruit').css("top",fruitObj.fruitTop+'px');
      isxj=(Math.random()>0.7);
       if(isxj) 
        {$('#fruit').css("background-image",'url(ssss.jpg)');
          if(timer2) clearTimeout(timer2);
          timer2=setTimeout(function(){
            
            fruitObj.remove();
            makefruit();
          },5000);
              }
            }


 var makesnake = function(){
      snakeObj = $('<div id="snake">'+'</div>');
   $('#gamefield').append(snakeObj);
     $('#snake').width(20+10*score+"px");
     $('#snake').height(20+10*score+"px");
      $('#snake').css("background-image","url("+ima+")");
 

      $('#snake').css("position","absolute");
      snakeObj.snakeleft = Math.floor(Math.random()*380);
      snakeObj.snakeTop = Math.floor(Math.random()*380);
      $('#snake').css("left",snakeObj.snakeleft+'px');
      $('#snake').css("top", snakeObj.snakeTop +'px');
 };
    var ishit=function(){
      fruitObj.fruitRight = fruitObj.fruitLeft+20;
      fruitObj.fruitBottom = fruitObj.fruitTop +20;
      snakeObj.snakeRight = snakeObj.snakeleft+20+10*score;
      snakeObj.snakeBottom = snakeObj.snakeTop +20+10*score;
      if( fruitObj.fruitRight>snakeObj.snakeleft&& fruitObj.fruitLeft<snakeObj.snakeRight&&fruitObj.fruitTop<snakeObj.snakeBottom&&fruitObj.fruitBottom>snakeObj.snakeTop){
        return true;
      }
      return false;
    };
    var isdead=function(){
      snakeObj.snakeRight = snakeObj.snakeleft+20+10*score;
      snakeObj.snakeBottom = snakeObj.snakeTop +20+10*score;
      if (snakeObj.snakeRight>400|| snakeObj.snakeleft<0||snakeObj.snakeBottom>400|| snakeObj.snakeTop<0) {
        return true;
      }
      return false;
    };
    var clearall=function(){
      score=0;
      if (timer) {
        clearTimeout(timer);
      };
      if (fruitObj) {
        fruitObj.remove();
      };
      if (snakeObj) {
        snakeObj.remove();
      };
      if(timer2){
        clearTimeout(timer2);
      isxj=false;
      }
      
    }
    var begin=function(){
      clearall();
      makesnake();
      makefruit();
      moveBegin();
      alive=true;
      death.play();
      $('#next').html(NAME+" gets stronger and faster when he catches a rats");

      $('#next').append("<p>Don't touch the wall!!</p>");
      $('#next').append("<p>Attention at dogs!!</p>");
    } 


   $('#biaoti').html(NAME+"'s history");
   $('#next').html("Can you help "+NAME+" to get his rats");
   $(document).keydown(function(key){
       switch(parseInt(key.which,10)){
           case 27:
               $(document).abort();
               break;
           case 32:
                begin();
                break;
           case 38:
                if (alive){
                  clearTimeout(timer);
                    snakeMove(10,"top");
                }
                break;
            case 40:
                if (alive){
               clearTimeout(timer);
                snakeMove(10,"bottom");
                }
                break;
            case 37:
                if (alive){
               clearTimeout(timer);
                snakeMove(10,"left");
                }
                break;
            case 39:
                if (alive){
                clearTimeout(timer);
                snakeMove(10,"right");
                }
                break;
       }
       
    });
});
