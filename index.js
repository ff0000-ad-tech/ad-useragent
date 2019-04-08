import { agent } from './lib/agent.js'
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

export const pixelRatio = window.devicePixelRatio || 'unknown'

export function getOrientation() {
	return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
}

export function getDimensions() {
	return {
		width: window.innerWidth,
		height: window.innerHeight
	}
}

export function report() {
	console.log('ad-useragent > report()')

	// TODO - update type in this exception
	// if (!isDevice('desktop') && isOS('windows') && getOSVersion() <= 8 && isBrowser('ie') && getBrowserVersion < 12) {
	// 	console.log(
	// 		"You appear to be on Windows 7 or 8 using Internet Explorer 11 or under. You also appear to be on a touchscreen device. We will assume you're actually on a desktop, since it's extremely unlikely you're on a tablet or mobile device using this specific operating system and browser."
	// 	)
	// 	D.type = 'desktop'
	// }

	console.log(
		Array(70).join('-'),
		'\n AGENT:\n\n\t' + agent + '\n',
		'\n  Brand:\t\t\t' + getBrand(),
		'\n  Product:\t\t\t' + getProduct(),
		'\n  Type:\t\t\t\t' + getDevice(),
		'\n  Os:\t\t\t\t' + getOS() + ' - ' + getOSVersion(),
		'\n  Browser:\t\t\t' + getBrowser() + ' - ' + getBrowserVersion(),
		'\n  Dimensions: \t\t' + getDimensions().width + 'x' + getDimensions().height,
		'\n  Orientation:\t\t' + getOrientation(),
		'\n  Pixel Ratio:\t\t' + pixelRatio,
		'\n' + Array(70).join('-')
	)
}
