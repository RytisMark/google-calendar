import { ExtendedEvent } from "../../types";
import { getFilteredExtEvents } from "./getFilteredExtEvents";

export function getEventLeftPos(
  extEvent: ExtendedEvent,
  extEvents: ExtendedEvent[],
): string {
  const { startDate } = extEvent;

  const filteredExtEvents = getFilteredExtEvents(startDate, extEvents);
  const eventsLength = filteredExtEvents.length;
  const columnWidth = 100 / (eventsLength + 1);
  const eventIndex = filteredExtEvents.findIndex(
    (event) => event.eventId === extEvent.eventId,
  );

  return `${eventIndex * columnWidth}%`;
}
