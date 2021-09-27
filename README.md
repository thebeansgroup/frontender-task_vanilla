# Frontender Task

Hey :)

* Tested down to ie11 on browser. 

* Looks ok down to 320px on mobile - if you remove the extra comment nesting I've included to demonstrate the ability to render comments at at depth - which isn't included on the mockups. If I was to work on this further, I'd decrement the padding that offsets the comment boxes, proportional to the depth of nesting.

* I've used sass because I don't like searching through long stylesheets, and I prefer to nest media queries rather than having to wrap the repeated classname. I've avoided the use of other scss features in order to keep parity with writing css.

* There is some repetition of 'theme' styles such as background colour, text size, text colour - but subclassing by either adding 'atomic style' classes or duplicating classes further down the stylesheet would reduce readibility to save only a few lines.

* Autoprefixing, minimizing, use of shorthands for css is always something I post process.

* Ideally, I'd probably work out a scale for type, and tokenize these values, either to be interpolated from scss to css or using custom properties in the browser. This lends itself to starting from a design system rather than standalone page, where the overhead in effort doesn't necessarily make it worthwhile,