define(
	
	[
		'../../flight/lib/component'
	],
	
	function (defineComponent) {
	
		return function (/* mixins */) {
			
			var Component = defineComponent.apply(null, arguments),
			
			attachTo = Component.attachTo;
			
			Component.attachTo = function (selector/*[, options, domReady]*/) {
		
				var args = arguments,
				
				domReady = false,
				
				callback = function () {
				
					attachTo.apply(Component, args);
				};
				
				if (args.length === 3) {
					
					domReady = args[2];
					args = [].slice.call(args, 0, 2);
				}
				
				(domReady === true) ? jQuery(callback) : callback();
			};
			
			return Component;
		};
	}
);