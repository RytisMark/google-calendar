import "./App.css";
import "./modals.css";
import React, { useState, useEffect } from "react";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { Calendar } from "./components/Calendar/Calendar";
import { EventCreationModal } from "./components/EventCreationModal";
import { EventDescriptionModal } from "./components/EventDescriptionModal";
import { getEvents } from "./utils/getters/getEvents";
import { getExtEvents } from "./utils/getters/getExtEvents";

export default function App() {
	const [overviewDate, setOverviewDate] = useState(new Date());
	const [stateDate, setStateDate] = useState(new Date());
	const [extEvents, setExtEvents] = useState(getExtEvents(getEvents()));
	const [showMainMenu, setShowMainMenu] = useState(true);
	const [showEventCreationModal, setShowEventCreationModal] = useState(false);
	const [showEventDescriptionModal, setShowEventDescriptionModal] = useState(false);

	const toggleMainMenu = () => setShowMainMenu(!showMainMenu);
	const toggleEventCreationModal = () => setShowEventCreationModal(!showEventCreationModal);

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
	};
	const eventCreationModalProps = {
		showEventCreationModal,
	};

	return (
		<>
			<Toolbar {...toolbarProps} />
			<Calendar {...calendarProps} />
			<EventCreationModal {...eventCreationModalProps} />
			<EventDescriptionModal />
		</>
	);
}
