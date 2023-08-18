export function getEventZIndex(tableCell: HTMLDivElement, eventElem: HTMLDivElement): number {
	const lastEventElem = tableCell.lastElementChild as HTMLDivElement;
	let zIndex;

	if (lastEventElem === null) {
		zIndex = parseInt(getComputedStyle(eventElem).zIndex);
	} else {
		zIndex = parseInt(getComputedStyle(lastEventElem).zIndex) + 1;
	}

	return zIndex;

	// const lastEventElem = tableCell.lastElementChild as HTMLDivElement;
	// let zIndex;

	// if (lastEventElem === null) {
	// 	zIndex = parseInt(getComputedStyle(eventElem).zIndex);
	// } else {
	// 	zIndex = parseInt(getComputedStyle(lastEventElem).zIndex) + 1;
	// }

	// return zIndex;
	// const extEvents = calendarInfo.extEvents;
	// let filteredExtEvents = extEvents.filter(extEvent => {
	// 	const date1 = new Date(extEvent.startDate).setMinutes(0);
	// 	const date2 = new Date(startDate).setMinutes(0);
	// 	return date1 === date2;
	// });

	// filteredExtEvents.sort((a, b) => {
	// 	if (a.startDate >= b.startDate && a.endDate <= b.endDate) return -1;
	// 	else return 1;
	// });

	// const eventsLength = filteredExtEvents.length;
	// const index = filteredExtEvents.findIndex(extEvent => eventElem.getAttribute("data-event-id") === extEvent.eventId);
}
