// Configuration of environnement and dependencies on Viadeo webapp
// ------------------------------------------------------------------------------
tetra.extend({
	conf: {
		env: 'jQuery',

                APPS_PATH : '/javascript/coremvc/apps',
                GLOBAL_PATH : '/javascript/coremvc',
                COMP_PATH : '/resource/comp',

		jsVersion: VNS.context.scriptsVersion,
		authCallback: function(){ 
			tns.ajaxBox = 
				new VNS.util.AjaxPopupBox('/r/account/authentication/', { 
						callback : 'tns.currentRequest', 
						allowEscape : false, 
						popupVar: 'tns.ajaxBox' 
				});
		},
		currentRequestCallback: function() {
			if(tns.ajaxBox) {
				tns.ajaxBox.close();
			}
		},
		enableBootstrap: true
	}
}).start();
