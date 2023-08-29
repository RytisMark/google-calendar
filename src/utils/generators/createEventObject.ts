import { generateEventId } from "./generateEventId";
import { Event, EventNoId } from "../../types";

export function createEventObject(eventObj: EventNoId): Event {
  return {
    eventId: generateEventId(),
    ...eventObj,
  };
}
