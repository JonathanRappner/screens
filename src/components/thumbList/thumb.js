import React from 'react'
import { Link } from "react-router-dom";

class Thumb extends React.Component{
	render(){
		const screen = this.props.screen;
		return (
			<Link to={'/'+ screen.id} className='thumb p-0 col-6 col-sm-4 col-md-2'>
				<img
					className='w-100'
					src={screen.path.thumb.path}
					alt={'Screen '+ screen.id}
				/>
			</Link>
		)
	}
}

export default Thumb;