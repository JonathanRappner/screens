import React from 'react'
import { Link } from "react-router-dom";
import _ from 'lodash';
import {
	Box,
} from '@mui/material'

// Style
const thumbStyle = {
	backgroundRepeat: 'no-repeat',
	backgroundSize: '100%',
	backgroundPosition: 'center',

	color: 'black',
	textDecoration: 'none',

	display: 'flex',
	alignItems: 'flex-end',
	flexDirection: 'row-reverse',

	transition: 'background-size 300ms ease-out',

	'&:hover':{
		backgroundSize: '110%',
		transition: 'background-size 300ms ease-out',
	},

	'.info_box': {
		opacity: 0,
		transition: 'opacity 100ms',
	},
	'&:hover .info_box': {
		opacity: 1,
	},

	mr: '8px',
	mb: '8px',
	
	// dynamic width and height
	width: { // must use % here because vw doesn't account for the scroll bar.
		xs: 'calc(50% - 8px)', // 2 columns - margin
		sm: 'calc(33% - 8px)', // 3 columns
		md: 'calc(25% - 8px)', // 4 columns
		lg: 'calc(16.667% - 8px)', // 6 columns
		xl: 'calc(12.5% - 8px)', // 8 columns
	},
	height: { // w to h ratio = 0.5625 (based on 1920x1080)
		xs: 'calc(28.125vw - 8px)', // 50 * 0.5625 = 28.125
		sm: 'calc(18.5625vw - 8px)',
		md: 'calc(14.0625vw - 8px)',
		lg: 'calc(9.37125vw - 8px)',
		xl: 'calc(7.03125vw - 8px)',
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
	const bg = { backgroundImage: `url(${props.screen.thumb.url})` }

	return (
		<Box component={Link} to={url} sx={thumbStyle} style={bg}>
			<Box className='info_box' sx={infoBoxStyle}>
				<Box component='img' src={`data:image/png;base64,${props.screen.game.icon16}`} />
				{props.screen.date_time.format_long}
			</Box>
		</Box>
	)
}

export default Thumb