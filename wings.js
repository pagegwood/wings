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

					if (!config) {
						config = {
							enabled: false
						};
					}

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
						var target = config.targets[alias];

						if (!targets[alias]) {
							return false;
						}

						if (!target) {
							target = {
								enabled: false
							};
						}

						config = jQuery.extend(
							true,
							config,
							target
						);
					});

					if (!config.enabled) {
						return false;
					}

					require(name).attachTo(config.selector, config.domReady, config.options);
				});
			});
		};
	}
);
