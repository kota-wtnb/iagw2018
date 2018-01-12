$(function(){
  $(window).scroll(function() {
  var scrollPos = $(window).scrollTop();
  var height = window.innerHeight;
    setAnimation($('#about'),scrollPos,0,height);
    setAnimation($('#concept'),scrollPos,height,height*2);
    setAnimation($('#info'),scrollPos,height*2,height*3);
  });
});

function setAnimation(element,pos,min,max){
  if(pos < min || max < pos){
    element.css({'transform':'scale(0)'});
  }else{
    var len = max - min;
    var p = pos - min;
    var scale = 0;
    var len = max - min;
    var opacity = 0;
    var showStartPos = len/3;
    var hideStartPos = len/3*2;
    if(p < showStartPos){
      opacity = p/showStartPos;
      scale = p/showStartPos;
    }else{
      if(p < hideStartPos){
        opacity = 1;
        scale = 1;
      }else{
        var delta = (p-hideStartPos)/(len/3);
        opacity = 1- delta;
        scale = 1 + delta;
      }
    }
    element.css({'transform':'scale(' + scale + ')'});
    element.css({'opacity': opacity });
  }

}
