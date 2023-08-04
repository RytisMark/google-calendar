export function generateEventId(calendarInfo) {
	// console.log("hello", calendarInfo.eventIds);
	let eventIds = calendarInfo.eventIds;
	// console.log(eventIds);
	for (let i = 1; i <= eventIds.length + 1; i++) {
		if (eventIds.indexOf(i) == -1) {
			eventIds.push(i);
			// console.log(eventIds);
			return i;
		}
	}
}
