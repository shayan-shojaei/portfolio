import './App.scss';
import Nav, { NavRoute } from './Components/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';
import Work from './Components/Work/Work';

function App() {
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
				<Nav className="wrapper-nav" items={NavItems} />
				<div className="wrapper-container">
					<Switch>
						<Route path="/skills" exact>
							<Skills />
						</Route>
						<Route path="/work" exact>
							<Work />
						</Route>
						<Route path="/education" exact>
							<Education />
						</Route>
						<Route path="/projects" exact>
							<Projects />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
				<footer>Copyright © 2021</footer>
			</div>
		</Router>
	);
}

export default App;
