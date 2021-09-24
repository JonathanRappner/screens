import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from '@mui/material'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline';

// Views
import theme from './theme'
import Main from './views/main'
import AdminView from './views/adminView'
import FourOFour from './views/fourOFour'


const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<EmotionThemeProvider theme={theme}>
				<CssBaseline />
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
			</EmotionThemeProvider>
		</ThemeProvider>
	)
}

export default App