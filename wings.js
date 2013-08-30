define(

	[
		'../lodash/lodash',
		'../es5-shim/es5-sham',
		'../es5-shim/es5-shim',
		'../jquery/jquery',
		'../modernizr/modernizr'
	],
	
	function (_) {
	
		return function (config) {
		
			var features = config.features,
			
			media = config.media || {
				mobile: 'only screen and (min-device-width: 320px) and (max-device-width: 767px)'
			};
		
			_.forOwn(features, function (feature, dependency) {
				
				try {
					
					var Component = require(dependency);
					
					_.forEach([].concat(feature), function (feature) {
				
						if (feature === false) {
						
							feature = {
								enabled: false, 
							};
							
							_.forOwn(media, function (query, name){
								
								feature[name] = {
									enabled: false
								}
							});
						}
			
						feature = jQuery.extend(
							true, 
							{
								domReady: false,
								enabled: true,
								options: {},
								selector: document
							},
							feature
						);
						
						_.forOwn(media, function (query, name){
						
							if (feature[name] === false) {
						
								feature[name] = {
									enabled: false
								}
							}
							
							if (feature[name] && Modernizr.mq(query)) {
								
								feature = jQuery.extend(
									true,
									feature,
									feature[name]
								);
								
								delete feature[name];
							}
						});
			
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