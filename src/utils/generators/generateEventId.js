export function generateEventId(calendarInfo) {
	return uuidv4();
	let eventIds = calendarInfo.eventIds;
	for (let i = 1; i <= eventIds.length + 1; i++) {
		if (eventIds.indexOf(i) == -1) {
			eventIds.push(i);
			return i;
		}
	}
}
