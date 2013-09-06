// Add your JavaScript below!
$(document).ready(function(){
    var score=0;
    var fheng,fshu,sheng,sshu;
   $(document).keydown(Gu);

});
var Gu=function(key){
       switch(parseInt(key.which,10)){
           case 27:
               $(document).abort();
               break;
           case 32:
                fheng=Math.floor(Math.random()*398);
                fshu=Math.floor(Math.random()*398);
                sheng=Math.floor(Math.random()*390);
                sshu=Math.floor(Math.random()*390);
                $('#gamefield').append($('<div id="snake">'+'</div>'));
                $('#snake').width(10+"px");
                $('#snake').height(10+"px");
                $('#snake').css("background-color","#ABCDE0");
                $('#snake').css("position","absolute");
                
                $('#snake').css("left",sheng+'px');
                $('#snake').css("top",sshu+'px');
                $('#gamefield').append($('<div id="fruit">'+'</div>'));
                $('#fruit').width("10px");
                $('#fruit').height("10px");
                $('#fruit').css("background-color","#008800");
                $('#fruit').css("position","absolute");
                
                while(fheng<sheng+10 && fheng>sheng-10 && fshu>sshu-10 && fshu<sshu+10 )
                {
                    fheng=Math.floor(Math.random()*398);
                    fshu=Math.floor(Math.random()*398);
                }
                $('#fruit').css("left",fheng+'px');
                $('#fruit').css("top",fshu+'px');
                break;
            case 38:
                if ("#snake"){
                sshu=sshu-5;
                $('#snake').css("left",sheng+'px');
                $('#snake').css("top",sshu+'px');
                }
                break;
            case 40:
                if ("#snake"){
                sshu=sshu+5;
                $('#snake').css("left",sheng+'px');
                $('#snake').css("top",sshu+'px');
                }
                break;
            case 37:
                if ("#snake"){
                sheng=sheng-5;
                $('#snake').css("left",sheng+'px');
                $('#snake').css("top",sshu+'px');
                }
                break;
            case 39:
                if ("#snake"){
                sheng=sheng+5;
                $('#snake').css("left",sheng+'px');
                $('#snake').css("top",sshu+'px');
                }
                break;
       }
       
       if(fheng<sheng+10+score*5 && fheng>sheng-10 && fshu>sshu-10 && fshu<sshu+10+score*5)
       {
            score+=1;
           $('#snake').width(10+score*5+"px");
           $('#snake').height(10+score*5+"px");
           while(fheng<sheng+10+score*5 && fheng>sheng-10 && fshu>sshu-10 && fshu<sshu+score*5+10 )
                {
                    fheng=Math.floor(Math.random()*398);
                    fshu=Math.floor(Math.random()*398);
                }
                $('#fruit').css("left",fheng+'px');
                $('#fruit').css("top",fshu+'px');
       }
        if(sheng>390-score*5||sheng<0||sshu>390-score*5||sshu<0) 
        {
              $(document).unbind("keydown");
              alert("you are dead");
              score=0;
              $('#snake').remove();
              $(document).keydown(Gu);
        }



   };