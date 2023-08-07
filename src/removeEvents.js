export function removeEvents() {
	const eventElms = document.getElementsByClassName("event");
	while (eventElms.length > 0) {
		eventElms[0].parentNode.removeChild(eventElms[0]);
	}
}
