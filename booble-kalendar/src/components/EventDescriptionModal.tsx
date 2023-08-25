import { ExtendedEvent } from "../types";

export function EventDescriptionModal(props: {
	showEventDescriptionModal: boolean;
	toggleEventDescriptionModal: Function;
	extEvents: ExtendedEvent[];
}) {
	if (props.showEventDescriptionModal) {
		return (
			<div className="event-desc-modal">
				<div className="desc-modal-controls-container">
					<button className="trash round-btn fa fa-trash" onClick={() => props.toggleEventDescriptionModal()} />
					<button className="close round-btn" onClick={() => props.toggleEventDescriptionModal()}>
						╳
					</button>
				</div>
				<div className="event-desc-title">Event name</div>
				<div className="event-desc-time">Event time</div>
				<div className="event-desc">description</div>
			</div>
		);
	} else {
		return null;
	}
}
