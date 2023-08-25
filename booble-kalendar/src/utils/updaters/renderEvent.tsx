import { ExtendedEvent } from "../../types";
import { createEventElem } from "../generators/createEventElem";
import { getTableCell } from "../getters/getTableCell";
// export function renderEvent(extEvent: ExtendedEvent, setExtEvents: Function, changeCurrentChosenEventId: Function) {
export function renderEvent(
	extEvent: ExtendedEvent,
	extEvents: ExtendedEvent[],
	columnIndex: number,
	cellIndex: number,
	changeCurrentChosenEventId: Function
) {
	// const tableCell = getTableCell(extEvent);
	// tableCell.append(createEventElem(extEvent, extEvents));
	console.log("A");
	const extEventWeekday = (extEvent.startDate.getDay() || 7) - 1;
	const extEventHour = extEvent.startDate.getHours();
	if (columnIndex === extEventWeekday && cellIndex === extEventHour) {
		return createEventElem(extEvent, changeCurrentChosenEventId);
	} else {
		return null;
	}
}
