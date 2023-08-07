export function isSameWeek(currDate, eventDate) {
	const dayOfTheWeekCurrDate = currDate.getDay() || 7;
	const dayOfTheWeekEventDate = eventDate.getDay() || 7;

	const currDateMonTime = new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate() - dayOfTheWeekCurrDate + 1).getTime();
	const eventDateMonTime = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate() - dayOfTheWeekEventDate + 1).getTime();

	return currDateMonTime === eventDateMonTime;
}
