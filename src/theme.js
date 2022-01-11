import { createTheme } from '@mui/material/styles'
import bg from './stripe.png'

export default createTheme({
	palette: {
		mode: 'dark',
		primary: { main: '#343a40' },
		secondary: { main: '#FFF' }
	},
	typography: {
		h1: {
			fontSize: '2rem',
			fontWeight: 'bold',
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundImage:`url(${bg})`,
				},
				'::-webkit-scrollbar': {
					width: 14
				},
				'::-webkit-scrollbar-thumb': {
					background: 'rgb(85, 85, 85)',
					borderRadius: 6
				},
			}
		}
	},
})