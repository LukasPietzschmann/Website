function Imprint({ className }) {
	return (
		<div className={`${className}`}>
			<h1>Impressum</h1>
			<p>Angaben gemäß § 5 TMG</p>
			<p>
				Lukas Pietzschmann<br />
				Steinertgasse 10<br />
				73499 Aalen
			</p>
			<p>
				Vertreten durch:<br />
				Lukas Pietzschmann
			</p>
			<p>
				Kontakt:<br />
				Telefon: 01578-2943873<br />
				E-Mail: <a href='mailto:lukas.pietzschmann@outlook.de'>lukas.pietzschmann@outlook.de</a>
			</p>
			<p>
				Haftung für Links
				Diese Webseite enthält Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb
				kann für diese fremden Inhalte auch keine Gewähr übernehmen werden. Für die Inhalte der verlinkten Seiten ist
				stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
				Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
				Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
				Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
				derartige Links umgehend entfernen.
				Datenschutz
				Die Nutzung dieser Webseite ist ohne Angabe personenbezogener Daten möglich.
			</p>
		</div>
	);
}

export default Imprint;