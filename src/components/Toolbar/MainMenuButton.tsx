export function MainMenuButton(props: { toggleMainMenu: Function }) {
	return (
		<button className="menu-btn" onClick={() => props.toggleMainMenu()}>
			<div className="menu-line" />
			<div className="menu-line" />
			<div className="menu-line" />
		</button>
	);
}
