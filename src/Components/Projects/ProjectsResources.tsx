export interface ProjectProperties {
	title: string;
	description: string;
	type?: string;
	url?: string;
	images?: string[];
}
export class Project {
	constructor(public project: ProjectProperties) {}
}

export const getProjects = (): Project[] => {
	const projects: Project[] = [];
	projects.push(
		new Project({
			title: 'Trayl Website',
			description:
				'Trayl is an online intercity transportation solution. My task was to create and maintain the front-end side of the website, taking advantage of a GraphQL back-end; The website is also implemented as a PWA for better mobile usage.',
			url: 'https://trayl.ir',
			images: [
				'/images/trayl-1.png',
				'/images/trayl-2.png',
				'/images/trayl-3.png',
			],
		}),
		new Project({
			title: 'Trayl Admin Panel',
			description:
				"Trayl's Admin Panel was designed and implemented with ease and speed in mind; Providing the support staff to see data in an organized fashion and finish batches of tasks with the least amout of clicks to get through the app.",
			images: [
				'/images/trayl-admin-1.png',
				'/images/trayl-admin-2.png',
				'/images/trayl-admin-3.png',
			],
		})
	);
	return projects;
};
