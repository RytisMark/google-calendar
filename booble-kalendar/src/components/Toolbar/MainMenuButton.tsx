export function MainMenuButton({ toggleMainMenu }: { toggleMainMenu: Function }) {
	return (
		<button className="menu-btn" onClick={() => toggleMainMenu()}>
			<div className="menu-line" />
			<div className="menu-line" />
			<div className="menu-line" />
		</button>
	);
}
