import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import config from '../../config'

class Viewer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			showModal: typeof this.props.id !== 'undefined',
			screen: {
				screen: { url: null },
				thumb: { url: null }
			}
		};
	}

	componentDidMount() {
		this.loadScreen()
	}

	componentDidUpdate(prevProps) {
		if (prevProps.id !== this.props.id)
		{
			this.setState({showModal: typeof this.props.id !== 'undefined'})
			this.loadScreen()
		}
	}

	loadScreen = () => {
		if(this.props.id)
			fetch(`${config.api_url}screens/${this.props.id}`)
				.then(res => res.json())
				.then(
					(result) => {
						this.setState({
							screen: result
						})
					}
				)
	}

	close = () =>{
		this.setState({
			showModal: false
		})
		this.props.history.push('/')
	}

	render() {
		const screen = this.state.screen

		// return (
		// 	<section>
		// 		<h5 className="text-light">Viewing screen {this.props.screenId}</h5>
		// 		<img src={screen.path.screen.path} alt='' className='w-100' />
		// 	</section>
		// )
		return (
			<Modal show={this.state.showModal} onHide={this.close} size='xl' centered>
				<Modal.Header closeButton>
					Viewing screen {this.props.screenId}</Modal.Header>
				<Modal.Body>
					<img src={screen.screen.url} alt='' className='w-100' />
				</Modal.Body>
				<Modal.Footer>
					<Button variant='danger' onClick={this.close}>Close</Button>
				</Modal.Footer>
			</Modal>
		)
	}
}

export default Viewer;