import { ExtendedEvent } from "../../types";
import { getEventStyle } from "../getters/getEventStyle";

export function createEventElem(extEvent: ExtendedEvent, extEvents: ExtendedEvent[], changeCurrentChosenEventId: Function) {
	const { eventId, eventTitle, eventTime } = extEvent;

	const eventStyle = getEventStyle(extEvent, extEvents);
	const titleElem = <span style={{ fontWeight: "bold" }}>{eventTitle}</span>;
	const timeElem = <span>{eventTime}</span>;

	return (
		<div
			className="event"
			data-event-id={eventId}
			key={eventId}
			style={{ ...eventStyle }}
			onClick={e => {
				changeCurrentChosenEventId(eventId);
				e.stopPropagation();
			}}
		>
			{titleElem}, {timeElem}
		</div>
	);
}
