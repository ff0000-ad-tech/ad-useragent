import { agent } from './agent.js'

let type = undefined

export const isType = type => getType() === type

export function getType() {
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
