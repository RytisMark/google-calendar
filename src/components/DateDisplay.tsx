import { DateDisplayProps } from "../types";
import { getMonthAndYear } from "../utils/getters/getMonthAndYear";

export function DateDisplay(props: DateDisplayProps) {
  const dateToDisplay = getMonthAndYear(props.selectedDate, props.classList);
  return (
    <>
      <div className={props.classList}>{dateToDisplay}</div>
    </>
  );
}
