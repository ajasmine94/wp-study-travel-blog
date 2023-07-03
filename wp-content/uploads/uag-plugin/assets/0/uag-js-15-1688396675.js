document.addEventListener("DOMContentLoaded", function(){ jQuery(document).ready(function () {
				let scope = jQuery(".wp-block-uagb-image-gallery.uagb-block-9753fe8d");
				if ( scope.length ) { 
					scope.css("visibility", "visible");
					let getSlickCarousel = scope.find(".uagb-slick-carousel");
					if( getSlickCarousel.length ) {
						getSlickCarousel.slick({"arrows":false,"dots":true,"initialSlide":1,"infinite":true,"autoplay":true,"autoplaySpeed":2000,"pauseOnHover":true,"speed":500,"slidesToShow":2,"prevArrow":"<button type='button' data-role='none' class='spectra-image-gallery__control-arrows spectra-image-gallery__control-arrows--carousel slick-prev slick-arrow' aria-label='Previous' tabindex='0' role='button'><svg xmlns='http:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' width='24' height='24'><path d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'><\/path><\/svg><\/button>","nextArrow":"<button type='button' data-role='none' class='spectra-image-gallery__control-arrows spectra-image-gallery__control-arrows--carousel slick-next slick-arrow' aria-label='Previous' tabindex='0' role='button'><svg xmlns='http:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' width='24' height='24'><path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'><\/path><\/svg><\/button>","rtl":false,"responsive":[{"breakpoint":1024,"settings":{"slidesToShow":3}},{"breakpoint":767,"settings":{"slidesToShow":2}}]});
					}
				}
			});window.addEventListener("DOMContentLoaded", function(){
	UAGBForms.init( {"block_id":"4fb24ff0","reCaptchaEnable":false,"reCaptchaType":"v2","reCaptchaSiteKeyV2":"","reCaptchaSecretKeyV2":"","reCaptchaSiteKeyV3":"","reCaptchaSecretKeyV3":"","afterSubmitToEmail":"ang.jasmsine94@gmail.com","afterSubmitCcEmail":"","afterSubmitBccEmail":"","afterSubmitEmailSubject":"Form Submission - Testing Wordpress","sendAfterSubmitEmail":true,"confirmationType":"message","hidereCaptchaBatch":false,"captchaMessage":"Please fill up the above captcha.","confirmationUrl":""}, '.uagb-block-4fb24ff0', 15 );
});
var ssLinks = document.querySelectorAll( '.uagb-block-861199ac' );
for ( var j = 0; j < ssLinks.length; j++ ) {
	var ssLink = ssLinks[j].querySelectorAll( ".uagb-ss__link" );
	for ( var i = 0; i < ssLink.length; i++ ) {
		ssLink[i].addEventListener( "click", function() {
			var social_url = this.dataset.href;
			var target = "";
			if( social_url == "mailto:?body=" ) {
				target = "_self";
			}
			var  request_url ="";
			if( social_url.indexOf("/pin/create/link/?url=") !== -1) {
				request_url = social_url + encodeURIComponent( window.location.href ) + "&media=" + '';
			}else{
				request_url = social_url + encodeURIComponent( window.location.href );
			}
			window.open( request_url, target );
		});
	}
}
 });