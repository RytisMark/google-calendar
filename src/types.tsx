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

export interface NavigationArrowsProps {
	goToPrevView: Function;
	goToNextView: Function;
	classList: string;
}

export interface DateDisplayProps {
	selectedDate: Date;
	classList: string;
}

export interface CalendarProps {
	showMainMenu: boolean;
	goToPrevMonthView: Function;
	goToNextMonthView: Function;
	stateDate: Date;
	overviewDate: Date;
	changeToSelectedDay: Function;
	toggleEventCreationModal: Function;
	extEvents: ExtendedEvent[];
	changeCurrentChosenEventId: Function;
}
export interface MainMenuProps {
	showMainMenu: boolean;
	goToPrevMonthView: Function;
	goToNextMonthView: Function;
	stateDate: Date;
	overviewDate: Date;
	changeToSelectedDay: Function;
	toggleEventCreationModal: Function;
}

export interface OverviewMonthTableProps {
	stateDate: Date;
	overviewDate: Date;
	changeToSelectedDay: Function;
}

export interface WeekViewTableProps {
	rows: number;
	cols: number;
	extEvents: ExtendedEvent[];
	stateDate: Date;
	changeCurrentChosenEventId: Function;
}

export interface renderEventsProps {
	extEvents: ExtendedEvent[];
	columnIndex: number;
	cellIndex: number;
	stateDate: Date;
	changeCurrentChosenEventId: Function;
}
