import { CalendarProps } from "../../types";
import { WeekViewTable } from "./WeekViewTable";
import { MainMenu } from "./MainMenu";
import { Weekdays } from "./Weekdays";
import { getDoubleDigitTime } from "../../utils/getters/getDoubleDigitTime";

export function Calendar(props: CalendarProps) {
  const outerBorderTop = Array(7).fill(null);
  const outerBorderLeft = Array(24).fill(null);
  const listOfTimes = Array(24).fill(null);
  return (
    <main className="calendar">
      <MainMenu
        showMainMenu={props.showMainMenu}
        goToPrevMonthView={props.goToPrevMonthView}
        goToNextMonthView={props.goToNextMonthView}
        stateDate={props.stateDate}
        overviewDate={props.overviewDate}
        changeToSelectedDay={props.changeToSelectedDay}
        toggleEventCreationModal={props.toggleEventCreationModal}
      />
      <div className="week-view">
        <header className="week-view-header">
          <Weekdays stateDate={props.stateDate} />
          <div className="outer-border-wrapper-top">
            {outerBorderTop.map((cell) => (
              <div className="outer-border-cell-top" />
            ))}
          </div>
        </header>
        <div className="week-table-and-time">
          <ol className="list-of-times">
            {listOfTimes.map((time, index) => (
              <li>{getDoubleDigitTime(index)}:00</li>
            ))}
          </ol>
          <div className="outer-border-wrapper-left">
            {outerBorderLeft.map((cell) => (
              <div className="outer-border-cell-left" />
            ))}
          </div>
          <WeekViewTable
            rows={24}
            cols={7}
            extEvents={props.extEvents}
            stateDate={props.stateDate}
            changeCurrentChosenEventId={props.changeCurrentChosenEventId}
          />
        </div>
      </div>
    </main>
  );
}
