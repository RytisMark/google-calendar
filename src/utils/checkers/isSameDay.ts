import { getDateNthDaysFromCurrent } from "../getters/getDateNthDaysFromCurrent";

export function isSameDay(firstDate: Date, secondDate: Date) {
  const firstDateTime = getDateNthDaysFromCurrent(firstDate, 0).getTime();
  const secondDateTime = getDateNthDaysFromCurrent(secondDate, 0).getTime();
  return firstDateTime === secondDateTime;
}
