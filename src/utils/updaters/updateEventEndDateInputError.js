export function updateEventEndDateInputError(invalid) {
	const endDateElem = document.querySelector(".end-date");

	if (invalid) {
		endDateElem.setCustomValidity("The end date can't be earlier than the start date!");
	} else {
		endDateElem.setCustomValidity("");
	}
	endDateElem.reportValidity();
}
