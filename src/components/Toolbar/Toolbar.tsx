import { ToolbarProps } from "../../types";
import { DateDisplay } from "../DateDisplay";
import { NavigationArrows } from "../NavigationArrows";
import { MainMenuButton } from "./MainMenuButton";

export function Toolbar(props: ToolbarProps) {
	return (
		<>
			<header className="toolbar">
				<MainMenuButton toggleMainMenu={props.toggleMainMenu} />
				<h1 className="calendar-name">Booble Kalendar</h1>
				<button className="today-btn" onClick={() => props.goToToday()}>
					Today
				</button>
				<NavigationArrows classList="nav-arrow" goToPrevView={props.goToPrevWeekView} goToNextView={props.goToNextWeekView} />
				<DateDisplay classList={"today-date"} selectedDate={props.stateDate} />
			</header>
		</>
	);
}
