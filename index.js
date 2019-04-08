import { isDevice, getDevice } from './lib/device.js'
import { isBrowser, getBrowser, getBrowserVersion } from './lib/browser.js'
import { getBrand, getProduct, getOS, getOSVersion, isOS } from './lib/brandAndOS.js'

export {
	isDevice,
	getDevice,
	isBrowser,
	getBrowser,
	getBrowserVersion,
	getBrand,
	getProduct,
	getOS,
	getOSVersion,
	isOS
}

/**	
	@memberOf ad-useragent	
	@var {string} agentString
	@desc
		Current user agent of browser. 
*/
export const agentString = navigator.userAgent

/**	
	@memberOf ad-useragent	
	@var {string} pixelRatio
	@desc
		Pixel ratio of device viewport. 
*/
export const pixelRatio = window.devicePixelRatio || 'unknown'

/**	
	@memberOf ad-useragent	
	@method getOrientation
	@returns {string}
	@desc
		Orientaion of device viewport: landscape or portrait. 
*/
export const getOrientation = () => {
	return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
}

/**	
	@memberOf ad-useragent
	@method getDimensions
	@returns {object}	
	@property {number} width
		window inner-width
	@property {number} height
		window inner-height
	@desc
		The current dimensions of the device's viewport, returns an object with a width & height 
		value that are direct returns of windowWidth and windowHeight.
*/
export const getDimensions = () => {
	return {
		width: window.innerWidth,
		height: window.innerHeight
	}
}

/**	
	@memberOf ad-useragent	
	@method report
	@desc
		Called from within the pipeline, logs out the useragent string & all available pasered data for 
		brand, product, device, OS & version, browser & version, dimensions, orientation, & pixel ratio
*/
export const report = () => {
	console.log(
		Array(70).join('-'),
		'\n useragent:\n\n\t' + agentString + '\n',
		'\n  Brand:\t\t\t' + getBrand(),
		'\n  Product:\t\t\t' + getProduct(),
		'\n  Device:\t\t\t' + getDevice(),
		'\n  Os:\t\t\t\t' + getOS() + ' - ' + getOSVersion(),
		'\n  Browser:\t\t\t' + getBrowser() + ' - ' + getBrowserVersion(),
		'\n  Dimensions: \t\t' + getDimensions().width + 'x' + getDimensions().height,
		'\n  Orientation:\t\t' + getOrientation(),
		'\n  Pixel Ratio:\t\t' + pixelRatio,
		'\n' + Array(70).join('-')
	)
}
