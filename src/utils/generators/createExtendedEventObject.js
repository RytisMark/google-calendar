import { getEventTime } from "../getters/getEventTime.js";

export function createExtendedEventObject(event) {
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
