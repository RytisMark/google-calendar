export function removeEvents() {
	const eventElms = document.getElementsByClassName("event");
	while (eventElms.length > 0) {
		const event = eventElms[0];
		event.parentNode.removeChild(event);
	}
}
