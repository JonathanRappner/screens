import React from 'react'
import Button from 'react-bootstrap/Button'
import ThumbList from '../components/thumbList/thumbList';
import Viewer from '../components/viewer/viewer';

class DefaultView extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			thumbLength: 100
		};
	}

	handleFoobarClick = () => {
		this.setState({thumbLength: 10})
	}

	render() {
		const screenId = this.props.match.params.screenId;

		return (
			<div className="App">
				{ screenId && <Viewer screenId={screenId} />}
				<Button className="btn-success" onClick={this.handleFoobarClick}>Foobar</Button>

				<ThumbList thumbsLength={this.state.thumbLength} />
			</div>
		)
	}

}

export default DefaultView