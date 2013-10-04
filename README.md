# Wings

Opinionated Flight component loader.

## Wings(modules[, targets])

#### `modules`: Object

Component path and config map.

Use:

```js
require(

	[
		'path/to/wings'
	],
	
	function (wings) {

		var modules = {
			'path/to/flight/component': {
				domReady: false,
				enabled: true,
				options: {},
				selector: document
			}
			[, another component to load]
			[, another component to load]
			[, ... ]
		};

		wings(modules);
	}
);
```

Example: 

```js
'path/to/flight/component': {
	domReady: true,
	options: {
		color: '#fff'
	},
	selector: '#foo'
}
```
Example: Prevent a compnent from being loaded

```js
'path/to/flight/component': {
	enabled: false
}
```
Or

```js
'path/to/flight/component': false
```

#### `targets`: Object

Optional. Target name and media query map. Override default module config per target.

Use:

```js
var targets = {
	smallscreen: 'only screen and (min-device-width: 320px) and (max-device-width: 767px)'
};
```

Example:

```js
'path/to/flight/component': {
	domReady: true,
	options: {
		color: '#fff'
	},
	selector: '#foo',
	smallscreen: {
		domReady: false,
		options: {
			color: '#000'
		},
		selector: '#boo'
	}
}
```

Example: 

```js
'path/to/flight/component': {
	enabled: false,
	smallscreen: {
		enabled: true,
		options: {
			color: '#000'
		},
		selector: '#boo'
	}
}
```

####

## Component.attachTo(selector[, domReady][, options])

#### `selector`: String | Element | Element collection

[See offical Flight docs](https://github.com/flightjs/flight/blob/master/doc/component_api.md#selector-string--element--element-collection)

#### `domReady`: Boolean

Optional. If true, the Component will be attached to the selected node(s) after the DOM is fully loaded.

#### `options`: Object

[See offical Flight docs](https://github.com/flightjs/flight/blob/master/doc/component_api.md#options-object)