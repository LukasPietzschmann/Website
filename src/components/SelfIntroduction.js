function SelfIntroduction({ className }) {
	return (
		<div className={`card ${className}`}>
			<div className='card-body'>
				<h1 className='card-title'>Lukas Pietzschmann</h1>
				<hr />
				<div className='card-text'>
					<p>I am a German developer, based in Aalen, Germany.</p>
					<p>
						I'm currently studying Computer-Science at <a className='link-dark' target="_blank" rel="noopener noreferrer" href='https://www.hs-aalen.de/en'>Aalen University</a> and working as a Software Dev at <a className='link-dark' target="_blank" rel="noopener noreferrer" href='https://www.antares-is.de/en/'>antares Informations-Systeme</a> on the side.
					</p>
				</div>

			</div>
		</div>
	);
}

export default SelfIntroduction;