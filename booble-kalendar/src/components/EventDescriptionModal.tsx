export function EventDescriptionModal() {
	return (
		<div className="event-desc-modal non-displayed">
			<div className="desc-modal-controls-container">
				<button className="trash round-btn fa fa-trash" />
				<button className="close round-btn">╳</button>
			</div>
			<div className="event-desc-title">Event name</div>
			<div className="event-desc-time">Event time</div>
			<div className="event-desc">description</div>
		</div>
	);
}
