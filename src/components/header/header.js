import React from 'react'
import { Link } from 'react-router-dom';
import {
	Box, Typography
} from '@mui/material'

import sun from './sun.svg'

// Styles
const headerStyle = {
	display: 'flex',
	alignItems: 'center'
}

const dateStyle = {
	color: '#7696d2',
	marginLeft: 1
}

const sunStyle = {
	width: '100px',
	marginRight: 1
}

const Header = () => {
	return (
		<header>
			<Typography variant='h1' sx={headerStyle}>
				<Link to='/'>
					<Box component='img' src={sun} alt="Logo" sx={sunStyle}></Box>
				</Link>
				Screens
				<Typography component='span' variant='h1' sx={dateStyle}>2021-01-01</Typography>
				<Typography component='span' variant='h1' sx={{ marginLeft: 1 }}>-</Typography>
				<Typography component='span' variant='h1' sx={dateStyle}>2021-12-31</Typography>
			</Typography>
		</header>
	)
}
export default Header