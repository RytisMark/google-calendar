import "./App.css";
import "./modals.css";
import { useState } from "react";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { Calendar } from "./components/Calendar/Calendar";
import { EventCreationModal } from "./components/EventCreationModal";
import { EventDescriptionModal } from "./components/EventDescriptionModal";
import { getEvents } from "./utils/getters/getEvents";
import { getExtEvents } from "./utils/getters/getExtEvents";
import { createEventObject } from "./utils/generators/createEventObject";
import { createExtendedEventObject } from "./utils/generators/createExtendedEventObject";
import { saveEventToStorage } from "./utils/updaters/saveEventToStorage";
import { updateEventEndDateInputError } from "./utils/updaters/updateEventEndDateInputError";
import { isCorrectDate } from "./utils/checkers/isCorrectDate";
import { removeEventFromStorage } from "./utils/updaters/removeEventFromStorage";
import { EventNoId } from "./types";

export default function App() {
  const [overviewDate, setOverviewDate] = useState(new Date());
  const [stateDate, setStateDate] = useState(new Date());
  const [extEvents, setExtEvents] = useState(getExtEvents(getEvents()));
  const [showMainMenu, setShowMainMenu] = useState(true);

  const [showEventCreationModal, setShowEventCreationModal] = useState(false);
  const [showEventDescriptionModal, setShowEventDescriptionModal] =
    useState(false);
  const [currentChosenEventId, setCurrentChosenEventId] = useState("");

  const toggleMainMenu = () => setShowMainMenu(!showMainMenu);
  const toggleEventCreationModal = () =>
    setShowEventCreationModal(!showEventCreationModal);
  const toggleEventDescriptionModal = () =>
    setShowEventDescriptionModal(!showEventDescriptionModal);

  const changeCurrentChosenEventId = (eventId: string) => {
    setCurrentChosenEventId(eventId);
    toggleEventDescriptionModal();
  };

  const handleCreateEventClick = (startDate: string, endDate: string) =>
    updateEventEndDateInputError(isCorrectDate(startDate, endDate));

  const handleDestroyEventClick = (eventId: string) => {
    toggleEventDescriptionModal();
    removeEventFromStorage(eventId, setExtEvents);
  };

  const handleCreateEventSubmit = (eventObj: EventNoId) => {
    const event = createEventObject(eventObj);
    const extEvent = createExtendedEventObject(event);
    saveEventToStorage(event, extEvent, setExtEvents);
    toggleEventCreationModal();
  };

  const goToToday = () => {
    setStateDate(new Date());
    setOverviewDate(new Date());
  };

  const goToPrevWeekView = () => {
    const newDate = new Date(stateDate.setDate(stateDate.getDate() - 7));
    setStateDate(newDate);
    setOverviewDate(newDate);
  };

  const goToNextWeekView = () => {
    const newDate = new Date(stateDate.setDate(stateDate.getDate() + 7));
    setStateDate(newDate);
    setOverviewDate(newDate);
  };

  const goToPrevMonthView = () => {
    setOverviewDate(
      new Date(overviewDate.getFullYear(), overviewDate.getMonth() - 1, 1),
    );
  };

  const goToNextMonthView = () => {
    setOverviewDate(
      new Date(overviewDate.getFullYear(), overviewDate.getMonth() + 1, 1),
    );
  };

  const changeToSelectedDay = (selectedDate: Date) => {
    setStateDate(selectedDate);
    setOverviewDate(selectedDate);
  };

  return (
    <>
      <Toolbar
        toggleMainMenu={toggleMainMenu}
        goToPrevWeekView={goToPrevWeekView}
        goToNextWeekView={goToNextWeekView}
        stateDate={stateDate}
        goToToday={goToToday}
      />
      <Calendar
        showMainMenu={showMainMenu}
        goToPrevMonthView={goToPrevMonthView}
        goToNextMonthView={goToNextMonthView}
        stateDate={stateDate}
        overviewDate={overviewDate}
        changeToSelectedDay={changeToSelectedDay}
        toggleEventCreationModal={toggleEventCreationModal}
        extEvents={extEvents}
        changeCurrentChosenEventId={changeCurrentChosenEventId}
      />
      <EventCreationModal
        showEventCreationModal={showEventCreationModal}
        handleCreateEventClick={handleCreateEventClick}
        handleCreateEventSubmit={handleCreateEventSubmit}
        toggleEventCreationModal={toggleEventCreationModal}
      />
      <EventDescriptionModal
        showEventDescriptionModal={showEventDescriptionModal}
        toggleEventDescriptionModal={toggleEventDescriptionModal}
        extEvents={extEvents}
        currentChosenEventId={currentChosenEventId}
        handleDestroyEventClick={handleDestroyEventClick}
      />
    </>
  );
}
