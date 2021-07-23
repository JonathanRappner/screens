import React from 'react'
import { Button } from 'react-bootstrap'
import ThumbList from '../components/thumbList/thumbList';
import Viewer from '../components/viewer/viewer';

class DefaultView extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			thumbLength: 100,
			viewerScreenId: this.props.match.params.screenId,
			game_code_filter: this.props.match.params.game_code_filter
		};
	}

	handleViewerScreenIdChange = (newId) => {
		this.setState({viewerScreenId: newId})
	}

	render() {

		return (
			<div className="App">
				<Button variant="success" onClick={() => this.setState({thumbLength: 10})}>Foobar</Button>

				<ThumbList thumbsLength={this.state.thumbLength} game_code_filter={this.state.game_code_filter} viewerChangeHandler={this.handleViewerScreenIdChange} />
				<Viewer id={this.state.viewerScreenId} history={this.props.history} />
			</div>
		)
	}

}

export default DefaultView