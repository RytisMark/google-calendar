export function getEventIds() {
	const arrOfStrIds = Object.keys(localStorage);
	const arrOfIds = arrOfStrIds.map(str => parseInt(str));
	return arrOfIds;
}
