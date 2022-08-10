var width, containerwidth, left, way = 0;

$(document).ready(function(e){

  width = $('.ticker-text').width();
  containerwidth = $('.ticker-container').width();
  left = containerwidth;

  tick();
});

function tick() {
  
  if (way) {    
    if (--left < -width){
      left = containerwidth;
    }
  } else {
    if (++left > containerwidth){
      left = -width;
     }
  }

  $(".ticker-text").css("margin-left", left + "px");
  setTimeout(tick, 8);
}

function toggle () {
  way = (way+1)%2;
}