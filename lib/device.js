import { agentString } from '../index.js'
import { isOS, getOSVersion } from './brandAndOS.js'
import { isBrowser, getBrowserVersion } from './browser.js'

let type = undefined

/**	
	@method isDevice
	@param {string} type
		The device type as a string, eg: 'mobile', 'tablet', or 'desktop'
	@returns {boolean}
	@desc
		Shorthand for getDevice(), then check if is equal to string
		<codeblock>
			import { isDevice } from 'ad-useragent'
			const isDesktop = isDevice('desktop') // true
		</codeblock>
*/
export const isDevice = type => getDevice() === type

/**	
	@method getDevice
	@returns {string}
	@desc
		The device type as a string, possible values are: 
		<code>mobile</code>, 
		<code>tablet</code>, 
		<code>desktop</code>. 
		<br><br>
		Windows > 8 currently returns tablet, currently no way to differentiate from desktop. 
		<codeblock>
			import { getDevice } from 'ad-useragent'
			const deviceType = getDevice() // 'desktop'
		</codeblock>
*/
export const getDevice = () => {
	if (!type) {
		if (/(android|mobile)/gi.exec(agentString)) {
			type = 'mobile'
		} else if (/(tablet|touch)/gi.exec(agentString)) {
			type = 'tablet'
		} else if (/(ipad)/gi.exec(agentString)) {
			type = 'tablet'
		} else {
			type = 'desktop'
		}
	}
	return type
}

export const isDualGestureIE = () => {
	if (!isDevice('desktop') && isOS('windows') && getOSVersion() <= 8 && isBrowser('ie') && getBrowserVersion() < 12) {
		console.log(
			`You appear to be on Windows 7 or 8 using Internet Explorer 11 or under. 
			You also appear to be on a touchscreen device. We will assume you're actually 
			on a desktop, since it's extremely unlikely you're on a tablet or mobile device 
			using this specific operating system and browser.`
		)
		type = 'desktop'
	}
}
