import { createTheme } from "@mui/material/styles"

export default createTheme({
	palette: {
		mode: 'dark',
		primary: { main: '#343a40' },
		secondary: { main: '#FFF' }
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundColor: "#282c34"
				},
				'::-webkit-scrollbar': {
					width: 14
				},
				'::-webkit-scrollbar-thumb': {
					background: 'rgb(85, 85, 85)',
					borderRadius: 6
				}
			}
		}
	},
})