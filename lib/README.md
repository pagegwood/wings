## Overview

### Component.attachTo(selector[, domReady][, options])

#### `selector`: String | Element | Element collection

[See offical Flight docs](https://github.com/flightjs/flight/blob/master/doc/component_api.md#selector-string--element--element-collection)

#### `domReady`: Boolean

Optional. If true, the Component will be attached to the selected node(s) after the DOM is fully loaded.

#### `options`: Object

[See offical Flight docs](https://github.com/flightjs/flight/blob/master/doc/component_api.md#options-object)

## Examples

Attach component to '#foo' only after DOM is ready

```js
'path/to/your/wings/component': {
	domReady: true,
	options: {
		color: '#fff'
	},
	selector: '#foo'
}
```