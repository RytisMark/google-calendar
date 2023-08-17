import { Event } from "../../types.js";

export function getEvents(): Event[] {
	return JSON.parse(localStorage.getItem("events") || "[]");
}
