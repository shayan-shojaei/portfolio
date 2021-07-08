import './App.scss';
import { useState } from 'react';
import Nav, { NavRoute } from './Components/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';

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
		<Router>
			<div className="wrapper">
				<Nav
					className="wrapper-nav"
					items={NavItems}
					/* onChange={(route: string) =>
					setAppState((p) => ({ ...p, route: route }))
				} */
				/>
				<div className="wrapper-container">
					<Switch>
						<Route path="/projects">
							<Projects />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
