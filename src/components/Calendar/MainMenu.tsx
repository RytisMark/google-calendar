import { MainMenuProps } from "../../types";
import { DateDisplay } from "../DateDisplay";
import { NavigationArrows } from "../NavigationArrows";
import { OverviewMonthTable } from "./OverviewMonthTable";

export function MainMenu(props: MainMenuProps) {
  const weekdays = ["M", "T", "W", "T", "F", "S", "S"];
  if (props.showMainMenu) {
    return (
      <aside className="main-menu">
        <button
          className="create-event-btn"
          onClick={() => props.toggleEventCreationModal()}
        >
          Create Event
        </button>
        <section className="month-overview">
          <header className="overview-header">
            <DateDisplay
              classList="overview-date"
              selectedDate={props.overviewDate}
            />
          </header>
          <NavigationArrows
            classList="nav-arrow-small"
            goToPrevView={props.goToPrevMonthView}
            goToNextView={props.goToNextMonthView}
          />
          <div className="overview-weekdays">
            {weekdays.map((day) => (
              <span>{day}</span>
            ))}
          </div>
          <OverviewMonthTable
            stateDate={props.stateDate}
            overviewDate={props.overviewDate}
            changeToSelectedDay={props.changeToSelectedDay}
          />
        </section>
      </aside>
    );
  } else {
    return null;
  }
}
