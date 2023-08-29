import { getEvents } from "../getters/getEvents";
import { getExtEvents } from "../getters/getExtEvents";

export function removeEventFromStorage(
  eventId: string,
  setExtEvents: Function,
) {
  const newEvents = getEvents().filter((event) => event.eventId !== eventId);
  localStorage.setItem("events", JSON.stringify(newEvents));
  setExtEvents(getExtEvents(newEvents));
}
