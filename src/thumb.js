import React from 'react'

class Thumb extends React.Component{
	render(){
		return <a href={this.props.link}><img src={this.props.thumb_src} alt='' /></a>
	}
}

export default Thumb;