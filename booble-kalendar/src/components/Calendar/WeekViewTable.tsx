export function WeekViewTable({ rows, cols }: { rows: number; cols: number }) {
	const tableColumns = [];
	for (let col = 0; col < cols; col++) {
		const tableCells = [];
		for (let row = 0; row < rows; row++) {
			tableCells.push(<div key={row} className="table-cell" />);
		}
		tableColumns.push(
			<div key={col} className="table-column">
				{tableCells}
			</div>
		);
	}
	return <div className="week-view-table">{tableColumns}</div>;
}
