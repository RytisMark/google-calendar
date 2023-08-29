import { NavigationArrowsProps } from "../types";

export function NavigationArrows(props: NavigationArrowsProps) {
  return (
    <div className="nav-arrows">
      <button className={`${props.classList} arrow-left`} onClick={() => props.goToPrevView()}>
        {"<"}
      </button>
      <button className={`${props.classList} arrow-right`} onClick={() => props.goToNextView()}>
        {">"}
      </button>
    </div>
  );
}
