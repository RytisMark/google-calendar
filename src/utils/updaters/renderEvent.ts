import { ExtendedEvent } from "../../types.js";
import { createEventElem } from "../generators/createEventElem.js";
import { getTableCell } from "../getters/getTableCell.js";

export function renderEvent(extEvent: ExtendedEvent, extEvents: ExtendedEvent[]) {
	const tableCell = getTableCell(extEvent);
	tableCell.append(createEventElem(extEvent, extEvents));
}
