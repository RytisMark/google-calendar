import "./App.css";
import "./modals.css";
import React, { useState, useEffect } from "react";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { Calendar } from "./components/Calendar/Calendar";
import { EventCreationModal } from "./components/EventCreationModal";
import { EventDescriptionModal } from "./components/EventDescriptionModal";
import { getEvents } from "./utils/getters/getEvents";
import { getExtEvents } from "./utils/getters/getExtEvents";
import { createEventObject } from "./utils/generators/createEventObject";
import { createExtendedEventObject } from "./utils/generators/createExtendedEventObject";
import { saveEventToStorage } from "./utils/updaters/saveEventToStorage";
import { renderEvent } from "./utils/updaters/renderEvent";
import { updateAllEventElementsStyles } from "./utils/updaters/updateAllEventElementsStyles";
import { updateEventEndDateInputError } from "./utils/updaters/updateEventEndDateInputError";
import { isCorrectDate } from "./utils/checkers/isCorrectDate";

export default function App() {
	const [overviewDate, setOverviewDate] = useState(new Date());
	const [stateDate, setStateDate] = useState(new Date());
	const [extEvents, setExtEvents] = useState(getExtEvents(getEvents()));
	const [showMainMenu, setShowMainMenu] = useState(true);
	const [showEventCreationModal, setShowEventCreationModal] = useState(false);
	const [showEventDescriptionModal, setShowEventDescriptionModal] = useState(false);
	const [currentChosenEventId, setCurrentChosenEventId] = useState("");

	const toggleMainMenu = () => setShowMainMenu(!showMainMenu);
	const toggleEventCreationModal = () => setShowEventCreationModal(!showEventCreationModal);
	const toggleEventDescriptionModal = () => setShowEventDescriptionModal(!showEventDescriptionModal);
	const changeCurrentChosenEventId = (eventId: string) => {
		setCurrentChosenEventId(eventId);
		toggleEventDescriptionModal();
	};
	const handleCreateEventClick = () => updateEventEndDateInputError(isCorrectDate());

	const handleCreateEventSubmit = (eventObj: { eventTitle: string; startDateJson: string; endDateJson: string; description: string }) => {
		// e.preventDefault();
		const event = createEventObject(eventObj);
		const extEvent = createExtendedEventObject(event);
		console.log(extEvent, "aaaaaaaaaaaa");
		// const extEvents = calendarInfo.extEvents;
		saveEventToStorage(event, extEvent, setExtEvents);
		// renderEvent(extEvent, setExtEvents); uztenka setExtEvents?
		// updateAllEventElementsStyles(extEvent, extEvents);
		toggleEventCreationModal();
		// modalFormElem.reset();
	};

	const goToToday = () => {
		setStateDate(new Date());
		setOverviewDate(new Date());
	};

	const goToPrevWeekView = () => {
		const newDate = new Date(new Date(stateDate).setDate(stateDate.getDate() - 7));
		setStateDate(newDate);
		setOverviewDate(newDate);
	};

	const goToNextWeekView = () => {
		const newDate = new Date(new Date(stateDate).setDate(stateDate.getDate() + 7));
		setStateDate(newDate);
		setOverviewDate(newDate);
	};

	const goToPrevMonthView = () => {
		setOverviewDate(new Date(overviewDate.getFullYear(), overviewDate.getMonth() - 1, 1));
	};

	const goToNextMonthView = () => {
		setOverviewDate(new Date(overviewDate.getFullYear(), overviewDate.getMonth() + 1, 1));
	};

	const changeToSelectedDay = (selectedDate: Date) => {
		setStateDate(selectedDate);
		setOverviewDate(selectedDate);
	};

	const toolbarProps = { toggleMainMenu, goToPrevWeekView, goToNextWeekView, stateDate, goToToday };

	const calendarProps = {
		showMainMenu,
		goToPrevMonthView,
		goToNextMonthView,
		stateDate,
		overviewDate,
		changeToSelectedDay,
		toggleEventCreationModal,
		extEvents,
		changeCurrentChosenEventId,
	};

	const eventCreationModalProps = {
		showEventCreationModal,
		handleCreateEventClick,
		handleCreateEventSubmit,
		toggleEventCreationModal,
	};

	const eventDescriptionModalProps = {
		showEventDescriptionModal,
		toggleEventDescriptionModal,
		extEvents,
		currentChosenEventId,
	};

	return (
		<>
			<Toolbar {...toolbarProps} />
			<Calendar {...calendarProps} />
			<EventCreationModal {...eventCreationModalProps} />
			<EventDescriptionModal {...eventDescriptionModalProps} />
		</>
	);
}
