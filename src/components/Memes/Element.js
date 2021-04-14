function Element({ title, imgLink, siteLink, className }) {
	return (
		<div className={className}>
			<a href={siteLink}>
				<img className='shadow-lg border border-dark rounded' key={title} src={imgLink} alt={title}></img>
			</a>
			<div className='text-center text-secondary font-weight-light'>{title}</div>
		</div>
	);
}

export default Element;