if($('body').hasClass('about')){
  Yadadya.resetItems = {
  proposalSlider: null,
  proposalSliderSlide: null,
  leadershipSlider: null,
  leadershipSliderSlide: null,
  aboutSlider: null,
  aboutSliderSlide: null,
}
Yadadya.DOMReady(function(){
  if (Yadadya.params.isMobile.matches) {
    $(".g-skills").on("click", function(){
      var $elem = $(this);
      if($elem.hasClass("g-skills_open")){
        $elem.removeClass("g-skills_open"); 
        return;
      }
      $(".g-skills").removeClass("g-skills_open");
      setTimeout(function(){
        $elem.addClass("g-skills_open");
      }, 250);
      
    });
  }
    var tiltSettings = {
                movement: {
                    imgWrapper : {
                        translation : {x: -5, y: -5, z: -5},
                        rotation : {x: 0, y: 0, z: 0},
                        reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
                    }
                }
            };
    $(".js-tilter").each(function(){
        new TiltFx(this, tiltSettings);
    });
});
Yadadya.reset = function(){
  if(Yadadya.resetItems.proposalSlider){
        Yadadya.resetItems.proposalSliderSlide = Yadadya.resetItems.proposalSlider.getCurrentSlide();
        Yadadya.resetItems.proposalSlider.destroySlider();
        Yadadya.resetItems.proposalSlider = null;
    }
    if(Yadadya.resetItems.leadershipSlider){
        Yadadya.resetItems.leadershipSliderSlide = Yadadya.resetItems.leadershipSlider.getCurrentSlide();
        Yadadya.resetItems.leadershipSlider.destroySlider();
        Yadadya.resetItems.leadershipSlider = null;
    }
    if(Yadadya.resetItems.aboutSlider){
        Yadadya.resetItems.aboutSliderSlide = Yadadya.resetItems.aboutSlider.getCurrentSlide();
        Yadadya.resetItems.aboutSlider.destroySlider();
        Yadadya.resetItems.aboutSlider = null;
    }
}
Yadadya.mobile = function(){
  Yadadya.resetItems.proposalSlider = $("#proposal-slider").bxSlider({
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    mouseDrag: true,
    adaptiveHeight: true,
    startSlide: Yadadya.resetItems.proposalSliderSlide || 0
  });
  Yadadya.resetItems.leadershipSlider = $("#leadership-slider").bxSlider({
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    mouseDrag: true,
    adaptiveHeight: true,
    startSlide: Yadadya.resetItems.proposalSliderSlide || 0
  });
  Yadadya.resetItems.aboutSlider = $("#about-write-slider").bxSlider({
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 1,
    mouseDrag: true,
    adaptiveHeight: true,
    slideWidth: parseInt(7.27 * Yadadya.rem, 10),
    slideMargin: parseInt(1.81 * Yadadya.rem, 10),
    startSlide: Yadadya.resetItems.aboutSliderSlide || 0
  });

}  
}
