import { agent } from './lib/agent.js'
import { isType, getType } from './lib/type.js'
import { isBrowser, getBrowser, getBrowserVersion } from './lib/browser.js'
import { getBrand, getProduct, getOS, getOSVersion, isOS } from './lib/brandAndOS.js'

export { isType, getType, isBrowser, getBrowser, getBrowserVersion, getBrand, getProduct, getOS, getOSVersion, isOS }

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
	// if (!isType('desktop') && isOS('windows') && getOSVersion() <= 8 && isBrowser('ie') && getBrowserVersion < 12) {
	// 	console.log(
	// 		"You appear to be on Windows 7 or 8 using Internet Explorer 11 or under. You also appear to be on a touchscreen device. We will assume you're actually on a desktop, since it's extremely unlikely you're on a tablet or mobile device using this specific operating system and browser."
	// 	)
	// 	D.type = 'desktop'
	// }

	var line = Array(70).join('-')
	var str = '\n' + line
	str += '\n AGENT:\n\n\t' + agent + '\n'
	str += '\n  Brand:\t\t\t' + getBrand()
	str += '\n  Product:\t\t\t' + getProduct()
	str += '\n  Type:\t\t\t\t' + getType()
	str += '\n  Os:\t\t\t\t' + getOS() + ' - ' + getOSVersion()
	str += '\n  Browser:\t\t\t' + getBrowser() + ' - ' + getBrowserVersion()
	const d = getDimensions()
	str += '\n  Dimensions: \t\t' + d.width + 'x' + d.height
	str += '\n  Orientation:\t\t' + getOrientation()
	// str += '\n  Pixel Ratio:\t\t' + D.pixelRatio

	str += '\n' + line
	console.log(str)
}
