import React from 'react'
import axios from 'axios'
import './viewer.scss'
import config from '../../config'

export default class Viewer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			width: 0,
			height: 0,
			top: 0,
			left: 0
		};
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);

		// show viewer from the start
		if(this.props.id)
			this.show()
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.id !== this.props.id)
		{
			if(this.props.id) // viewer is showing
				this.show()
		}
	}

	// showing viewer
	show = () => {
		this.loadScreen()
		document.body.style.overflow = 'hidden' // disable scrcolling
	}

	// closing viewer
	close = () => {
		this.setState({screen: null})
		document.body.style.overflow = 'auto' // enable scrolling
		document.getElementById("favicon").href = 'favicon.ico' // restore favicon
		document.title = 'Screens' // restore title

		this.props.closeViewer() // function in DefaultView
	}

	// load screenshot data from API
	loadScreen = () => {
		if(this.props.id)
		{
			axios.get(`${config.api_url}screens/${this.props.id}`)
			.then(res => {
				this.setState({screen: res.data})
				this.updateDimensions()
				document.getElementById("favicon").href = res.data.game.icon48_url // favicon
				document.title = `${res.data.game.code.toUpperCase()}: ${res.data.date_time.format_long}` // title
			})
		}
	}

	updateDimensions = () => {
		if(this.state.screen) // only run if a screen is loaded
		{
			const newDimensions = this.calcNewSize(this.state.screen.resolution)
			this.setState({
				width: newDimensions.width,
				height: newDimensions.height,
				top: newDimensions.top,
				left: newDimensions.left,
			})
		}
	}

	/**
	 * Calculate the size and position of the viewer based on the size of the browser and screenshot itself
	 * @returns {json} width and height
	 */
	calcNewSize = (resolution) => {
		const width = resolution.width
		const height = resolution.height

		// --size--
		// first: try to set image width to browser width
		let newWidth = window.innerWidth
		let newHeight = (newWidth / width) * height

		// next: check if that's too tall
		if(newHeight > window.innerHeight)
		{
			newHeight = window.innerHeight
			newWidth = (newHeight / height) * width
		}

		// --position--
		const top = (window.innerHeight - newHeight) / 2
		const left = (window.innerWidth - newWidth) / 2

		return {
			width: newWidth,
			height: newHeight,
			top: top,
			left: left
		}
	}

	render() {
		const screen = this.state.screen

		return (
			<section className="viewer-wrapper">
				{ this.props.id && <div className="backdrop" onClick={this.close}></div> }
				
				{ this.props.id && 
					<div className="viewer" style={{
						'top': this.state.top +'px',
						'left': this.state.left +'px'
					}}>
						{/* <h5 className="text-light">Viewing screen {this.props.id}</h5> */}
						{/* <Button color="danger" onClick={this.close}>X</Button> */}
						{
							screen &&
							<img src={screen.screen.url} style={{
								'width': this.state.width +'px',
								'height': this.state.height +'px'
							}} onClick={this.close} alt={screen.date_time.format_long}/>}
					</div>
				}
				
			</section>
		)
	}
}