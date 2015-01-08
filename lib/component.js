define(

	[
		'../../flight/lib/component'
	],

	function (defineComponent) {

		return function (/* mixins */) {
			var Component = defineComponent.apply(null, arguments);
			var baseAttachTo = Component.attachTo;

			Component.attachTo = function (selector/*[, options][, domReady][, callback]*/) {
				var length = arguments.length;
				var index = 1;
				var options = {};
				var domReady = false;
				var callback = null;
				var attachTo = function () {
					baseAttachTo.call(Component, selector, options);
					if (callback) callback();
				};

				for (index = 1; index < length; index++) {
					var arg = arguments[index];

					switch (typeof arg) {
						case 'object':
							options = arg;
							break;
						case 'boolean':
							domReady = arg;
							break;
						case 'function':
							callback = arg;
							break;
						}
					}

					(domReady === true) ? jQuery(attachTo) : attachTo();
				};

			return Component;
		};
	}
);
