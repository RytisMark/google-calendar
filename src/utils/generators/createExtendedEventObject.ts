import { getEventTime } from "../getters/getEventTime.js";
import { Event, ExtendedEvent } from "../../types.js";

export function createExtendedEventObject(event: Event): ExtendedEvent {
	const startDate = new Date(event.startDateJson);
	const endDate = new Date(event.endDateJson);

	return {
		...event,
		startDate,
		endDate,
		eventTime: getEventTime(startDate, endDate),
		hours: startDate.getHours(),
		minutes: startDate.getMinutes(),
	};
}
