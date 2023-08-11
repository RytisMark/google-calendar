export function isCorrectDate() {
	const startDateStr = document.querySelector(".start-date").value;
	const endHourStr = document.querySelector(".end-date").value;
	const endDateStr = startDateStr.slice(0, -5) + endHourStr;

	return endDateStr < startDateStr;
}
