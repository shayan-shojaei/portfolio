import './Projects.scss';
import projects from '../../resources/projects.json';
import Chevron from '../Icons/Chevron';
import { useState } from 'react';
import cn from 'classnames';
import Link from '../Icons/Link';
import ImagePreview from '../Modals/ImagePreview/ImagePreview';

export interface ProjectProperties {
	title: string;
	description: string;
	type?: string;
	url?: string;
	images?: string[];
}

const initialPreviewImage = { src: '', alt: '' };

export default function Projects() {
	const [previewImage, setPreviewImage] = useState(initialPreviewImage);
	return (
		<div className="page">
			{previewImage.src !== '' && (
				<ImagePreview
					src={previewImage.src}
					alt={previewImage.alt}
					onDismiss={() => setPreviewImage({ ...initialPreviewImage })}
				/>
			)}
			<div className="page-content">
				<span className="page-route">projects/</span>
				<div className="projects">
					{projects.map((project: ProjectProperties) => (
						<ProjectItem
							project={project}
							onImageClick={(image) =>
								setPreviewImage({ src: image, alt: project.title })
							}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

function ProjectItem({
	project,
	onImageClick,
}: {
	project: ProjectProperties;
	onImageClick: (image: string) => void;
}) {
	const [openImages, setOpenImages] = useState(false);
	return (
		<div className="project-item">
			<h4>
				{project.title}
				{typeof project.type === 'string' && <span>{project.type}</span>}
			</h4>
			<p>{project.description}</p>

			<span className="project-item-actions">
				{project.url && (
					<a
						className={cn({
							'project-item-actions-item': true,
						})}
						href={project.url}
						target="_blank"
						rel="noreferrer"
					>
						<Link />
						open
					</a>
				)}
				{Array.isArray(project.images) && (
					<span
						className={cn({
							'project-item-actions-item': true,
							'project-item-actions-item-open': openImages,
						})}
						onClick={() => setOpenImages((p) => !p)}
					>
						<Chevron />
						images
					</span>
				)}
			</span>
			{Array.isArray(project.images) && (
				<div
					className={cn({
						'project-item-images-container': true,
						'project-item-images-container-open': openImages,
					})}
				>
					{project.images.map((image, i) => (
						<img
							key={i}
							alt={project.title}
							src={image}
							onClick={() => onImageClick(image)}
						/>
					))}
				</div>
			)}
		</div>
	);
}
