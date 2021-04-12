import AllProjects from './AllProjects';
import SelfIntroduction from './SelfIntroduction';

function FrontPage({ className, style }) {
	return (
		<div className={`row ${className}`} style={style}>
			<SelfIntroduction className='col-md-4 my-md-3 m-md-3'/>
			<AllProjects className='col-md-7 my-md-3 mx-md-3'/>
		</div>
	);
}

export default FrontPage;