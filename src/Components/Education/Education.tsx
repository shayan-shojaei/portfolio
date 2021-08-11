import './Education.scss';

import education from '../../resources/education.json';

type EducationType = {
	title: string;
	organization: string;
	startYear: string;
	endYear: string;
};

export default function Education() {
	return (
		<div className="page">
			<div className="page-content">
				<span className="page-route">education/</span>

				<section className="education">
					{education.map((item: EducationType) => (
						<EducationItem item={item} />
					))}
				</section>
			</div>
		</div>
	);
}

const EducationItem = ({ item }: { item: EducationType }) => (
	<article className="education-item">
		<p>
			{item.organization}
			<span>
				{item.startYear} - {item.endYear}
			</span>
		</p>
		<h3>{item.title}</h3>
	</article>
);
