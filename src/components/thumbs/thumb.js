import React from 'react'
import { Link } from "react-router-dom";
import _ from 'lodash';
import {
	Box
} from '@mui/material'

// Style
const imgStyle = {
	backgroundColor: 'blue',
	'&:hover': { backgroundColor: 'red' }
}

const Thumb = (props) => {

	const url = `/${!_.isNil(props.gameCode) ? props.gameCode + '/' : ''}` + props.screen.id

	return (
		<Box item>
			<Link to={url}>
				<Box
					component='img'
					sx={imgStyle}
					src={props.screen.thumb.url}
					alt={'Screen ' + props.screen.id}
				/>
			</Link>
		</Box>
	)
}

export default Thumb