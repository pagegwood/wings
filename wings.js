define(

	[
		'../es5-shim/es5-sham',
		'../es5-shim/es5-shim',
		'../jquery/jquery',
		'../mediamatch/matchMedia'
	],
	
	function () {
	
		return function (modules, targets) {

			Object.keys(targets = targets || {}).forEach(function (alias) {
								
				targets[alias] = window.matchMedia(targets[alias]).matches;
			});
		
			Object.keys(modules).forEach(function (name) {
				
				[].concat(modules[name]).forEach(function (config) {
			
					if (!config)
						return false;
		
					config = jQuery.extend(
						true, 
						{
							domReady: false,
							enabled: true,
							options: {},
							selector: document,
							targets: {}
						},
						config
					);

					Object.keys(config.targets || {}).forEach(function (alias) {

						if (!targets[alias])
							return false;

						config.targets[alias] = (config.targets[alias] || { enabled: false });

						config = jQuery.extend(
							true,
							config,
							config.targets[alias]
						);
					});
		
					if (!config.enabled)
						return false;

					require(name).attachTo(
						config.selector,
						config.domReady,
						config.options
					);
				});
			});
		};
	}
);