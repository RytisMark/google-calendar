import { CalendarProps } from "../../types";
import { WeekViewTable } from "./WeekViewTable";
import { MainMenu } from "./MainMenu";
import { Weekdays } from "./Weekdays";

export function Calendar(props: CalendarProps) {
	return (
		<main className="calendar">
			<MainMenu {...props} />
			<div className="week-view">
				<header className="week-view-header">
					<Weekdays stateDate={props.stateDate} />
					<div className="outer-border-wrapper-top">
						<div className="outer-border-cell-top" />
						<div className="outer-border-cell-top" />
						<div className="outer-border-cell-top" />
						<div className="outer-border-cell-top" />
						<div className="outer-border-cell-top" />
						<div className="outer-border-cell-top" />
						<div className="outer-border-cell-top invisible" />
					</div>
				</header>
				<div className="week-table-and-time">
					<ol className="list-of-times">
						<li className="invisible">00:00</li>
						<li>01:00</li>
						<li>02:00</li>
						<li>03:00</li>
						<li>04:00</li>
						<li>05:00</li>
						<li>06:00</li>
						<li>07:00</li>
						<li>08:00</li>
						<li>09:00</li>
						<li>10:00</li>
						<li>11:00</li>
						<li>12:00</li>
						<li>13:00</li>
						<li>14:00</li>
						<li>15:00</li>
						<li>16:00</li>
						<li>17:00</li>
						<li>18:00</li>
						<li>19:00</li>
						<li>20:00</li>
						<li>21:00</li>
						<li>22:00</li>
						<li>23:00</li>
					</ol>
					<div className="outer-border-wrapper-left">
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left" />
						<div className="outer-border-cell-left invisible" />
					</div>
					<WeekViewTable rows={24} cols={7} />
				</div>
			</div>
		</main>
	);
}
