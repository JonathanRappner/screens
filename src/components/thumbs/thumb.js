/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { Link } from "react-router-dom";
import _ from 'lodash';
import {
	Box
} from '@mui/material'

// Style
const imgStyle = css`
	background-color: blue;
	&:hover{
		background-color: red;
	}
`

const Thumb = (props) => {

	const url = `/${!_.isNil(props.gameCode) ? props.gameCode + '/' : ''}` + props.screen.id

	return (
		<Box item>
			<Link to={url}>
				<img
					css={imgStyle}
					src={props.screen.thumb.url}
					alt={'Screen ' + props.screen.id}
				/>
			</Link>
		</Box>
	)
}

export default Thumb