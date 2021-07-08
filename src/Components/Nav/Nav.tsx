import './Nav.scss';
import cn from 'classnames';

interface NavProps {
	items: NavRoute[];
	selectedRoute: string;
	onChange: (route: string) => void;
	className?: string;
}

export default function Nav(props: NavProps) {
	return (
		<nav className={props.className}>
			<header>
				Shayan Shojaei
				<span>Web & Mobile Developer</span>
			</header>
			<ul>
				{props.items.map((item) => (
					<NavItem
						key={item.route}
						label={item.label}
						route={item.route}
						selected={props.selectedRoute === item.route}
						onClick={() => props.onChange(item.route)}
					/>
				))}
			</ul>
		</nav>
	);
}

interface NavItemProps {
	label: string;
	selected: boolean;
	onClick: () => void;
	route: string;
	className?: string;
}
function NavItem(props: NavItemProps) {
	return (
		<li
			className={cn({
				[typeof props.className !== 'undefined' ? props.className : '']:
					!!props.className,
				selected: props.selected,
			})}
			onClick={props.onClick}
		>
			{props.label}
		</li>
	);
}

export class NavRoute {
	constructor(private _label: string, private _route: string) {}

	get label() {
		return this._label;
	}
	set label(value: string) {
		this._label = value;
	}
	get route() {
		return this._route;
	}
	set route(value: string) {
		this._route = value;
	}
}
