/*
    
    function cardswitch() {
        var counter = 0;
        var card = document.getElementById("roomcard");
    if(counter === 0){
        document.getElementById("roomcard").style.height = "188px";
        const counter = 1
        console.log(counter);
    }
    else if(counter === 1){
        document.getElementById("roomcard").style.height = "100px";
        const counter = 0;
        console.log(counter);
    }
    }
 */

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

      });