import { WeekViewTableProps } from "../../types";
import { getSameTableCellEventElements } from "../../utils/getters/getSameTableCellEventElements";

export function WeekViewTable(props: WeekViewTableProps) {
  const tableColumns = new Array(props.cols).fill(
    new Array(props.rows).fill(null),
  );

  return (
    <div className="week-view-table">
      {tableColumns.map((col, columnIndex) => {
        return (
          <div key={columnIndex} className="table-column">
            {col.map((cell: any, cellIndex: number) => (
              <div key={cellIndex} className="table-cell">
                {getSameTableCellEventElements(
                  props.extEvents,
                  columnIndex,
                  cellIndex,
                  props.stateDate,
                  props.changeCurrentChosenEventId,
                )}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
