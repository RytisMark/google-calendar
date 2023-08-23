import { ExtendedEvent } from "../../types.js";
import { getEventLeftPos } from "./getEventLeftPos.js";
import { getEventMaxWidth } from "./getEventMaxWidth.js";

export function getEventWidth(eventElem: HTMLDivElement, startDate: Date, extEvents: ExtendedEvent[]): string {
	return `calc(${getEventMaxWidth()} - ${getEventLeftPos(eventElem, startDate, extEvents)})`;
}
