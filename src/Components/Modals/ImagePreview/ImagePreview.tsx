import './ImagePreview.scss';

export default function ImagePreview({
	src,
	alt,
	onDismiss,
}: {
	src: string;
	alt: string;
	onDismiss: () => void;
}) {
	return (
		<div
			className="preview-wrapper"
			onClick={(e) => {
				e.stopPropagation();
				onDismiss();
			}}
		>
			<img src={src} alt={alt} />
		</div>
	);
}
