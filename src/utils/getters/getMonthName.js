export function getMonthName(date) {
	return date.toLocaleString("default", { month: "long" });
}
