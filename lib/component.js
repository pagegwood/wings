define(
	
	[
		'../../flight/lib/component'
	],
	
	function (defineComponent) {
	
		return function (/* mixins */) {
			
			var Component = defineComponent.apply(null, arguments),
			
			attachTo = Component.attachTo;
			
			Component.attachTo = function (selector/*[, options, docReady]*/) {
		
				var args = arguments,
				
				docReady = false,
				
				callback = function () {
				
					attachTo.apply(Component, args);
				};
				
				if (args.length === 3) {
					
					docReady = args[2];
					args = [].slice.call(args, 0, 2);
				}
				
				(docReady === true) ? jQuery(callback) : callback();
			};
			
			return Component;
		};
	}
);