import React from 'react'
import Button from 'react-bootstrap/Button'

class Foobar extends React.Component{
	render(){
		return <Button className="btn-success">{this.props.text}</Button>
	}
}

export default Foobar;