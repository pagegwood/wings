# Wings

A Flight component loader.

## Overview

### wings(modules[, targets])

#### `modules`: Object

Component module path and config map.

#### `targets`: Object

Optional. Target name and media query map. Override default module config by target.

## Examples

Wings requires an AMD module loader. Use module loader to require Wings.

```js
require(

	[
		'path/to/wings'
	],
	
	function (wings) {

		var modules = {
			'path/to/your/flight/component': {
				enabled: true,
				options: {},
				selector: document
			}
			[, another component to load]
			[, another component to load]
			[, ... ]
		},

		targets = {
			smallscreen: 'only screen and (min-device-width: 320px) and (max-device-width: 767px)'
		};

		wings(modules, targets);
	}
);
```

Configure component to be created and attached to the selected DOM nodes with options.

```js
'path/to/your/flight/component': {
	options: {
		color: '#fff'
	},
	selector: '#foo'
}
```

Configure component for the small screen target, overriding the default configuration.

```js
'path/to/your/flight/component': {
	options: {
		color: '#fff'
	},
	selector: '#foo',
	smallscreen: {
		options: {
			color: '#000'
		},
		selector: '#boo'
	}
}
```

Prevent component from being configured.

```js
'path/to/your/flight/component': {
	enabled: false
}

'path/to/your/flight/component': false
```

Configure component for the small screen target only.

```js
'path/to/your/flight/component': {
	enabled: false,
	smallscreens: {
		enabled: true,
		options: {
			color: '#000'
		},
		selector: '#boo'
	}
}
```