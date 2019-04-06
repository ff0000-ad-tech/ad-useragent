import { agent } from './agent.js'

const stored = {}

export const getBrand = () => available('brand')
export const getProduct = () => available('product')
export const getOS = () => available('os')
export const getOSVersion = () => available('osVersion')

export const isOS = type => getOS() === type

function available(key) {
	if (!stored[key]) getBrandAndOS()
	return stored[key]
}

function getBrandAndOS() {
	if (getApple()) return

	var android = /(android)\/?\s*([0-9\.]+)/gi.exec(agent)
	if (android) {
		assignMulti(android[1].toLowerCase())
		checkForSpecial('product', ['pixel 2'], agent.split('(')[1].split(')')[0])
		stored.osVersion = android[2]
		return
	}

	const microsoft = regexMicrosoft()
	if (microsoft) {
		stored.brand = 'microsoft'
		stored.os = 'windows'

		const ver = {
			'5.2': 'xp',
			'6.0': 'vista',
			'6.1': '7',
			'6.2': '8',
			'6.3': '8.1',
			'10.0': '10'
		}
		stored.osVersion = ver[microsoft[2]] || microsoft[2]

		stored.product = microsoft[1].toLowerCase()
		if (stored.product.match(/\snt/i)) {
			stored.product = 'pc'
		}
		return
	}

	// blackberry
	var blackberry = agent.match(/(blackberry|bb10|playbook)/i)
	if (blackberry) {
		assignMulti('blackberry')
		stored.osVersion = /(version)\/?\s*([0-9\.]+)/gi.exec(agent)[2]
	}
}

// abstracted out for use in browser.js for fallback 'os'
export const regexMicrosoft = () => /(windows\snt\s|windows\sphone)\/?\s*([0-9\.]+)/gi.exec(agent)

// abstracted out for use in browser.js for fallback 'os'
export function getApple() {
	const apple = agent.match(/ip(hone|od|ad)|mac/gi)
	if (apple) {
		stored.brand = 'apple'
		stored.product = apple[0].toLowerCase()
		var appleOS = /(OS\s)(\X\s|)([\d\.\_]+)/gi.exec(agent)
		stored.os = appleOS[2] == '' ? 'ios' : 'osx'
		stored.osVersion = appleOS[3].replace(/\_/g, '.')
		return stored
	}
	return false
}

//
function assignMulti(value) {
	stored.brand = stored.product = stored.os = value
}

// TODO - retest this logic
function checkForSpecial(targetParam, array, focus) {
	var param
	for (var i = 0; i < array.length; i++) {
		param = array[i].toLowerCase()
		if (focus.match(new RegExp(param, 'i'))) {
			stored[targetParam] = param
			break
		}
	}
}
