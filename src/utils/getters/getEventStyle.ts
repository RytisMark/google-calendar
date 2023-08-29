import { ExtendedEvent } from "../../types";
import { getEventHeight } from "./getEventHeight";
import { getEventLeftPos } from "./getEventLeftPos";
import { getEventTopPos } from "./getEventTopPos";
import { getEventWidth } from "./getEventWidth";
import { getEventZIndex } from "./getEventZIndex";

export function getEventStyle(
  extEvent: ExtendedEvent,
  extEvents: ExtendedEvent[],
) {
  const { startDate, endDate, minutes } = extEvent;
  const eventTop = getEventTopPos(minutes);
  const eventLeft = getEventLeftPos(extEvent, extEvents);
  const eventHeight = getEventHeight(startDate, endDate);
  const eventWidth = getEventWidth(extEvent, extEvents);
  const eventZIndex = getEventZIndex(extEvent, extEvents);

  return {
    top: eventTop,
    left: eventLeft,
    height: eventHeight,
    width: eventWidth,
    zIndex: eventZIndex,
  };
}
