export function checkLimits() {
	const startDateTxt = document.querySelector(".start-date").value;
	const endHourTxt = document.querySelector(".end-date").value;
	const endDateTxt = startDateTxt.slice(0, -5) + endHourTxt;
	const endDateElm = document.querySelector(".end-date");
	let isValidDate = false;

	if (endDateTxt < startDateTxt) {
		endDateElm.setCustomValidity("The end date can't be earlier than the start date!");
		endDateElm.reportValidity();
		isValidDate = false;
	} else {
		endDateElm.setCustomValidity("");
		endDateElm.reportValidity();
		isValidDate = true;
	}

	return isValidDate;
}
