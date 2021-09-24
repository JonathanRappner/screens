/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { Link } from "react-router-dom";

import _ from 'lodash';

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
		<Link to={url}>
			<img
				css={imgStyle}
				src={props.screen.thumb.url}
				alt={'Screen ' + props.screen.id}
			/>
		</Link>
	)
}

export default Thumb