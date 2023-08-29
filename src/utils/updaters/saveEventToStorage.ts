import { Event, ExtendedEvent } from "../../types";
import { getEvents } from "../getters/getEvents";

export function saveEventToStorage(
  event: Event,
  extEvent: ExtendedEvent,
  setExtEvents: Function,
) {
  setExtEvents((prevExtEvents: ExtendedEvent[]) => [
    ...prevExtEvents,
    extEvent,
  ]);

  const events = getEvents();
  localStorage.setItem("events", JSON.stringify([...events, event]));
}
