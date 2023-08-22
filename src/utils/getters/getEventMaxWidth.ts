export function getEventMaxWidth() {
	const tableCellPaddingRight = getComputedStyle(document.documentElement).getPropertyValue("--table-cell-padding-right");
	return `calc(100% - ${tableCellPaddingRight})`;
}
