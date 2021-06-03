import React from 'react'
// import { Modal } from 'react-bootstrap'
import config from '../../config'

class Viewer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			screen: {
				path: {
					screen: { path: null },
					thumb: { path: null }
				}
			}
		};
	}

	componentDidMount() {
		this.loadScreen()
	}

	componentDidUpdate(prevProps) {
		if (prevProps.screenId !== this.props.screenId)
			this.loadScreen()
	}

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	}

	loadScreen = () => {
		if(this.props.screenId)
			fetch(`${config.api_url}screens/${this.props.screenId}`)
				.then(res => res.json())
				.then(
					(result) => {
						this.setState({
							screen: result
						})
					}
				)
	}

	render() {
		const screen = this.state.screen

		return (
			<section>
				<h5>Viewing screen {this.props.screenId}</h5>
				<img src={screen.path.screen.path} alt='' className='w-100' />
			</section>
		)
		// return (
		// 	<Modal show={true}>
		// 		<Modal.Header>Viewing screen {this.props.screenId}</Modal.Header>
		// 		<Modal.Body><img src={screen.path.screen.path} alt='' className='w-100' /></Modal.Body>
		// 		<Modal.Footer>Footer</Modal.Footer>
		// 	</Modal>
		// )
	}
}

export default Viewer;