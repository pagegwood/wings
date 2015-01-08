define(

	function () {

		return function (modules/*[, targets][, callback]*/) {

			var targets = {};
			var callback = null;
			var modulez = [];
			var counter = 0;
			var resolve = function () {
				if (++counter === modulez.length &&  typeof callback === 'function') {
					callback();
				}
			};

			if (typeof modules !== 'object') throw new TypeError('modules must be an Object');
			if (typeof arguments[1] === 'object') targets = arguments[1];
			if (typeof arguments[1] === 'function') callback = arguments[1];
			if (typeof arguments[2] === 'function') callback = arguments[2];

			Object.keys(targets).forEach(function (alias) {

				targets[alias] = matchMedia(targets[alias]).matches;
			});

			Object.keys(modules).forEach(function (module) {

				[].concat(modules[module]).forEach(function (config) {

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

						if (!targets[alias]) return false;

						if (!target) target = { enabled: false };

						config = jQuery.extend(
							true,
							config,
							target
						);
					});

					modulez.push({
						config: config,
						name: module
					});
				});
			});

			modulez.forEach(function (module) {
				var config = module.config;
				var name = module.name;

				if (config.enabled) {
					require([name], function (component) {
						component.attachTo(config.selector, config.options, config.domReady, resolve);
					});
				}
				else {
					resolve();
				}
			});
		};
	}
);
