$(document).ready(function(){
	$(".menu_button").click(function(){
		$(".menu_button").toggleClass("menu_button_active"); return false;
	});
});
$(document).ready(function(){
	$(".menu_button").click(function(){
		$(".nav_mob").toggleClass("nav_mob_active"); return false;
	});
});

$('[data-target="modal_callback"]').on('click', function(event) {
	event.preventDefault();
	$('.modal_callback').show();
});
$('.modal_callback_close').on('click', function(event) {
	event.preventDefault();
	$('.modal_callback').hide();
});


$(function() {
var el;
$("#rng").change(function() {
el = $(this);
el
.next("#ong")
.text(el.val());
})
.trigger('change');
});


$('[data-target="modal_apply"]').on('click', function(event) {
	event.preventDefault();
	$('.modal_apply').show();
});
$('.modal_apply_close').on('click', function(event) {
	event.preventDefault();
	$('.modal_apply').hide();
});


$('[data-target="modal_howtoget_1"]').on('click', function(event) {
	event.preventDefault();
	$('.modal_howtoget_1').show();
});
$('.modal_howtoget_1').on('click', function(event) {
	event.preventDefault();
	$('.modal_howtoget_1').hide();
});
$(document).on('click', '.modal_howtoget_1', function() {
      jQuery("iframe").each(function() {
        jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
      });
    });


$('[data-target="modal_howtoget_2"]').on('click', function(event) {
	event.preventDefault();
	$('.modal_howtoget_2').show();
});
$('.modal_howtoget_2').on('click', function(event) {
	event.preventDefault();
	$('.modal_howtoget_2').hide();
});
$(document).on('click', '.modal_howtoget_2', function() {
      jQuery("iframe").each(function() {
        jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
      });
    });


$('[data-target="modal_howtoget_3"]').on('click', function(event) {
	event.preventDefault();
	$('.modal_howtoget_3').show();
});
$('.modal_howtoget_3').on('click', function(event) {
	event.preventDefault();
	$('.modal_howtoget_3').hide();
});
$(document).on('click', '.modal_howtoget_3', function() {
      jQuery("iframe").each(function() {
        jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
      });
    });

$(function() {
 $('#seo_text_block').readmore({
 moreLink: '<a href="#" class="seo_more">Показать еще</a>',
 lessLink: '<a href="#" class="seo_less">Свернуть</a>',
 collapsedHeight: 66,
 speed: 200,
 afterToggle: function(trigger, element, expanded) {
 if(! expanded) { // The "Close" link was clicked
 $('html, body').animate({scrollTop: $(element).offset().top}, {duration: 100});
 }
 }
 });
 });

  $(document).ready(function () {

        $('.faq-heading').click(function () {
            $(this).toggleClass('in').next().slideToggle();
            $('.faq-heading').not(this).removeClass('in').next().slideUp();
        });

    });

