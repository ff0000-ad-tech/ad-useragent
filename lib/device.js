import { agent } from '@ff0000-ad-tech/ad-useragent/lib/agent'

let type = undefined

export const isDevice = type => getDevice() === type

export function getDevice() {
	if (!type) {
		if (/(android|mobile)/gi.exec(agent)) {
			type = 'mobile'
		} else if (/(tablet|touch)/gi.exec(agent)) {
			type = 'tablet'
		} else if (/(ipad)/gi.exec(agent)) {
			type = 'tablet'
		} else {
			type = 'desktop'
		}
	}
	return type
}
