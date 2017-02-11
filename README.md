# Same Width

This library can be used to dynamically ensure all elements of a given CSS selector are rendered at the same width. On page-load all elements in the set are measured and the width of the biggest element is assigned to all elements. On a window resize (or orientation change on mobile) the widths are set to auto, measured again and then reset to accomodate any shift in layout caused by the change in window size.

Additional triggers can be added via [LayoutQueue](https://github.com/davejtoews/layout-queue).

##  Installation

Install via npm or yarn.

    npm install same-width

OR

	yarn add same-width

Then require this module within your javascript:

    var SameWidth = require('same-width');

## Basic Use

The methods of SameWidth all use standard CSS selectors, (e.g. 'p', '.class', '#id'). To assign a group of elements to have the same height use `init()`:

    SameWidth.init(selector);

This will add resizing the elements to a queue of tasks that will be executed on window load and window resize in the order which they have been added. 

## Advanced use

To manually unset the width of a group of elements use `unset()`:

	SameWidth.unset(selector);

To manually set the width of a group of elements use 'set()';

    SameWidth.set(selector);

To add additional triggers for the execution of the queue see the documentation for [LayoutQueue](https://github.com/davejtoews/layout-queue);