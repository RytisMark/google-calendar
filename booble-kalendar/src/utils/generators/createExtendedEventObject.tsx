import { getEventTime } from "../getters/getEventTime";
import { Event, ExtendedEvent } from "../../types";

export function createExtendedEventObject(event: Event): ExtendedEvent {
	const startDate = new Date(event.startDateJson);
	const endDate = new Date(event.endDateJson);

	console.log(event);

	return {
		...event,
		startDate,
		endDate,
		eventTime: getEventTime(startDate, endDate),
		hours: startDate.getHours(),
		minutes: startDate.getMinutes(),
	};
}
