checkEvent(['load'],function(){
  $('.ct-next-btn').click(function(){
    console.log('hi');
    $('.ct-slider-cnt').animate({
      scrollLeft : 100
    },800)
  })
});

function ctSlider() {

}
