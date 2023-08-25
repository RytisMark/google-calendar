import { ExtendedEvent } from "../../types";
import { getEventLeftPos } from "./getEventLeftPos";
import { getEventMaxWidth } from "./getEventMaxWidth";

export function getEventWidth(eventElem: HTMLDivElement, startDate: Date, extEvents: ExtendedEvent[]): string {
	return `calc(${getEventMaxWidth()} - ${getEventLeftPos(eventElem, startDate, extEvents)})`;
}
