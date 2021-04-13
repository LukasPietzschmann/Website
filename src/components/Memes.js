import { useEffect, useState } from "react";
import { axiosInstance } from "../Config";

function Memes({ className }) {
	const [maxGifs, setMax] = useState(10);
	const [links, setLinks] = useState([]);

	useEffect(() => {
		axiosInstance.get(`https://api.giphy.com/v1/gifs/trending?api_key=SISOf0WHdjuodRhjT1lKEJPjf5OwCFWL&limit=${maxGifs}`)
			.then(({ data }) => {
				let tempLinks = [];
				data.data.map((elem) => tempLinks.push(elem.images.downsized.url))
				setLinks(tempLinks);
			})
	}, [maxGifs]);

	return (
		<div className={className}>
			<label>Anzahl Gifs:</label>
			<input type='number' value={maxGifs} onChange={(e) => setMax(e.target.value)} />
			<hr />
			<div>
				{links.map((link, i) => <img key={i} src={link}></img>)}
			</div>
		</div>
	);
}

export default Memes;