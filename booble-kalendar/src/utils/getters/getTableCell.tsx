import { ExtendedEvent } from "../../types";

export function getTableCell(extEvent: ExtendedEvent): HTMLDivElement {
	const { startDate, hours } = extEvent;
	const columnNum = startDate.getDay() || 7;
	const weekViewTable = document.querySelector(".week-view-table") as HTMLDivElement;
	const tableCol = weekViewTable.querySelector(`:nth-child(${columnNum} of .table-column)`) as HTMLDivElement;

	return tableCol.querySelector(`:nth-child(${hours + 1})`) as HTMLDivElement;
}
