import React from 'react'
import Thumbs from '../components/thumbs/thumbs';
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
				<Thumbs length={this.state.thumbLength} gameCode={this.state.gameCode} viewerChangeHandler={this.handleViewerScreenIdChange} />
				<Viewer id={this.state.screenId} history={this.props.history} />
			</div>
		)
	}

}

export default DefaultView