import React from 'react'
import { Link } from "react-router-dom";
import _ from 'lodash';

const Thumb = (props) => {

	const url = `/${!_.isNil(props.gameCode) ? props.gameCode + '/' : ''}` + props.screen.id

	return (
		<Link to={url}>
			<img
				src={props.screen.thumb.url}
				alt={'Screen ' + props.screen.id}
			/>
		</Link>
	)
}

export default Thumb