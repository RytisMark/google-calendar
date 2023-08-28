import { ExtendedEvent } from "../types";

export function EventDescriptionModal(props: {
	showEventDescriptionModal: boolean;
	toggleEventDescriptionModal: Function;
	extEvents: ExtendedEvent[];
	currentChosenEventId: string;
	handleDestroyEventClick: Function;
}) {
	if (props.showEventDescriptionModal) {
		const currEvent = props.extEvents.filter(event => event.eventId === props.currentChosenEventId)[0];
		return (
			<div className="event-desc-modal" data-event-id={props.currentChosenEventId}>
				<div className="desc-modal-controls-container">
					<button className="trash round-btn fa fa-trash" onClick={() => props.handleDestroyEventClick(currEvent.eventId)} />
					<button className="close round-btn" onClick={() => props.toggleEventDescriptionModal()}>
						╳
					</button>
				</div>
				<div className="event-desc-title">{currEvent.eventTitle}</div>
				<div className="event-desc-time">{currEvent.eventTime}</div>
				<div className="event-desc">{currEvent.description}</div>
			</div>
		);
	} else {
		return null;
	}
}
