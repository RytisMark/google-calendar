export function getEvents() {
	const arrOfEvents = JSON.parse(localStorage.getItem("events") || "[]");
	return arrOfEvents;
}
