$(function(){
  $(window).scroll(function() {
  var scrollPos = $(window).scrollTop();
    setAnimation($('.rect1'),scrollPos,0,500);
    setAnimation($('.rect2'),scrollPos,500,1000);
    setAnimation($('.rect3'),scrollPos,1000,1500);
    setAnimation($('.rect4'),scrollPos,1500,2000);
    setAnimation($('.rect5'),scrollPos,2000,2500);
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
