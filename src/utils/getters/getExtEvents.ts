import { createExtendedEventObject } from "../generators/createExtendedEventObject";
import { Event } from "../../types";

export function getExtEvents(events: Event[]) {
  return events.map((event: Event) => createExtendedEventObject(event));
}
