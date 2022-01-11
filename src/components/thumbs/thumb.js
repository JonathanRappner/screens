import React from 'react'
import { Link } from "react-router-dom";
import _ from 'lodash';
import {
	Box,
} from '@mui/material'

// Style
const thumbStyle = {
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: 'center',

	color: 'black',
	textDecoration: 'none',

	display: 'flex',
	alignItems: 'flex-end',
	flexDirection: 'row-reverse',

	'.info_box': {
		opacity: 0,
		transition: 'opacity 100ms',
	},
	'&:hover .info_box': {
		opacity: 1,
	},
}
const thumbResponsiveStyle = { // dynamic width and height
	width: { // must use % here because vw doesn't account for the scroll bar.
		xs: '50%', // 2 columns
		sm: '33%', // 3 columns
		md: '25%', // 4 columns
		lg: '16.667%', // 6 columns
		xl: '12.5%', // 8 columns
	},
	height: { // w to h ratio = 0.5625 (based on 1920x1080)
		xs: '28.125vw', // 50 * 0.5625 = 28.125
		sm: '18.5625vw',
		md: '14.0625vw',
		lg: '9.37125vw',
		xl: '7.03125vw',
	},
}
const infoBoxStyle = {
	margin: 1,
	py: 0.8, 
	px: 1.6,
	borderRadius: 1,
	backgroundColor: 'white',
}

const Thumb = (props) => {

	const url = `/${!_.isNil(props.gameCode) ? props.gameCode + '/' : ''}` + props.screen.id

	return (
		<Box component={Link} to={url} sx={[thumbStyle, thumbResponsiveStyle, { backgroundImage: `url(${props.screen.thumb.url})` }]}>
			<Box className='info_box' sx={infoBoxStyle}>
				<Box component='img' src={`data:image/png;base64,${props.screen.game.icon16}`} />
				{props.screen.date_time.format_long}
			</Box>
		</Box>
	)
}

export default Thumb