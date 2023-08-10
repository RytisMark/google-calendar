export function removeEventFromStorage(eventId, calendarInfo) {
	let eventsArr = JSON.parse(localStorage.getItem("events"));

	for (let i = 0; i < eventsArr.length; i++) {
		const event = eventsArr[i];
		if (event.eventId === eventId) {
			eventsArr.splice(i, 1);
			calendarInfo.events = eventsArr;
			eventsArr = JSON.stringify(eventsArr);
			localStorage.setItem("events", eventsArr);
			break;
		}
	}
}
