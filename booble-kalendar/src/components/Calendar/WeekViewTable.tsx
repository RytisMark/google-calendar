import { ExtendedEvent } from "../../types";
import { renderEvents } from "../../utils/updaters/renderEvents";

export function WeekViewTable({
	rows,
	cols,
	extEvents,
	stateDate,
	changeCurrentChosenEventId,
}: {
	rows: number;
	cols: number;
	extEvents: ExtendedEvent[];
	stateDate: Date;
	changeCurrentChosenEventId: Function;
}) {
	const tableColumns = new Array(cols).fill(new Array(rows).fill(null));

	return (
		<div className="week-view-table">
			{tableColumns.map((col, columnIndex) => {
				return (
					<div key={columnIndex} className="table-column">
						{col.map((tableCell: any, cellIndex: number) => (
							<div key={cellIndex} className="table-cell">
								{renderEvents({ extEvents, columnIndex, cellIndex, stateDate, changeCurrentChosenEventId })}
								{/* <div className="event">b</div> */}
							</div>
						))}
					</div>
				);
			})}
		</div>
	);
}
