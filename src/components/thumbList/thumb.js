import React from 'react'
import { Link } from "react-router-dom";

class Thumb extends React.Component{
	render(){
		return (
			<Link to={'/'+ this.props.screenId}>
				<img src={this.props.thumb_src} alt='' width='200' />
			</Link>
		)
	}
}

export default Thumb;