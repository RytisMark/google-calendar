export function removeEventElements() {
	const eventElements = Array.from(document.getElementsByClassName("event"));
	eventElements.forEach(elem => elem.remove());
}
