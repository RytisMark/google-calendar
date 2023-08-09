export function createTable(rows, cols) {
	const weekViewTable = document.querySelector(".week-view-table");
	for (let col = 0; col < cols; col++) {
		const tableCol = document.createElement("div");
		weekViewTable.appendChild(tableCol).className = "table-column";
		for (let row = 0; row < rows; row++) {
			const tableCell = document.createElement("div");
			tableCol.appendChild(tableCell).className = "table-cell";
		}
	}
}
