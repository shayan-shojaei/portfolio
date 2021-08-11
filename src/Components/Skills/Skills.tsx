import './Skills.scss';
import skillsList from '../../resources/skills.json';

interface Skill {
	title: string;
	items: string[];
}

export default function Skills() {
	return (
		<div className="page">
			<div className="page-content">
				<span className="page-route">skills/</span>
				{skillsList.map((skill: Skill) => (
					<SkillGroup title={skill.title} chips={skill.items} />
				))}
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
