import { getMonthAndYear } from "../utils/getters/getMonthAndYear";

export function DateDisplay({ selectedDate, classList }: { selectedDate: Date; classList: string }) {
	const dateToDisplay = getMonthAndYear(selectedDate, classList);

	return (
		<>
			<div className={classList}>{dateToDisplay}</div>
		</>
	);
}
