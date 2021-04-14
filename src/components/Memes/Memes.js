import { Suspense, useEffect, useState } from 'react';
import { axiosInstance } from '../../Config';

import Element from './Element';
import Loader from '../../assets/loading.gif';

function Memes({ className }) {
	const [maxGifs, setMax] = useState(15);
	const [links, setLinks] = useState([]);
	const [seed, setSeed] = useState(Math.floor(Math.random() * (4999 - maxGifs)));

	useEffect(() => {
		axiosInstance.get(`https://api.giphy.com/v1/gifs/trending?api_key=SISOf0WHdjuodRhjT1lKEJPjf5OwCFWL&limit=${maxGifs}&offset=${seed}`)
			.then(({ data }) => {
				let tempLinks = [];
				data.data.map((elem) => console.log(elem))
				data.data.map((elem) => tempLinks.push({ url: elem.images.original.url, height: elem.images.original.height, width: elem.images.original.width, link: elem.images.downsized.url, title: elem.title }))
				setLinks(tempLinks);
			})
	}, [maxGifs, seed]);

	return (
		<div className={className}>
			<div className='text-center m-5'>
				<h1>Having a bad Day?</h1>
				<h2>Here's the Solution to all your Problems!</h2>
			</div>
			<form>
				<div className='form-group'>
					<label htmlFor='count'>Gif-Count (More Gifs -> More Happyness)</label>
					<input type='number' className='form-control' id='count' value={maxGifs} onChange={(e) => setMax(e.target.value)} />
					<small className='form-text text-muted'>I Promise I wont share the Amount of Gifs you need to overcome your Pain</small>
				</div>
				<button id='refresh' className='btn btn-outline-primary float-right' onClick={() => setSeed(Math.floor(Math.random() * (4999 - maxGifs)))}>Regenerade Seed</button>
			</form>
			<hr />
			{maxGifs > 0 ? <>
				<div className='d-flex flex-wrap justify-content-around'>
					{links.map(({ link, width, height, title, url }, i) => {
						return (
							<Suspense key={i} fallback={<img className='bg-light m-2 align-self-center' height={height} width={width} src={Loader} alt='Loading' style={{ objectFit: 'contain', maxWidth: 'calc(100vw - 10px)'}}/>}>
								<Element title={title} imgLink={link} siteLink={url} className='m-2 align-self-center' style={{maxWidth: 'calc(100vw - 10px)'}} />
							</Suspense>
						)
					})}
				</div>
				<div className='mt-5 text-center font-weight-light'>
					!!! This Website uses Gifs from <a href='https://giphy.com'>Giphy</a> !!!
				</div></>
				:
				<h1 className='text-center text-success'>
					Looks like your having a good day :^)
				</h1>
			}
		</div >
	);
}

export default Memes;