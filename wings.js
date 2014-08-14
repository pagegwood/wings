define(

	function () {

		return function (modules, targets) {

			if (typeof modules !== 'object') throw new TypeError('modules must be an Object');

			if (typeof targets !== 'object') targets = {};

			Object.keys(targets).forEach(function (alias) {

				targets[alias] = matchMedia(targets[alias]).matches;
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
