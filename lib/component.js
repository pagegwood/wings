define(
	
	[
		'flight/lib/component',
		'jquery',
	],
	
	function (defineComponent, $) {
	
		return function (/* mixins */) {
			
			var Component = defineComponent.apply(null, arguments),
			
			attachTo = Component.attachTo;
			
			Component.attachTo = function (selector/*, options, wait */) {
		
				var args = arguments,
				
				callback = function () {
				
					attachTo.apply(Component, args);
				};
				
				(wait === true) ? $(callback) : callback();
			};
			
			return Component;
		};
	}
);