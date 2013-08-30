define(

	[
		'../lodash/lodash',
		'../es5-shim/es5-sham',
		'../es5-shim/es5-shim',
		'../jquery/jquery',
		'../modernizr/modernizr'
	],
	
	function (_) {
	
		return function (features) {
		
			features = features || {};
		
			_.forOwn(features, function (feature, dependency) {
				
				try {
					
					var  Component = require(dependency);
					
					_.forEach([].concat(feature), function (feature) {
				
						if (!feature) {
						
							feature = {
								enabled: false, 
								mobile: {
									enabled: false
								}
							};
						}
			
						feature = jQuery.extend(
							true, 
							{
								domReady: false,
								enabled: true,
								mobile: {},
								options: {},
								selector: document
							},
							feature
						);
					
						if (!feature.mobile) {
						
							feature.mobile = {
								enabled: false
							};
						}
				
						if (Modernizr.mq('only screen and (min-device-width: 320px) and (max-device-width: 767px)')) {
				
							feature = jQuery.extend(
								feature,
								feature.mobile
							);
						}
			
						if (feature.enabled) {
				
							Component.attachTo(feature.selector, feature.options, feature.domReady);
						}
					});
				}
				catch (ex) {
					
					console.error(ex.message);
				}
			});
		};
	}
);