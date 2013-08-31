define(

	[
		'../lodash/lodash',
		'../es5-shim/es5-sham',
		'../es5-shim/es5-shim',
		'../jquery/jquery',
		'../modernizr/modernizr'
	],
	
	function (_) {
	
		return function (modules, media) {
		
			media = media || {
				mobile: 'only screen and (min-device-width: 320px) and (max-device-width: 767px)'
			};
		
			_.forOwn(modules, function (config, module) {
				
				try {
					
					var Component = require(module);
					
					_.forEach([].concat(config), function (config) {
				
						if (config === false) {
						
							config = {
								enabled: false, 
							};
							
							_.forOwn(media, function (query, name){
								
								config[name] = {
									enabled: false
								}
							});
						}
			
						config = jQuery.extend(
							true, 
							{
								domReady: false,
								enabled: true,
								options: {},
								selector: document
							},
							config
						);
						
						_.forOwn(media, function (query, name) {
						
							if (config[name] === false) {
						
								config[name] = {
									enabled: false
								}
							}
							
							if (config[name] && Modernizr.mq(query)) {
								
								config = jQuery.extend(
									true,
									config,
									config[name]
								);
								
								delete config[name];
							}
						});
			
						if (config.enabled) {
				
							Component.attachTo(config.selector, config.options, config.domReady);
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