document.addEventListener("DOMContentLoaded", function() {

// MAIN SLIDER
$('.slider').slick({
	prevArrow: '<div class="y_prevArrow"><img alt="" src="img/right-arrow.svg"></div>',
	nextArrow: '<div class="y_nextArrow"><img alt="" src="img/left-arrow.svg"></div>',
	slidesToShow: 1,
	infinite: true,
});

window.addEventListener("resize", function() {
  if (window.innerWidth <= 768) {
    $('.slider').slick('unslick');
    sliderIsLive = false; 
  }
  else {
    if (sliderIsLive) {
      $('.slider').slick();
      sliderIsLive = true;
    }
  }
});
window.addEventListener("resize", function() {
  if (window.innerWidth > 768) {
 $('.slider').slick({
    prevArrow: '<div class="y_prevArrow"><img alt="" src="img/right-arrow.svg"></div>',
    nextArrow: '<div class="y_nextArrow"><img alt="" src="img/left-arrow.svg"></div>',
    slidesToShow: 1,
    infinite: true,
});
  }
});

// END MAIN SLIDER

// OUR-WORK SLIDER
$('.tab__slider').slick({
	prevArrow: '<div class="y_prevArrow"><img alt="" src="img/right-arrow.svg"></div>',
	nextArrow: '<div class="y_nextArrow"><img alt="" src="img/left-arrow.svg"></div>',
	slidesToShow: 3,
	infinite: true,
});

// END OUR-WORK SLIDER


// TABS
$(".tab_item").not(":first").hide();
$(".tabs__wrapper .tab").click(function() {
	$(".tabs__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
// END TABS

// TABS TWO
$(".tab_item2").not(":first").hide();
$(".tabs__wrapper2 .tab2").click(function() {
	$(".tabs__wrapper2 .tab2").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item2").hide().eq($(this).index()).fadeIn();
	$('.tab__slider').slick('reinit');
}).eq(0).addClass("active");
// END TWO


// POPUP
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',
        closeBtnInside: true,
        closeMarkup:'<button title="%title%" class="mfp-close"><img class="mfp-close" src="img/@2x/close.png"/></button>',
    });

//h3 в зависимость от содержания ссылки
    $(".popup-with-zoom-anim").click(function(){
      var newH3 = ($(this).text());
        $('#callback .h3').html(newH3);
    });
// END POPUP


// FANCYBOX
$(".fancybox").fancybox({ 
showCloseButton: true
});

    $("a[rel=group]").fancybox({
        'transitionIn' : 'none',
        'transitionOut' : 'none',
        'titlePosition' : 'over',
        'titleFormat' : function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? '   ' + title : '') + '</span>';
        }
    });
// ENDFANCYBOX

// FORM
     $("form").submit(function() { //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function() {
                $(".success").addClass("visible");
                setTimeout(function() {
                    // Done Functions
                    th.trigger("reset");

                $(".success").removeClass("visible");
                $.magnificPopup.close();
                }, 3000);
            });
            return false;
        });
// END FORM


// MOBILE MENU
        var link = $('.gumburger');
        var close = $('.close-menu');
        var menu = $('.main-menu');
        link.on('click', function(event){
            $(this).css('visibility','hidden');  
            event.preventDefault();
            menu.toggleClass('main-menu__active')
        });
        close.on('click', function(event){
            $('.gumburger').css('visibility','visible');
            event.preventDefault();
            menu.toggleClass('main-menu__active')
        });
        
// END MOBILE MENU


});
