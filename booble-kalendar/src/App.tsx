import "./App.css";
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

	const goToPrevWeekView = () => {
		const tempDate = new Date();
		setStateDate(new Date(tempDate.setDate(stateDate.getDate() - 7)));
		setOverviewDate(stateDate);
	};

	const goToNextWeekView = () => {
		// updateCalendar(calendarInfo);
		const tempDate = new Date();
		setStateDate(new Date(tempDate.setDate(stateDate.getDate() + 7)));
		setOverviewDate(stateDate);
	};

	const goToPrevMonthView = () => {
		const tempDate = new Date();
		setOverviewDate(new Date(tempDate.setMonth(overviewDate.getMonth() - 1, 1)));
	};

	const goToNextMonthView = () => {
		const tempDate = new Date();
		setOverviewDate(new Date(tempDate.setMonth(overviewDate.getMonth() + 1, 1)));
	};

	const goToToday = () => {
		setStateDate(new Date());
		setOverviewDate(new Date());
	};

	const toggleMainMenu = () => setShowMainMenu(!showMainMenu);

	const toolbarProps = { toggleMainMenu, goToPrevWeekView, goToNextWeekView, stateDate, goToToday };
	const calendarProps = { showMainMenu, goToPrevMonthView, goToNextMonthView, overviewDate };

	return (
		<>
			<Toolbar {...toolbarProps} />
			<Calendar {...calendarProps} />
			<EventCreationModal />
			<EventDescriptionModal />
		</>
	);
}
