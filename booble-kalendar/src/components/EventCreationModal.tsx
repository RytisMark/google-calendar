export function EventCreationModal() {
	return (
		<div className="modal non-displayed">
			<form className="modal-form">
				<button className="close round-btn" type="reset">
					╳
				</button>
				<input type="text" className="event-title" placeholder="Add title" autoFocus required />
				<p className="start-date-text">Start date:</p>
				<input className="start-date" type="datetime-local" max="3000-01-01T00:00" required />
				<p className="end-date-text">End date:</p>
				<input className="end-date" type="time" required />
				<textarea className="description" placeholder="Add description" rows={4} />
				<div className="submission-container">
					<button className="cancel square-btn" type="reset">
						Cancel
					</button>
					<button className="save square-btn" type="submit">
						Save
					</button>
				</div>
			</form>
		</div>
	);
}
