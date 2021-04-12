import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import FrontPage from './components/FrontPage';
import NotFound from './components/NotFound';
import Imprint from './components/Imprint';
import DataProtection from './components/Dataprotection';

import './App.css';
import './components/Footer/Footer.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact>
					<FrontPage style={{ height: 'calc(100vh)' }} />
				</Route>
				<Route path='/dataprotection' exact component={DataProtection} />
				<Route path='/imprint' exact component={Imprint} />
				<Route>
					<NotFound className='m-5 p-5' />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;