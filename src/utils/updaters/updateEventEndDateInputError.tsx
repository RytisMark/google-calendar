export function updateEventEndDateInputError(invalid: boolean) {
	const endDateElem = document.querySelector(".end-date") as HTMLInputElement;

	if (invalid) {
		endDateElem.setCustomValidity("The end date can't be earlier than the start date!");
	} else {
		endDateElem.setCustomValidity("");
	}
	endDateElem.reportValidity();
}
