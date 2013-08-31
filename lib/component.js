define(
	
	[
		'../../flight/lib/component'
	],
	
	function (defineComponent) {
	
		return function (/* mixins */) {
			
			var Component = defineComponent.apply(null, arguments),
			
			attachTo = Component.attachTo;
			
			Component.attachTo = function (selector/*[, domReady][, options][, deepCopy]*/) {
		
				var args = arguments,
				
				selector = args[0],
				
				domReady = args[1],
				
				callback = function () {
				
					attachTo.apply(Component, args);
				};
				
				if (typeof domReady === 'boolean') {
				
					args = [selector].concat([].slice.call(args, 2));
				}
				else {
				
					domReady = false;
				}
				
				(domReady === true) ? jQuery(callback) : callback();
			};
			
			return Component;
		};
	}
);