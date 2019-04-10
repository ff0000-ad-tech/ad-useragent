import { agentString } from '../index.js'

const stored = {}

/**	
	@method getBrand
	@returns {string}
	@desc
		Brand of device, possible values are: 
		<code>microsoft</code>, 
		<code>apple</code>, 
		<code>android</code>, 
		<code>rim</code>, 
		<code>unknown</code>. 
		<codeblock>
			import { getBrand } from 'ad-useragent'
			getBrand() // 'apple'
		</codeblock>
*/
export const getBrand = () => available('brand')

/**	
	@method getProduct
	@returns {string}
	@desc
		Brand subtype, possible values are?: 
		<code>windows phone</code>, 
		<code>windows</code>, 
		<code>iphone</code>, 
		<code>ipad</code>, 
		<code>ipod</code>, 
		<code>mac</code>, 
		<code>android</code>, 
		<code>pixel 2</code>, 
		<code>blackberry</code>. 
		<codeblock>
			import { getProduct } from 'ad-useragent'
			getProduct() // 'mac'
		</codeblock>
*/
export const getProduct = () => available('product')

/**		
	@method getOS
	@returns {string}
	@desc
		Operating system of device.
		<codeblock>
			import { getOS } from 'ad-useragent'
			getOS() // 'osx'
		</codeblock>
*/
export const getOS = () => available('os')

/**		
	@method getOSVersion
	@returns {string}
	@desc
		Version of operating system of device.
		<codeblock>
			import { getOSVersion } from 'ad-useragent'
			getOSVersion() // '10.12.6'
		</codeblock>
*/
export const getOSVersion = () => available('osVersion')

/**	
	@method isOS
	@returns {boolean}
	@desc
		Shorthand for getOS(), then check if is equal to string
		<codeblock>
			import { isOS } from 'ad-useragent'
			isDevice('ios') // false
		</codeblock>
*/
export const isOS = type => getOS() === type

function available(key) {
	if (!stored[key]) getBrandAndOS()
	return stored[key]
}

function getBrandAndOS() {
	if (getApple()) return

	var android = /(android)\/?\s*([0-9\.]+)/gi.exec(agentString)
	if (android) {
		assignMulti(android[1].toLowerCase())
		checkForSpecial('product', ['pixel 2'], agentString.split('(')[1].split(')')[0])
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
	var blackberry = agentString.match(/(blackberry|bb10|playbook)/i)
	if (blackberry) {
		assignMulti('blackberry')
		stored.osVersion = /(version)\/?\s*([0-9\.]+)/gi.exec(agentString)[2]
	}
}

// abstracted out for use in browser.js for fallback 'os'
export const regexMicrosoft = () => /(windows\snt\s|windows\sphone)\/?\s*([0-9\.]+)/gi.exec(agentString)

// abstracted out for use in browser.js for fallback 'os'
export const getApple = () => {
	const apple = agentString.match(/ip(hone|od|ad)|mac/gi)
	if (apple) {
		stored.brand = 'apple'
		stored.product = apple[0].toLowerCase()
		var appleOS = /(OS\s)(\X\s|)([\d\.\_]+)/gi.exec(agentString)
		stored.os = appleOS[2] == '' ? 'ios' : 'osx'
		stored.osVersion = appleOS[3].replace(/\_/g, '.')
		return stored
	}
	return false
}

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
