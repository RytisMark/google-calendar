export function saveEventToLocalStorage(event) {
	localStorage.setItem(event.eventId, JSON.stringify(event));
}
