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
						<th scope='col' className='d-none d-md-table-cell'>#</th>
						<th scope='col'>Name</th>
						<th scope='col'>Description</th>
						<th scope='col'>Language</th>
						<th scope='col' className='d-none d-md-table-cell'>Last Updated</th>
						<th scope='col' className='d-none d-lg-table-cell'>License</th>
					</tr>
				</thead>
				<tbody>
					{repos.map(({ name, description, language, html_url, pushed_at, license }, index) => {
						return (
							<tr key={index} onClick={() => window.location = html_url} style={{cursor: 'pointer'}}>
								<th scope='row' className='d-none d-md-table-cell'>{index + 1}</th>
								<td>{name}</td>
								<td>{description}</td>
								<td>{language}</td>
								<td className='d-none d-md-table-cell'>{['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'][new Date(pushed_at).getMonth()]} {new Date(pushed_at).getDate()} {new Date(pushed_at).getFullYear()}</td>
								<td className='d-none d-lg-table-cell'>{license ? license.name : ''}</td>
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