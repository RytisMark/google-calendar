import { ExtendedEvent } from "../../types.js";

export function getFilteredExtEvents(filterStartDate: Date, extEvents: ExtendedEvent[]): ExtendedEvent[] {
	const filteredExtEvents = extEvents.filter(extEvent => {
		const date1 = new Date(extEvent.startDate).setMinutes(0);
		const date2 = new Date(filterStartDate).setMinutes(0);
		return date1 === date2;
	});

	filteredExtEvents.sort((a, b) => {
		if (a.endDate.getTime() - a.startDate.getTime() >= b.endDate.getTime() - b.startDate.getTime()) return -1;
		else return 1;
	});

	return filteredExtEvents;
}
