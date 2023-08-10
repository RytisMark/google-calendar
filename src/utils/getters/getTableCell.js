export function getTableCell(extEvent) {
	const { startDate, hours } = extEvent;
	const columnNum = startDate.getDay() || 7;
	const weekViewTable = document.querySelector(".week-view-table");
	const tableCol = weekViewTable.querySelector(`:nth-child(${columnNum} of .table-column)`);

	return tableCol.querySelector(`:nth-child(${hours + 1})`);
}
