export interface CalendarInfo {
	stateDate: Date;
	overviewDate: Date;
	extEvents: ExtendedEvent[];
}

export interface Event {
	eventId: string;
	eventTitle: string;
	startDateJson: string;
	endDateJson: string;
	description: string;
}

export interface ExtendedEvent extends Event {
	startDate: Date;
	endDate: Date;
	eventTime: string;
	hours: number;
	minutes: number;
}

export interface ToolbarProps {
	toggleMainMenu: Function;
	goToPrevWeekView: Function;
	goToNextWeekView: Function;
	stateDate: Date;
	goToToday: Function;
}

export interface CalendarProps {
	showMainMenu: boolean;
	goToPrevMonthView: Function;
	goToNextMonthView: Function;
	stateDate: Date;
	overviewDate: Date;
	changeToSelectedDay: Function;
	toggleEventCreationModal: Function;
}
