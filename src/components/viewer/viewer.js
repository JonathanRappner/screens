import React from 'react'
import axios from 'axios'
import imageSize from 'react-image-size';
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

	componentDidUpdate(prevProps) {
		// viewer is closing or showing
		if (prevProps.id !== this.props.id)
		{
			if(this.props.id)
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

		this.props.closeViewer() // function in DefaultView
	}

	// load screenshot data from API
	loadScreen = () => {
		if(this.props.id)
		{
			axios.get(`${config.api_url}screens/${this.props.id}`)
			.then(res => {
				this.calcNewSize(res.data.thumb.url).then(newDimensions => { // get dimensions from thumb (which is already loaded)
					this.setState({
						screen: res.data,
						width: newDimensions.width,
						height: newDimensions.height,
						top: newDimensions.top,
						left: newDimensions.left,
					})
				})
			})
		}
	}

	updateDimensions = () => {
		if(this.props.id) // only run if a screen is loaded
		{
			
		}
	}

	/**
	 * Calculate the size and position of the viewer based on the size of the browser and screenshot itself
	 * @param {string} imgUrl 
	 * @returns {json} width and height
	 */
	calcNewSize = async (imgUrl) => {
		const { width, height } = await imageSize(imgUrl);

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