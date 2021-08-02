import React from 'react'
import { Button } from 'react-bootstrap'
import ThumbList from '../components/thumbList/thumbList';
import Viewer from '../components/viewer/viewer';

class DefaultView extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			thumbLength: 100,
			screenId: this.props.match.params.screenId,
			gameCode: this.props.match.params.gameCode
		};
	}

	handleViewerScreenIdChange = (newId) => {
		this.setState({screenId: newId})
	}

	render() {

		return (
			<div className="App">
				<Button variant="success" onClick={() => this.setState({thumbLength: 10})}>Foobar</Button>

				<ThumbList length={this.state.thumbLength} gameCode={this.state.gameCode} viewerChangeHandler={this.handleViewerScreenIdChange} />
				<Viewer id={this.state.screenId} history={this.props.history} />
			</div>
		)
	}

}

export default DefaultView