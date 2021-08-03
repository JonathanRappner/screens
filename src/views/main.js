import React from 'react'
import './main.scss'
import Header from '../components/header/header'
import Thumbs from '../components/thumbs/thumbs';
import Viewer from '../components/viewer/viewer';

export default class Main extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			viewerId: this.props.match.params.screenId, // viewer screenshot id
			gameCode: this.props.match.params.gameCode, // thumbs game filter
			thumbLength: 100,
		};
	}

	componentDidUpdate(prevProps) {
		if(this.props.match.params !== prevProps.match.params) // url changed
		{
			this.setState({
				viewerId: this.props.match.params.screenId,
				gameCode: this.props.match.params.gameCode,
			})
		}
	}

	// parent component must know when the viewer has been closed because it opens it by changing its state
	closeViewer = () => {
		this.setState({ viewerId: null }) // reset viewerId on close so that a future viewerId value change will display the viewer again
		this.props.history.push(`/${this.state.gameCode ?? ''}`) // set the gameCode (if there is any) in the url
	}

	render() {
		return (
			<div className='App container-fluid gx-0' style={{'paddingRight': this.props.match.params.screenId ? '14px' : ''}}>
				<Viewer id={this.state.viewerId} closeViewer={this.closeViewer} />
				<Header />
				<Thumbs length={this.state.thumbLength} gameCode={this.state.gameCode} />
			</div>
		)
	}
}