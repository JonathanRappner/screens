import React, { useState, useEffect } from 'react'
import './viewer.scss'


const Viewer = (props) => {

	// hooks
	const [dimensions, setDimensions] = useState({ width: 0, height: 0, top: 0, left: 0 })

	// init
	useEffect(() => {
		window.addEventListener('resize', updateDimensions)
	}, [])

	// screen effect
	useEffect(() => {
		if (typeof props.screen !== 'undefined') { // only run if a screen is loaded
			updateDimensions()
			document.body.style.overflow = 'hidden' // disable scrcolling
		}
	}, [props.screen])

	/**
	 * Calculate the size and position of the viewer based on the size of the browser and screenshot itself
	 * @returns {json} width and height
	 */
	const updateDimensions = () => {
		if (typeof props.screen === 'undefined') {
			setDimensions({ width: 0, height: 0, top: 0, left: 0 })
			return
		}

		const width = props.screen.resolution.width
		const height = props.screen.resolution.height

		// --size--
		// first: try to set image width to browser width
		let newWidth = window.innerWidth
		let newHeight = (newWidth / width) * height

		// next: check if that's too tall
		if (newHeight > window.innerHeight) {
			newHeight = window.innerHeight
			newWidth = (newHeight / height) * width
		}

		// --position--
		const top = (window.innerHeight - newHeight) / 2
		const left = (window.innerWidth - newWidth) / 2

		setDimensions({
			width: newWidth,
			height: newHeight,
			top: top,
			left: left
		})
	}

	return (
		<section className="viewer-wrapper">
			{props.screen && <div className="backdrop" onClick={props.close}></div>}

			{props.screen &&
				<div className="viewer" style={{
					'top': dimensions.top + 'px',
					'left': dimensions.left + 'px'
				}}>
					{/* <h5 className="text-light">Viewing screen {props.id}</h5> */}
					{/* <Button color="danger" onClick={close}>X</Button> */}
					{
						props.screen &&
						<img src={props.screen.screen.url} style={{
							'width': dimensions.width + 'px',
							'height': dimensions.height + 'px'
						}} onClick={props.close} alt={props.screen.date_time.format_long} />}
				</div>
			}

		</section>
	)
}

export default Viewer