export function getEvents() {
	return JSON.parse(localStorage.getItem("events") || "[]");
}
