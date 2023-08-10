export function removeEventElems() {
	const eventElems = document.getElementsByClassName("event");
	while (eventElems.length > 0) {
		const eventElem = eventElems[0];
		eventElem.parentNode.removeChild(eventElem);
	}
}
