import { useImage } from 'react-image';

function Element({ title, imgLink, siteLink, className, style }) {
	const { src } = useImage({
		srcList: imgLink
	});

	return (
		<div className={className}>
			<a href={siteLink}>
				<img className='border shadow border-dark rounded' src={src} alt='title' style={style}/>
			</a>
			<div className='text-center text-secondary font-weight-light'>{title}</div>
		</div>
	);
}

export default Element;