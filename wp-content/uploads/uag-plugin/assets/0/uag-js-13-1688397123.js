document.addEventListener("DOMContentLoaded", function(){ window.addEventListener("DOMContentLoaded", function(){
	UAGBForms.init( {"block_id":"2a8721c9","reCaptchaEnable":false,"reCaptchaType":"v2","reCaptchaSiteKeyV2":"","reCaptchaSecretKeyV2":"","reCaptchaSiteKeyV3":"","reCaptchaSecretKeyV3":"","afterSubmitToEmail":"ang.jasmine94@gmail.com","afterSubmitCcEmail":"","afterSubmitBccEmail":"","afterSubmitEmailSubject":"Testing of Wordpress","sendAfterSubmitEmail":true,"confirmationType":"message","hidereCaptchaBatch":false,"captchaMessage":"Please fill up the above captcha.","confirmationUrl":""}, '.uagb-block-2a8721c9', 13 );
});
window.addEventListener( 'DOMContentLoaded', function() {
	UAGBLottie._run( {"block_id":"63cedf63","lottieSource":"url","lottieURl":"https:\/\/assets8.lottiefiles.com\/packages\/lf20_gaplvsns.json","jsonLottie":"","height":"","heightTablet":"","heightMob":"","width":"","widthTablet":"","widthMob":"","backgroundColor":"","backgroundHColor":"","loop":true,"speed":1,"reverse":false,"playOn":"none"}, 'uagb-block-63cedf63' );
});
var ssLinks = document.querySelectorAll( '.uagb-block-eb31fade' );
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