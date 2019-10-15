document.addEventListener("DOMContentLoaded", function() {

// MAIN SLIDER
$('.slider').slick({
	prevArrow: '<div class="y_prevArrow"><img alt="" src="img/right-arrow.svg"></div>',
	nextArrow: '<div class="y_nextArrow"><img alt="" src="img/left-arrow.svg"></div>',
	slidesToShow: 1,
	infinite: true,
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


});
