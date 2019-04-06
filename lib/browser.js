import { agent } from './agent.js'
import { regexMicrosoft, getApple } from './brandAndOS.js'

let browser = undefined
let version = undefined

// Pass in string: 'ie' and get a Boolean return for test
// getBrowser() === 'ie' ~> isBrowser('ie')
export const isBrowser = name => getBrowser() === name

export function getBrowser() {
	if (browser) return browser
	var browserMatches = /(edge(?=\/))\/?\s*([0-9\.]+)/i.exec(agent) // check for edge first

	// if it's not edge, check for other common browsers
	if (!browserMatches) {
		browserMatches = agent.match(
			/(fban|fbav|opera|chrome|crios|safari|firefox|msie|trident(?=\/))\/?\s*([0-9\.]+)/i
		)
	}

	// if we checked for common browsers and got NOTHING in return, let's just use the device's default browser
	if (!browserMatches || browserMatches.length < 3) {
		console.log('we received no browser data, so we are setting it to the default of the device')
		// TODO - dependency
		version = 'os-default'

		const apple = getApple()
		if (apple && apple.os === 'ios') {
			browser = 'safari'
		} else if (regexMicrosoft()) {
			browser = 'trident'
		} else {
			browser = 'chrome'
		}
		// switch (D.os) {
		// 	case 'ios':
		// 		browser = 'safari'
		// 		break
		// 	case 'windows':
		// 		browser = 'trident'
		// 		break
		// 	default:
		// 		browser = 'chrome'
		// }

		return browser
	}

	browser = browserMatches[1].toLowerCase()
	version = browserMatches[2]

	switch (browser) {
		case 'trident':
			// Check for desktop IE 10
			var versionMatch = /\brv:+(\d+)/g.exec(agent)
			if (versionMatch) version = versionMatch[1]
		case 'msie':
			browser = 'ie'
			break
		case 'crios':
			browser = 'chrome'
			break
		case 'safari':
			var versionMatch = agent.match(/\sversion\/([0-9\.]+)\s/i)
			if (versionMatch) version = versionMatch[1]
			break
		case 'chrome':
			// check for Opera
			var versionMatch = agent.match(/\b(OPR)\/([0-9\.]+)/i)
			if (versionMatch) {
				browser = 'opera'
				version = versionMatch[2]
			}
			break
	}
	return browser
}

export function getBrowserVersion() {
	if (!version) getBrowser()
	return version
}
