import { getDateNthDaysFromCurrent } from "./getDateNthDaysFromCurrent";
import { getMonthName } from "./getMonthName";

export function getMonthAndYear(selectedDate: Date, classList: string) {
  let mainDate;
  let secondaryDate;

  if (classList === "today-date") {
    const currDayOfTheWeek = selectedDate.getDay() || 7;
    const tempDateMon = getDateNthDaysFromCurrent(
      selectedDate,
      1 - currDayOfTheWeek,
    );
    const tempDateSun = getDateNthDaysFromCurrent(
      selectedDate,
      7 - currDayOfTheWeek,
    );
    const monYear = tempDateMon.getFullYear();
    const sunYear = tempDateSun.getFullYear();
    const monDayOfMonth = tempDateMon.getDate();
    const sunDayOfMonth = tempDateSun.getDate();

    const firstJointMonth = getMonthName(tempDateMon).substring(0, 3);
    const secondJointMonth = getMonthName(tempDateSun).substring(0, 3);

    const jointYear = `${firstJointMonth} ${monYear} - ${secondJointMonth} ${sunYear}`;
    const jointMonth = `${firstJointMonth} - ${secondJointMonth} ${monYear}`;
    const singleHeaderDate = `${getMonthName(selectedDate)} ${monYear}`;

    if (monYear !== sunYear) {
      mainDate = jointYear;
    } else if (monDayOfMonth > sunDayOfMonth) {
      mainDate = jointMonth;
    } else {
      mainDate = singleHeaderDate;
    }
  } else if (classList === "overview-date") {
    const singleOverviewDate = `${getMonthName(
      selectedDate,
    )} ${selectedDate.getFullYear()}`;
    secondaryDate = singleOverviewDate;
  }

  return mainDate || secondaryDate;
}
