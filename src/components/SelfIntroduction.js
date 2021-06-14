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
					<p>
						Generally, I enjoy coding in various languages. Java, JavaScript, and Python being the ones I am most experienced with.
						And while the majority of Projects I'm coding for, are targeted to the Web, I'm currently trying to get more into Hardware-near programming with C and (primarily) C++.
					</p>
					<p>
						Things I always wanted to work on:
						<ul>
							<li>Designing and implementing my own little Language (in Progress)</li>
							<li>Making some RaspberryPi LEDs bling using Assembly language</li>
							<li>Developing a Project with at least one star on GitHub...</li>
						</ul>
					</p>
				</div>

			</div>
		</div>
	);
}

export default SelfIntroduction;