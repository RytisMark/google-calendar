import { CalendarProps } from "../../types";
import { DateDisplay } from "../DateDisplay";
import { NavigationArrows } from "../NavigationArrows";
import { OverviewMonthTable } from "./OverviewMonthTable";

export function MainMenu(props: CalendarProps) {
	if (props.showMainMenu) {
		return (
			<aside className="main-menu">
				<button className="create-event-btn" onClick={() => props.toggleEventCreationModal()}>
					Create Event
				</button>
				<section className="month-overview">
					<header className="overview-header">
						<DateDisplay selectedDate={props.overviewDate} classList="overview-date" />
					</header>
					<NavigationArrows classList="nav-arrow-small" goToPrevView={props.goToPrevMonthView} goToNextView={props.goToNextMonthView} />
					<div className="overview-weekdays">
						<span>M</span>
						<span>T</span>
						<span>W</span>
						<span>T</span>
						<span>F</span>
						<span>S</span>
						<span>S</span>
					</div>
					<OverviewMonthTable stateDate={props.stateDate} overviewDate={props.overviewDate} changeToSelectedDay={props.changeToSelectedDay} />
				</section>
			</aside>
		);
	} else {
		return null;
	}
}
