/*=======================================
Credits
File Name:- common.js
Developed by Pratap Tondwalkar

Component Incude :-
Events
1) Load Event through "checkEvent" Function
1) resize Event through "checkEvent" Function

Functions
1) take me to top (scroll to top)
2) mobile navigation
3) Check event function for loading multiple events

Note:-
need to include jQuery library.
We have used jQuery version 2.1.2
You can inculde more component just make sure to add those in above list which is help for while maintencnce.
========================================*/
// check event function
var checkEvent = function (loadingType,callback){
  if (loadingType != 'undifined'||loadingType != null ||loadingType != ' ' || loadingType != ''){
    for (var i = 0; i < loadingType.length ; i++) {
      window.addEventListener(loadingType[i],function(){
        callback();
      });
    }
  }
  else{
    console.log('Please check loading type is not proper\nYour Loading type is ' + loadingType)
  }
};

var checkResolotion = function (winWidth,callback){
  var windowWidth = window.innerWidth;
  if (windowWidth <= winWidth){
    callback();
  }
  else{
    console.log('checkResolotion function else coponent is excuited\nYour window width is:'+ windowWidth +'\nand parammter width is:'+winWidth);
  }
};

// Store values in web storage function start here
function chooseStoreType (storeType){
    // checking broweser support
    if (typeof(Storage) !== "undefined") {
      // returning store value function with 3 parametter
      // value :- 'value' is pushed by user which we want to store in web storeage
      // nameOfStorage :- Name which should be assign to given array.
      // array:- this is final array wchich you will print whereever you require.
      return function storeValue(value,nameOfStorage,array){
        // chekcing dinfed array status
        if (nameOfStorage.length > 0 && nameOfStorage != "undefined" && nameOfStorage != " ") {
          // pushing value in array
          array.push(value);
          return storeType.setItem(nameOfStorage,array);
        }
        else
        {
          // array status false
          console.log('Please create blank array and pass it as parametter')
        }
      }
    } else {
        // doesn't have browser support.
        console.log('Sorry! No Web Storage support..')
    }
};
// chosing webstorage
var storeInLocalStorage = chooseStoreType(localStorage);
var storeInSessionStorage = chooseStoreType(sessionStorage);
// Store values in web storage function end here

// Get value of web storage function start here
function getValue(storeType){
  return function (nameOfArray) {
    // spliting web storage string into array
    alteredArray = storeType.getItem(nameOfArray).split(',');
    // returning altered array
    return alteredArray;
  }
};
// chosing webstorage
var getValueOfLocalStorage = getValue(localStorage);
var getValueOfSessionStorage = getValue(sessionStorage);
// Get value of web storage function end here

// sample loop to push value in web storage.
var sample_array = [];
for (var i = 1; i <= 10; i++) {
  var sample = 'sample '+i;
//storeInLocalStorage(value,'nameOfStorage',array);
  storeInLocalStorage(sample,'sample_name',sample_array);
}

// loging value of storage
console.log(getValueOfLocalStorage('sample_name'));

checkEvent(['load'],function(){
  $('.loader').fadeOut();
  /*=========================== Back to top Function Start =====================*/
  $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollTop').fadeIn();
    } else {
      $('.scrollTop').fadeOut();
    }
  });
  $(document).on('click', '.scrollTop', function () {
    $('body,html').animate({scrollTop: 0}, 800);
  });
/*=========================== Back to top Function End ======================*/
/*=========================== Mobile navigation Start ======================*/
  $('.toggle-btn').click(function () {
    if ($('.wrapper').hasClass('opened'))
    {
      $('.wrapper').removeClass('opened');
    }
    else
    {
      $('.wrapper').addClass('opened');
    }
  });
  $('.has-sub-menu').click(function () {
    var target = $(this).find('.sub-menu');
    var trigger = $(this);
    if (trigger.hasClass('opened')) {
      trigger.removeClass('opened');
    }
    else {
      trigger.addClass('opened');
    }
  });
/*=========================== Mobile navigation end ======================*/
});
/*=========================== Document Load funtion end here ======================*/




// Resize event
checkEvent(['resize'],function(){
});


checkEvent(['load'],function(){
  $('.ct-next-btn').click(function(){
    ctSlider($(this).attr('data-name'))
  })
  $('.ct-prev-btn').click(function(){
    ctSlider($(this).attr('data-name'))
  })
});

function ctSlider(name) {
  var currentScrollPos = $('.ct-slider-cnt').scrollLeft();
  var movePosition;
  if (name == 'next') {
    console.log(currentScrollPos);
    if (currentScrollPos >= 500) {
      alert('data finished')
      return false
    }
    else {
      movePosition = currentScrollPos + 100
    }

  }
  else {

    if (currentScrollPos <= 0) {
      alert('data finished')
      return false
    }
    else {
      movePosition = currentScrollPos - 100
    }

  }
  $('.ct-slider-cnt').animate({
    scrollLeft : movePosition
  },800)
}
