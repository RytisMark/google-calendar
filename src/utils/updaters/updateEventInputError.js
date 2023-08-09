export function updateEventInputError(invalid) {
	const endDateElm = document.querySelector(".end-date");

	if (invalid) {
		endDateElm.setCustomValidity("The end date can't be earlier than the start date!");
	} else {
		endDateElm.setCustomValidity("");
	}
	endDateElm.reportValidity();
}
