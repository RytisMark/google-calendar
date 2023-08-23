import { Event } from "../../types";

export function getEvents(): Event[] {
	return JSON.parse(localStorage.getItem("events") || "[]");
}
