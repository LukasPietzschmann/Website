import { useEffect, useState } from "react";

import { axiosInstance } from "../Config";
import Footer from "./Footer/Footer";

import "./Footer/Footer.css";

function AllProjects({ className }) {
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		axiosInstance.get('/users/LukasPietzschmann/repos')
			.then(({ data }) => setRepos(data))
			.catch(err => console.error(err));
	}, []);

	return (
		<div className={`${className}`}>
			<table className='table table-hover'>
				<thead>
					<tr>
						<th scope='col'>#</th>
						<th scope='col'>Name</th>
						<th scope='col'>Description</th>
						<th scope='col'>Language</th>
					</tr>
				</thead>
				<tbody>
					{repos.map(({ name, description, language, html_url }, index) => {
						return (
							<tr key={index} onClick={() => window.location = html_url} style={{cursor: 'pointer'}}>
								<th scope='row'>{index + 1}</th>
								<td>{name}</td>
								<td>{description}</td>
								<td>{language}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<Footer className='mt-5'/>
		</div>
	);
}

export default AllProjects;