/**
	@namespace ad-useragent
 */
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
	@var {string} agentString
	@desc
		Current user agent of browser, unmodified or parsed. 
		<codeblock>
			import { agentString } from 'ad-useragent'
			console.log(agentString) // 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36'
		</codeblock>
*/
export const agentString = navigator.userAgent

/**	
	@var {string} pixelRatio
	@desc
		Pixel ratio of device viewport. 
		<codeblock>
			import { pixelRatio } from 'ad-useragent'
			console.log(pixelRatio) // 1
		</codeblock>
*/
export const pixelRatio = window.devicePixelRatio || 'unknown'

/**		
	@method getOrientation
	@returns {string}
	@desc
		Orientaion of device viewport: landscape or portrait. 
		<codeblock>
			import { getOrientation } from 'ad-useragent'
			getOrientation() // 'landscape'
		</codeblock>
*/
export const getOrientation = () => {
	return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
}

/**	
	@method getDimensions
	@returns {object}	
	@property {number} width
		window inner-width
	@property {number} height
		window inner-height
	@desc
		The current dimensions of the device's viewport, returns an object with a width & height 
		value that are direct returns of windowWidth and windowHeight.
		<codeblock>
			import { getDimensions } from 'ad-useragent'
			getDimensions() // '{ width: 1024, height: 768 }'
		</codeblock>
*/
export const getDimensions = () => {
	return {
		width: window.innerWidth,
		height: window.innerHeight
	}
}

/**	
	@method report
	@desc
		Called from within the pipeline, logs out the useragent string & all available pasered data for 
		brand, product, device, OS & version, browser & version, dimensions, orientation, & pixel ratio
		<codeblock>
			import { report } from 'ad-useragent'
			report() // full output in console
		</codeblock>
*/
export const report = () => {
	function create(br) {
		return `useragent:${br}${br}\t${agentString + br + br} Brand:\t\t\t${getBrand() +
			br} Product:\t\t\t${getProduct() + br} Device:\t\t\t${getDevice() +
			br} Os:\t\t\t\t${getOS()} - ${getOSVersion() + br} Browser:\t\t\t${getBrowser()} - ${getBrowserVersion() +
			br} Dimensions:\t\t${getDimensions().width}x${getDimensions().height +
			br} Orientation:\t\t${getOrientation() + br} Pixel Ratio:\t\t${pixelRatio}`
	}
	const line = Array(70).join('-')
	console.log(line + '\n', create('\n'), '\n' + line)

	return create('<br>')
}
