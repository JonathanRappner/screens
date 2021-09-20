import React from 'react'
import { Link } from "react-router-dom";
import _ from 'lodash';

const Thumb = (props) => {

	const url = `/${!_.isNil(props.gameCode) ? props.gameCode + '/' : ''}` + props.screen.id

	return (
		<Link to={url} className='thumb g-0 col-6 col-sm-4 col-md-2'>
			<img
				className='w-100'
				src={props.screen.thumb.url}
				alt={'Screen ' + props.screen.id}
			/>
		</Link>
	)
}

export default Thumb