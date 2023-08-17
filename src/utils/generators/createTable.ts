export function createTable(rows: number, cols: number) {
	const weekViewTable = document.querySelector(".week-view-table") as HTMLDivElement;
	for (let col = 0; col < cols; col++) {
		const tableCol = document.createElement("div");
		weekViewTable.appendChild(tableCol).className = "table-column";
		for (let row = 0; row < rows; row++) {
			const tableCell = document.createElement("div");
			tableCell.className = "table-cell";
			tableCol.appendChild(tableCell);
		}
	}
}
