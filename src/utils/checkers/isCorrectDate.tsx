export function isCorrectDate() {
	const startDateStr = (document.querySelector(".start-date") as HTMLInputElement).value;
	const endHourStr = (document.querySelector(".end-date") as HTMLInputElement).value;
	const endDateStr = startDateStr.slice(0, -5) + endHourStr;

	return endDateStr < startDateStr;
}
