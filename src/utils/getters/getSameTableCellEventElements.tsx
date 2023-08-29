import { ExtendedEvent } from "../../types";
import { EventElement } from "../../components/Calendar/EventElement";
import { getSameTableCellEvents } from "./getSameTableCellEvents";

export function getSameTableCellEventElements(
  extEvents: ExtendedEvent[],
  columnIndex: number,
  cellIndex: number,
  stateDate: Date,
  changeCurrentChosenEventId: (eventId: string) => void,
) {
  const filteredEvents = getSameTableCellEvents(
    stateDate,
    columnIndex,
    cellIndex,
    extEvents,
  );
  return filteredEvents.map((extEvent) => (
    <EventElement
      extEvent={extEvent}
      extEvents={extEvents}
      changeCurrentChosenEventId={changeCurrentChosenEventId}
    />
  ));
}
