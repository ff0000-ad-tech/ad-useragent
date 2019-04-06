/**
	@npmpackage
	@class Device
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-external">ad-external</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { Device } from 'ad-external'
		</codeblock>
		<br><br>
		
		Global constant that provide information about the Device on which the code is currently executing
*/

/**	
	@memberOf Device	
	@var {string} agentString
	@desc
		Current user agent of browser. */

/**	
	@memberOf Device	
	@var {string} brand
	@desc
		Brand of device, possible values are: 
		<code>microsoft</code>, 
		<code>apple</code>, 
		<code>android</code>, 
		<code>rim</code>, 
		<code>unknown</code>. 
*/

/**	
	@memberOf Device	
	@var {string} product
	@desc
		Brand subtype, possible values are: 
		<code>windows phone</code>, 
		<code>windows</code>, 
		<code>iphone</code>, 
		<code>ipad</code>, 
		<code>ipod</code>, 
		<code>mac</code>, 
		<code>android</code>, 
		<code>pixel 2</code>, 
		<code>blackberry</code>. 
	*/

/**	
	@memberOf Device	
	@var {string} type
	@desc
		Device type, possible values are: 
		<code>mobile</code>, 
		<code>tablet</code>, 
		<code>desktop</code>. 
		<br><br>
		Windows > 8 currently returns tablet, currently no way to differentiate from desktop. */

/**	
	@memberOf Device	
	@var {string} os
	@desc
		Operating system of device. */

/**	
	@memberOf Device	
	@var {string} osVersion
	@desc
		Version of operating system of device. */

/** 	
	@memberOf Device	
	@var {string} browser
	@desc
		Brand of browser. */

/**	
	@memberOf Device	
	@var {string} browserVersion
	@desc
		Version of browser. 
*/

/**	
	@memberOf Device	
	@var {string} pixelRatio
	@desc
		Pixel ratio of device viewport. 
*/

/**	
	@memberOf Device	
	@var {string} orientation
	@desc
		Orientaion of device viewport: landscape or portrait. 
*/

/**	
	@memberOf Device	
	@var {object} dimensions
	@property {number} width
		window inner-width
	@property {number} height
		window inner-height
	@desc
		The current dimensions of the device's viewport, returns an object with a width and height 
		value that are direct returns of windowWidth and windowHeight.
*/

/**	
	@memberOf Device	
	@method init
	@desc
		Initializes the module, which is called from within the pipeline.
*/
