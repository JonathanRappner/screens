import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import Main from './views/main'
import AdminView from './views/adminView'
import FourOFour from './views/fourOFour'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/admin' component={AdminView} />
				<Route path='/:gameCode(\w+)/:screenId(\d{10})' component={Main} />
				<Route path='/:screenId(\d{10})' component={Main} />
				<Route path='/:gameCode(\w+)' component={Main} />
				<Route component={FourOFour} />
			</Switch>
		</Router>
	)
}

export default App