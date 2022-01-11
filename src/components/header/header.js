import React from 'react'
import { Link } from 'react-router-dom';
import {
	Box, Typography
} from '@mui/material'

import sun from './sun.svg'

// Styles
const headerStyle = {
	backgroundImage: 'linear-gradient(rgba(77,174,200,0.10), rgba(0,0,0,0))',
	padding: 1,
}
const headingStyle = {
	display: 'flex',
	alignItems: 'center',
	textShadow: '0.3rem 0.3rem 6px rgba(0,0,0,0.75)',
}

const dateStyle = {
	color: '#7696d2',
	marginLeft: 1,
}

const logoStyle = {
	width: '100px',
	marginRight: 1,
	filter: 'drop-shadow(0.5rem 0.5rem 4px rgba(0,0,0,0.5))'
}

const Header = () => {
	return (
		<Box component='header' sx={headerStyle}>
			<Typography variant='h1' sx={headingStyle}>
				<Link to='/'>
					<Box component='img' src={sun} alt="Logo" sx={logoStyle}></Box>
				</Link>
				Screens
				<Typography component='span' variant='h1' sx={dateStyle}>2021-01-01</Typography>
				<Typography component='span' variant='h1' sx={{ marginLeft: 1 }}>-</Typography>
				<Typography component='span' variant='h1' sx={dateStyle}>2021-12-31</Typography>
			</Typography>
		</Box>
	)
}
export default Header