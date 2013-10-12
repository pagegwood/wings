# Wings

A Flight component loader.

## Overview

### wings(modules[, targets])

#### `modules`: Object

Component module path and config mapping.

#### `targets`: Object

Optional. Device or screen alias and media query mapping. Alias naming is arbitrary.

## Examples

Require Wings to load your components.

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

Component will be loaded and attached to #foo with options.

```js
'path/to/your/flight/component': {
	options: {
		color: '#fff'
	},
	selector: '#foo'
}
```

Component will be loaded using smallscreen config when the target matches the smallscreen media query.

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

Component will not be loaded.

```js
'path/to/your/flight/component': {
	enabled: false
}

'path/to/your/flight/component': false
```

Component will not be loaded, except for the smallscreen target.

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