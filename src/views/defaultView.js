import React from 'react'
import { Button } from 'react-bootstrap'
import ThumbList from '../components/thumbList/thumbList';
import Viewer from '../components/viewer/viewer';

class DefaultView extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			thumbLength: 100,
			viewerScreenId: this.props.match.params.screenId
		};
	}

	handleFoobarClick = () => {
		this.setState({thumbLength: 10})
	}

	handleViewerScreenIdChange = (newId) => {
		this.setState({viewerScreenId: newId})
	}

	render() {

		return (
			<div className="App">
				<Button variant="success" onClick={this.handleFoobarClick}>Foobar</Button>

				<ThumbList thumbsLength={this.state.thumbLength} viewerChangeHandler={this.handleViewerScreenIdChange} />
				<Viewer id={this.state.viewerScreenId} />
			</div>
		)
	}

}

export default DefaultView