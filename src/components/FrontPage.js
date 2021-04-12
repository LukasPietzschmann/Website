import AllProjects from './AllProjects';
import SelfIntroduction from './SelfIntroduction';

function FrontPage({ className, style }) {
	return (
		<div className={`row ${className}`} style={style}>
			<SelfIntroduction className='d-none d-md-block shadow-lg col-md-4 my-md-3 m-md-3' /> {/* On Big Screen */}
			<SelfIntroduction className='d-md-none d-block col-md-4 my-md-3 m-md-3 mb-3' /> {/* On Small Screen */}
			<AllProjects className='col-md-7 my-md-3 mx-md-3'/>
		</div>
	);
}

export default FrontPage;