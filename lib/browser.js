import { agentString } from '../index.js'
import { regexMicrosoft, getApple } from './brandAndOS.js'

let browser = undefined
let version = undefined

/**	
	@method isBrowser
	@param {string} name
		The browser name as a string, eg: 'chrome', 'ie'
	@returns {boolean}
	@desc
		Shorthand for getBrowser(), then check if is equal to string
		<codeblock>
			import { isBrowser } from 'ad-useragent'
			isBrowser('ie') // false
		</codeblock>
*/
export const isBrowser = name => getBrowser() === name

/**	
	@method getBrowser
	@returns {string}
	@desc
		Brand of browser, eg: chrome, safari, ie, firefox, edge
		<codeblock>
			import { getBrowser } from 'ad-useragent'
			getBrowser() // 'chrome'
		</codeblock>
*/
export const getBrowser = () => {
	if (browser) return browser
	var browserMatches = /(edge(?=\/))\/?\s*([0-9\.]+)/i.exec(agentString) // check for edge first

	// if it's not edge, check for other common browsers
	if (!browserMatches) {
		browserMatches = agentString.match(
			/(fban|fbav|opera|chrome|crios|safari|firefox|msie|trident|samsungbrowser(?=\/))\/?\s*([0-9\.]+)/i
		)
	}

	// if we checked for common browsers and got NOTHING in return, let's just use the device's default browser
	if (!browserMatches || browserMatches.length < 3) {
		console.log('we received no browser data, so we are setting it to the default of the device')
		version = 'os-default'

		const apple = getApple()
		if (apple && apple.os === 'ios') {
			browser = 'safari'
		} else if (regexMicrosoft()) {
			browser = 'trident'
		} else {
			browser = 'chrome'
		}

		return browser
	}

	browser = browserMatches[1].toLowerCase()
	version = browserMatches[2]

	switch (browser) {
		case 'trident':
			// Check for desktop IE 10
			var versionMatch = /\brv:+(\d+)/g.exec(agentString)
			if (versionMatch) version = versionMatch[1]
		case 'msie':
			browser = 'ie'
			break
		case 'crios':
			browser = 'chrome'
			break
		case 'safari':
			var versionMatch = agentString.match(/\sversion\/([0-9\.]+)\s/i)
			if (versionMatch) version = versionMatch[1]
			break
		case 'chrome':
			// check for Opera
			var versionMatch = agentString.match(/\b(OPR)\/([0-9\.]+)/i)
			if (versionMatch) {
				browser = 'opera'
				version = versionMatch[2]
			}
			break
	}
	return browser
}

/**		
	@method getBrowserVersion
	@returns {string}
	@desc
		Version of the browser. 
		<codeblock>
			import { getBrowserVersion } from 'ad-useragent'
			getBrowserVersion() // '73.0.3683.103'
		</codeblock>
*/
export const getBrowserVersion = () => {
	if (!version) getBrowser()
	return version
}
