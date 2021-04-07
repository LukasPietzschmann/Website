import { Link } from 'react-router-dom';

import './Footer.css';

function Footer({ className }) {
	return (
		<div className={`footer w-100 text-center ${className}`}>
			<Link className='link-light' to='/imprint'>Imprint </Link>
			<Link className='link-light' to='/dataprotection'>Data Protection</Link>
		</div>
	);
}

export default Footer;