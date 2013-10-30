# wings

A Flight Component bootstrap.

## Overview

### wings(modules[, targets])

#### `modules`: Object

Component path and config mapping.

#### `targets`: Object

Optional. Target alias and media query mapping.

## Examples

Require Wings to create Component instances.

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
			smalldevice: 'only screen and (min-device-width: 320px) and (max-device-width: 767px)'
		};

		wings(modules, targets);
	}
);
```

Create Component instance and attach to selected DOM node.

```js
'path/to/your/flight/component': {
	selector: '#foo'
}

Create Component instance with options and attach to selected DOM node.

```js
'path/to/your/flight/component': {
	options: {
		color: '#fff'
	},
	selector: '#foo'
}
```

Create multiple Component instances with respective options and DOM nodes.

```js
'path/to/your/flight/component': [
	{
		options: {
			color: '#fff'
		},
		selector: '#foo'
	},
	{
		options: {
			color: '#000'
		},
		selector: '#foo2'
	}
]
```

Prevent Component from being created.

```js
'path/to/your/flight/component': {
	enabled: false
}

'path/to/your/flight/component': false
```

Create Component instance with "smalldevice" target override.

```js
'path/to/your/flight/component': {
	options: {
		color: '#fff'
	},
	selector: '#foo',
	targets: {
		smalldevice: {
			options: {
				color: '#000'
			},
			selector: '#boo'
		}
	}
}
```

Create Component instance ONLY when the target matches the "smalldevice" media query.

```js
'path/to/your/flight/component': {
	enabled: false,
	targets: {
		smalldevice: {
			enabled: true,
			options: {
				color: '#000'
			},
			selector: '#boo'
		}
	}
}
```