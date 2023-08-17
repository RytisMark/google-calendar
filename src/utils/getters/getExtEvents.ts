import { createExtendedEventObject } from "../generators/createExtendedEventObject.js";
import { Event } from "../../types.js";

export function getExtEvents(events: Event[]) {
	return events.map((event: Event) => createExtendedEventObject(event));
}
