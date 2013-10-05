define(

	[
		'../es5-shim/es5-sham',
		'../es5-shim/es5-shim',
		'../jquery/jquery',
		'../mediamatch/matchMedia'
	],
	
	function () {
	
		return function (modules, targets) {
		
			var deps = Object.keys(modules),
			
			devs = Object.keys((targets = targets || {}));
			
			devs.forEach(function (dev) {
								
				targets[dev] = window.matchMedia(targets[dev]).matches;
			});
		
			deps.forEach(function (dep) {
				
				var Component = require(dep);
				
				[].concat(modules[dep]).forEach(function (config) {
			
					if (!config) {
					
						return false;
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
					
					devs.forEach(function (dev) {
					
						if (!config[dev]) {
						
							return false;
						}
						
						if (targets[dev]) {
							
							config = jQuery.extend(
								true,
								config,
								config[dev]
							);
						}
						
						delete config[dev];
					});
		
					if (config.enabled) {
			
						Component.attachTo(config.selector, config.domReady, config.options);
					}
				});
			});
		};
	}
);