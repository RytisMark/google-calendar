export function saveEventToStorage(calendarInfo, eventObj) {
	const events = calendarInfo.events;
	events.push(eventObj);
	localStorage.setItem("events", JSON.stringify(events));
}
