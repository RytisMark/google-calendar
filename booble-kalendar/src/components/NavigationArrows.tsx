export function NavigationArrows(props: { goToPrevView: Function; goToNextView: Function; classList: string }) {
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
