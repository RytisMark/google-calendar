import { createEventElem } from "../generators/createEventElem.js";
import { getTableCell } from "../getters/getTableCell.js";

export function renderEvent(extEvent, calendarInfo) {
	const tableCell = getTableCell(extEvent);
	tableCell.append(createEventElem(extEvent, calendarInfo));
}
