import './Home.scss';
import { GitHub, LinkedIn, Email, Twitter } from '../Icons/Social';

export default function Home() {
	return (
		<div className="page">
			<div className="page-content">
				<span className="page-route">home/</span>
				<h1>
					hey, i'm <strong>shayan</strong>!
				</h1>
				<p>
					I'm a software developer and have worked in multiple fields such as
					Web and Mobile software development. I've worked with several
					languages and consider myself proficient in
					<strong> JavaScript, Python and Java</strong>, etc. I'm currently
					studying Computer Science and am highly interested in Deep Learning
					research, concepts and techniques.
				</p>
				<section className="socials">
					<SocialItem
						label="My Github Profile"
						url="https://github.com/shayan-shojaei"
						icon={<GitHub />}
					/>
					<SocialItem
						label="My LinkedIn Profile"
						url="https://linkedin.com/in/shayan-shojaei"
						icon={<LinkedIn />}
					/>
					<SocialItem
						label="shayanshojaei.2002@gmail.com"
						url="mailto:shayanshojaei.2002@gmail.com"
						icon={<Email />}
					/>
					<SocialItem
						label="My Twitter Account"
						url="https://twitter.com/shayan_shojaei"
						icon={<Twitter />}
					/>
				</section>
			</div>
		</div>
	);
}

const SocialItem = (props: { label: string; url: string; icon: any }) => (
	<a href={props.url} target="_blank" rel="noreferrer">
		{props.icon}
		<span>{props.label}</span>
	</a>
);
