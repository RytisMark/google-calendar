import { CalendarInfo } from "../../types";

export function getEventLeftPos(eventElem: HTMLDivElement, startDate: Date, calendarInfo: CalendarInfo): number {
	const extEvents = calendarInfo.extEvents;
	let filteredExtEvents = extEvents.filter(extEvent => {
		const date1 = new Date(extEvent.startDate).setMinutes(0);
		const date2 = new Date(startDate).setMinutes(0);
		return date1 === date2;
	});

	// filteredExtEvents.sort((a, b) => {
	// 	if (a.startDate >= b.startDate && a.endDate <= b.endDate) return -1;
	// 	else return 1;
	// });

	const eventsLength = filteredExtEvents.length;
	const index = filteredExtEvents.findIndex(extEvent => eventElem.getAttribute("data-event-id") === extEvent.eventId);

	const columnWidth = 100 / (eventsLength + 1);

	return index * columnWidth;
}
