import React from 'react'
import axios from 'axios'
import './viewer.scss'
import config from '../../config'

class Viewer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			display: this.props.display,
			screen: { // temporary init values
				screen: { url: null },
				thumb: { url: null }
			}
		};
	}

	componentDidMount() {
		this.loadScreen()
	}

	componentDidUpdate(prevProps) {
		// only reload screenshot data if the id changed
		if (prevProps.id !== this.props.id)
			this.loadScreen()

		// only change if display-property changed
		if (prevProps.display !== this.props.display)
			this.setState({display: this.props.display})
	}

	loadScreen = () => {
		if(this.props.id)
			axios.get(`${config.api_url}screens/${this.props.id}`)
			.then(res => {
				this.setState({screen: res.data})
			})
	}

	close = () => {
		this.props.closeViewer()
		this.props.history.push("/")
	}

	render() {
		const screen = this.state.screen

		return (
			<section className="viewer-wrapper">
				{ this.state.display && <div className="backdrop" onClick={this.close}></div> }
				
				{ this.state.display && 
					<div className="viewer">
						{/* <h5 className="text-light">Viewing screen {this.props.id}</h5> */}
						{/* <Button color="danger" onClick={this.close}>X</Button> */}
						<img src={screen.screen.url} alt='' className='w-100' onClick={this.close} />
					</div>
				}
				
			</section>
		)
	}
}

export default Viewer;