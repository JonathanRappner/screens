import React from 'react'
import { Link } from "react-router-dom";
import _ from 'lodash';
import {
	Box
} from '@mui/material'

// Style
const divStyle = {
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
}
const divResponsiveStyle = { // dynamic width and height
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
const linkStyle = {
	height: '100%',
	display: 'block',
}

const Thumb = (props) => {

	const url = `/${!_.isNil(props.gameCode) ? props.gameCode + '/' : ''}` + props.screen.id

	return (
		<Box sx={[divStyle, divResponsiveStyle, { backgroundImage: `url(${props.screen.thumb.url})` }]}>
			<Link to={url} style={linkStyle} />
		</Box>
	)
}

export default Thumb