import { ExtendedEvent } from "../../types";
// import { eventLogic } from "./eventLogic";
import { updateEventElementStyle } from "../updaters/updateEventElementStyle";

export function createEventElem(extEvent: ExtendedEvent, changeCurrentChosenEventId: Function) {
	const { eventId, eventTitle, eventTime } = extEvent;

	// const eventElem = document.createElement("div");
	// eventElem.classList.add("event");
	// eventElem.setAttribute("data-event-id", eventId);
	// updateEventElementStyle(eventElem, extEvent, extEvents);

	const titleElem = <span style={{ fontWeight: "bold" }}>{eventTitle}</span>;
	const timeElem = <span>{eventTime}</span>;
	// const titleElem = document.createElement("span");
	// const timeElem = document.createElement("span");
	// titleElem.textContent = `${eventTitle}, `;
	// titleElem.style.fontWeight = "bold";
	// timeElem.textContent = eventTime;

	// eventElem.append(titleElem, timeElem);
	const eventElem = (
		<div
			className="event"
			data-event-id={eventId}
			onClick={e => {
				changeCurrentChosenEventId(eventId);
				// eventLogic(e.target, extEvent, extEvents);
				e.stopPropagation();
			}}
		>
			{titleElem}
			{timeElem}
		</div>
	);

	// eventElem.addEventListener("click", e => {
	// 	eventLogic(eventElem, extEvent, extEvents);
	// 	e.stopPropagation();
	// });

	return eventElem;
}
