define(

	[
		'../es5-shim/es5-sham',
		'../es5-shim/es5-shim',
		'../jquery/jquery',
		'../mediamatch/matchMedia'
	],
	
	function () {
	
		return function (modules, media) {
		
			media = media || {
				mobile: 'only screen and (min-device-width: 320px) and (max-device-width: 767px)'
			};
			
			Object.keys(media).forEach(function (name) {
								
				media[name] = window.matchMedia(media[name]).matches;
			});
		
			Object.keys(modules).forEach(function (module) {
				
				try {
					
					var Component = require(module);
					
					[].concat(modules[module]).forEach(function (config) {
				
						if (config === false) {
						
							config = {
								enabled: false
							};
							
							Object.keys(media).forEach(function (name) {
								
								config[name] = {
									enabled: false
								};
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
						
						Object.keys(media).forEach(function (name) {
						
							config[name] = (typeof config[name] === 'undefined' ? {} : config[name]);
						
							if (config[name] === false) {
						
								config[name] = {
									enabled: false
								};
							}
							
							if (media[name]) {
								
								config = jQuery.extend(
									true,
									config,
									config[name]
								);
							}
							
							delete config[name];
						});
			
						if (config.enabled) {
				
							Component.attachTo(config.selector, config.domReady, config.options);
						}
					});
				}
				catch (ex) {
					
					console.log(ex.message);
				}
			});
		};
	}
);