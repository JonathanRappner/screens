import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import DefaultView from './views/defaultView'
import AdminView from './views/adminView';
import FourOFour from './views/fourOFour';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends React.Component {

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={DefaultView} />
					<Route path='/admin' component={AdminView} />
					<Route path='/:screenId(\d{10})' component={DefaultView} />
					<Route path='/:gameCode(\w+)' component={DefaultView} />
					<Route component={FourOFour} />
				</Switch>
			</Router>
		)
	}

}

export default App;
