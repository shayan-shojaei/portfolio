import './App.scss';
import { useState } from 'react';
import Nav, { NavRoute } from './Components/Nav/Nav';

function App() {
	const [appState, setAppState] = useState({ route: '/' });
	const NavItems = [
		new NavRoute('Home', '/'),
		new NavRoute('Skills', '/skills'),
		new NavRoute('Work Experience', '/work'),
		new NavRoute('Education', '/education'),
		new NavRoute('Projects', '/projects'),
	];
	return (
		<div className="wrapper">
			<Nav
				className="wrapper-nav"
				items={NavItems}
				selectedRoute={appState.route}
				onChange={(route: string) =>
					setAppState((p) => ({ ...p, route: route }))
				}
			/>
			<div className="wrapper-container">the other</div>
		</div>
	);
}

export default App;
