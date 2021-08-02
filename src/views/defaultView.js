import React from 'react'
import Header from '../components/header/header'
import Thumbs from '../components/thumbs/thumbs';
import Viewer from '../components/viewer/viewer';

class DefaultView extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			viewerId: this.props.match.params.screenId, // viewer screenshot id
			displayViewer: typeof this.props.match.params.screenId !== 'undefined', // true if there is a screenId in the route url
			thumbLength: 100,
			gameCode: this.props.match.params.gameCode,
		};
	}

	componentDidUpdate(prevProps) {
		if(this.props.match !== prevProps.match)
			this.setState({
				viewerId: this.props.match.params.screenId,
				gameCode: this.props.match.params.gameCode
			})
	}

	// thumbnail clicked
	thumClick = (id) => {
		this.setState({
			viewerId: id,
			displayViewer: true
		})
	}

	// parent component must know when the viewer has been closed because it opens it by changing its state
	closeViewer = () => {
		this.setState({ displayViewer: false })
	}

	render() {
		return (
			<div className="App container-fluid">
				<Viewer id={this.state.viewerId} display={this.state.displayViewer} history={this.props.history} closeViewer={this.closeViewer} />
				<Header />
				<Thumbs length={this.state.thumbLength} gameCode={this.state.gameCode} thumbClick={this.thumClick} />
			</div>
		)
	}

}

export default DefaultView