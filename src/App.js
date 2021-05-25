import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import DefaultView from './views/defaultView'
import AdminView from './views/adminView';
import UnknownURLView from './views/unknownURLView';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends React.Component {

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={DefaultView} />
					<Route path='/:screenId(\d{10})' component={DefaultView} />
					<Route path='/admin' component={AdminView} />
					<Route component={UnknownURLView} />
				</Switch>
			</Router>
		)
	}

}

export default App;
