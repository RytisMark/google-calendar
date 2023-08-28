import { ExtendedEvent } from "../../types";
import { createEventElem } from "../generators/createEventElem";
import { getSameTableCellEvents } from "../getters/getSameTableCellEvents";

export function renderEvents(
	extEvents: ExtendedEvent[],
	columnIndex: number,
	cellIndex: number,
	stateDate: Date,
	changeCurrentChosenEventId: Function
) {
	const filteredEvents = getSameTableCellEvents(stateDate, columnIndex, cellIndex, extEvents);
	const eventElements = filteredEvents.map(extEvent => createEventElem(extEvent, extEvents, changeCurrentChosenEventId));
	return eventElements;
}
