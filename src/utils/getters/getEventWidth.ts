import { ExtendedEvent } from "../../types";
import { getEventLeftPos } from "./getEventLeftPos";

export function getEventWidth(extEvent: ExtendedEvent, extEvents: ExtendedEvent[]) {
  return `calc(${100}% - ${getEventLeftPos(extEvent, extEvents)})`;
}
