import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';

// Views
import theme from './theme'
import Main from './views/main'
import AdminView from './views/adminView'
import FourOFour from './views/fourOFour'


const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Main />} />
					<Route path='admin' element={<AdminView />} />
					<Route path=':param1/:param2' element={<Main />} />
					<Route path=':param1' element={<Main />} />
					<Route path='*' element={<FourOFour />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App

/*
<BrowserRouter>
	<Routes>
		<Route path='/' element={<Index />} />
		<Route path='/mkb' element={<MKB />} />
		<Route path='/foretagarnajul2021/*' element={<ForetagarnaJul2021 />} />
		<Route path='/rikshem' element={<Rikshem />} />
		<Route path='/jul2021/' element={<Julevent2021 />} />
		<Route path='/jul2021/signups' element={<Julevent2021Signups />} />
		<Route path='*' element={<FourOFour />} />
	</Routes>
</BrowserRouter>
*/