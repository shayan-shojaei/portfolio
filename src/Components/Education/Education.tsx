import './Education.scss';

export default function Education() {
	return (
		<div className="page">
			<div className="page-content">
				<span className="page-route">education/</span>

				<section className="education">
					<EducationItem
						title="BSc. Computer Science"
						organization="Kharazmi University"
						startYear="2020"
						endYear="Present"
					/>
				</section>
			</div>
		</div>
	);
}

const EducationItem = (props: {
	title: string;
	organization: string;
	startYear: string;
	endYear: string;
}) => (
	<article className="education-item">
		<p>
			{props.organization}
			<span>
				{props.startYear} - {props.endYear}
			</span>
		</p>
		<h3>{props.title}</h3>
	</article>
);
