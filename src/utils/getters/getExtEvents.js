import { createExtendedEventObject } from "../generators/createExtendedEventObject.js";

export function getExtEvents(events) {
	return events.map(event => createExtendedEventObject(event));
}
