/* In js:
document.getElementByID("spaceship");
in jQuery
$('#spaceship)
*/
$(document).ready(function(){
    var hg = window.innerHeight;
    var wd = window.innerWidth;
    var spaceship = $('#spaceship');

    //Changing css via jQuery
    spaceship.css({     //css function
        'position' : 'absolute',  // Which is static by default
        'left' : `${wd/2}px`,
        'top' : `${hg*80/100}px`
    });
    
    //Now i want to change the spaceship position using my keys
    var ismovingRight = false;
    var ismovingDown = false;
    var ismovingUp = false;
    var ismovingLeft = false;
    //keydown event
    $(document).on("keydown", function(e){
        /*Cheaking keyCode */
       
       var kc = e.keyCode;
       if(kc == 39){
          ismovingRight = true;
       }
       if(kc == 40){
           ismovingDown = true;
       }
       if(kc == 37){
        ismovingLeft = true;
        }
        if(kc == 38){
            ismovingUp = true;
        }
    });
    
       
    //keyup event
    $(document).on("keyup", function(e){
       var kc = e.keyCode;
        if(kc == 39){
          ismovingRight = false;
        }
        if(kc == 40){
        ismovingDown = false;
        }
        if(kc == 37){
         ismovingLeft = false;
        }
        if(kc == 38){
          ismovingUp = false;
        }
    });


    //writing function for smooth flow of spaceship
    var speed = 5
    function move(){
        if(ismovingRight){
            if ((spaceship.position().left + 90)<=wd) {
                spaceship.css('left', (spaceship.position().left + speed))
            }
            
        }
        if(ismovingDown){
            if ((spaceship.position().top + 90)<=hg) {
                spaceship.css('top', (spaceship.position().top + speed))
            }
        }
        if(ismovingUp){
            if ((spaceship.position().top -10)>=0) {
                spaceship.css('top', (spaceship.position().top - speed))
            }
        }
        if(ismovingLeft){
            if ((spaceship.position().left -10)>=0) {
                spaceship.css('left', (spaceship.position().left - speed))
            }
        }
    }      
    
    setInterval(move , 10)

});