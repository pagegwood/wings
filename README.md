# Wings

A Flight component loader.

## Wings(modules[, targets])

#### `modules`: Object

Component module path and config map.

#### `targets`: Object

Optional. Target name and media query map. Override default module config by target.

Use:

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

Example: Configure a component to be created and attached to the selected DOM nodes with options.

```js
'path/to/your/flight/component': {
	options: {
		color: '#fff'
	},
	selector: '#foo'
}
```

Example: Override the selector and color option for small screens.

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

Example: Prevent a component from being created.

```js
'path/to/your/flight/component': {
	enabled: false
}
```
Or

```js
'path/to/your/flight/component': false
```