import './Skills.scss';

export default function Skills() {
	return (
		<div className="page">
			<div className="page-content">
				<span className="page-route">skills/</span>
				<SkillGroup
					title="Programming Languages"
					chips={[
						'JavaScript',
						'Java',
						'Kotlin',
						'TypeScript',
						'Python',
						'Dart',
						'Rust',
					]}
				/>
				<SkillGroup
					title="Front End"
					chips={['ReactJS', 'SASS', 'HTML', 'CSS', 'NextJS']}
				/>
				<SkillGroup
					title="Mobile"
					chips={['Native Android', 'React Native', 'Flutter']}
				/>
				<SkillGroup
					title="Back End"
					chips={['Node', 'ExpressJS', 'GraphQL', 'Mongo DB', 'Postgres DB']}
				/>
				<SkillGroup
					title="Tools"
					chips={['Git/Github', 'NPM', 'ScikitLearn']}
				/>
				<SkillGroup title="Languages" chips={['Persian', 'English']} />
			</div>
		</div>
	);
}

const SkillGroup = (props: { title: string; chips: string[] }) => (
	<div className="chip-container">
		<div className="chip-title">{props.title}</div>
		{props.chips.map((chip) => (
			<span className="chip">{chip}</span>
		))}
	</div>
);
