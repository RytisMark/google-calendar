import { renderEvent } from "./renderEvent";
import { isSameWeek } from "../checkers/isSameWeek";
import { CalendarInfo, ExtendedEvent } from "../../types";

export function renderEvents({
	extEvents,
	columnIndex,
	cellIndex,
	stateDate,
	changeCurrentChosenEventId,
}: {
	extEvents: ExtendedEvent[];
	columnIndex: number;
	cellIndex: number;
	stateDate: Date;
	changeCurrentChosenEventId: Function;
}) {
	// const { stateDate, extEvents } = calendarInfo;
	const eventElements = extEvents.map(extEvent => {
		const startDate = extEvent.startDate;
		// console.log(extEvent);
		// console.log(startDate, stateDate);
		if (isSameWeek(stateDate, startDate)) {
			return renderEvent(extEvent, extEvents, columnIndex, cellIndex, changeCurrentChosenEventId);
		}
	});

	return eventElements;
}
