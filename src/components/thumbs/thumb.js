import React from 'react'
import { Link } from "react-router-dom";
import _ from 'lodash';

export default class Thumb extends React.Component{

	render(){
		const screen = this.props.screen;
		const url = `/${!_.isNil(this.props.gameCode) ? this.props.gameCode +'/' : ''}`+ screen.id

		return (
			<Link to={url} className='thumb g-0 col-6 col-sm-4 col-md-2'>
				<img
					className='w-100'
					src={screen.thumb.url}
					alt={'Screen '+ screen.id}
				/>
			</Link>
		)
	}
}