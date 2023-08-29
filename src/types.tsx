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

export type EventNoId = Omit<Event, "eventId">;

export interface ExtendedEvent extends Event {
  startDate: Date;
  endDate: Date;
  eventTime: string;
  hours: number;
  minutes: number;
}

export interface ToolbarProps {
  toggleMainMenu: () => void;
  goToPrevWeekView: () => void;
  goToNextWeekView: () => void;
  stateDate: Date;
  goToToday: () => void;
}

export interface NavigationArrowsProps {
  goToPrevView: () => void;
  goToNextView: () => void;
  classList: string;
}

export interface DateDisplayProps {
  selectedDate: Date;
  classList: string;
}

export interface CalendarProps {
  showMainMenu: boolean;
  goToPrevMonthView: () => void;
  goToNextMonthView: () => void;
  stateDate: Date;
  overviewDate: Date;
  changeToSelectedDay: (selectedDate: Date) => void;
  toggleEventCreationModal: () => void;
  extEvents: ExtendedEvent[];
  changeCurrentChosenEventId: (eventId: string) => void;
}

export interface EventElementProps {
  extEvent: ExtendedEvent;
  extEvents: ExtendedEvent[];
  changeCurrentChosenEventId: Function;
}

export interface MainMenuProps {
  showMainMenu: boolean;
  goToPrevMonthView: () => void;
  goToNextMonthView: () => void;
  stateDate: Date;
  overviewDate: Date;
  changeToSelectedDay: (selectedDate: Date) => void;
  toggleEventCreationModal: () => void;
}

export interface OverviewMonthTableProps {
  stateDate: Date;
  overviewDate: Date;
  changeToSelectedDay: (selectedDate: Date) => void;
}

export interface WeekViewTableProps {
  rows: number;
  cols: number;
  extEvents: ExtendedEvent[];
  stateDate: Date;
  changeCurrentChosenEventId: (eventId: string) => void;
}

export interface EventCreationModalProps {
  showEventCreationModal: boolean;
  handleCreateEventClick: (startDate: string, endDate: string) => void;
  handleCreateEventSubmit: (eventObj: EventNoId) => void;
  toggleEventCreationModal: () => void;
}

export interface EventDescriptionModalProps {
  showEventDescriptionModal: boolean;
  toggleEventDescriptionModal: () => void;
  extEvents: ExtendedEvent[];
  currentChosenEventId: string;
  handleDestroyEventClick: (eventId: string) => void;
}
