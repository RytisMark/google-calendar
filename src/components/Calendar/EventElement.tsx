import { EventElementProps } from "../../types";
import { getEventStyle } from "../../utils/getters/getEventStyle";

export function EventElement(props: EventElementProps) {
  const { eventId, eventTitle, eventTime } = props.extEvent;

  const eventStyle = getEventStyle(props.extEvent, props.extEvents);
  const titleElem = <span style={{ fontWeight: "bold" }}>{eventTitle}</span>;
  const timeElem = <span>{eventTime}</span>;

  return (
    <div
      className="event"
      data-event-id={eventId}
      key={eventId}
      style={{ ...eventStyle }}
      onClick={e => {
        props.changeCurrentChosenEventId(eventId);
        e.stopPropagation();
      }}
    >
      {titleElem}, {timeElem}
    </div>
  );
}
