import React from 'react'
import Button from 'react-bootstrap/Button'
import ThumbList from '../thumbList';
import Viewer from '../viewer';

class DefaultView extends React.Component{

	constructor(props) {
		super(props)

		this.state = { 
			thumbs: [],
			thumbListLength: 100
		}
	}

	componentDidMount(){
		this.loadScreens()
	}

	foobarClick = () => {
		this.setState(
			{ thumbListLength: 10 },
			this.loadScreens
		)
	}

	loadScreens = () => {
		fetch(`https://screens-api.aeoah.se/screens/all/latest/${this.state.thumbListLength}`)
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					thumbs: result
				})
			}
		)
	}

	render() {
		const screenId = this.props.match.params.screenId;

		return (
			<div className="App">
				{ screenId && <Viewer screenId={screenId} />}
				<Button className="btn-success" onClick={this.foobarClick}>Foobar</Button>

				<ThumbList items={this.state.thumbs} />
			</div>
		)
	}

}

export default DefaultView