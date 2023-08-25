import { useState } from "react";

export function EventCreationModal(props: {
	showEventCreationModal: boolean;
	handleCreateEventClick: Function;
	handleCreateEventSubmit: Function;
	toggleEventCreationModal: Function;
}) {
	const [eventTitle, setEventTitle] = useState("");
	const [startDateJson, setStartDateJson] = useState("");
	// const [eventEndHourJson, setEventEndHourJson] = useState("");
	const [endDateJson, setEndDateJson] = useState("");
	const [description, setDescription] = useState("");

	const event = { eventTitle, startDateJson, endDateJson, description };

	if (props.showEventCreationModal) {
		return (
			<div className="modal">
				<form
					className="modal-form"
					onSubmit={e => {
						e.preventDefault();
						props.handleCreateEventSubmit(event);
					}}
				>
					<button className="close round-btn" type="reset" onClick={() => props.toggleEventCreationModal()}>
						╳
					</button>
					<input
						className="event-title"
						type="text"
						placeholder="Add title"
						autoFocus
						required
						onChange={e => setEventTitle(e.target.value)}
						value={eventTitle}
					/>
					<p className="start-date-text">Start date:</p>
					<input
						className="start-date"
						type="datetime-local"
						max="3000-01-01T00:00"
						required
						onChange={e => setStartDateJson(e.target.value)}
						value={startDateJson}
					/>
					<p className="end-date-text">End date:</p>
					<input
						className="end-date"
						type="time"
						required
						onChange={e => {
							// setEventEndHourJson(e.target.value);
							setEndDateJson(`${startDateJson.slice(0, -5) + e.target.value}`);
						}}
						// value={eventEndHourJson}
					/>
					<textarea
						className="description"
						placeholder="Add description"
						rows={4}
						onChange={e => setDescription(e.target.value)}
						value={description}
					/>
					<div className="submission-container">
						<button className="cancel square-btn" type="reset" onClick={() => props.toggleEventCreationModal()}>
							Cancel
						</button>
						<button className="save square-btn" type="submit" onClick={() => props.handleCreateEventClick()}>
							Save
						</button>
					</div>
				</form>
			</div>
		);
	} else {
		return null;
	}
}
