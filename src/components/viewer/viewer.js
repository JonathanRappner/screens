import React, { useState, useEffect } from 'react'
import './viewer.scss'

const blankDimensions = { width: 0, height: 0, top: 0, left: 0 }

/**
 * Calculate the size and position of the viewer based on the size of the browser and screenshot itself
 * @param {object} screen JSON screenshot from API
 * @returns 
 */
const getDimensions = (screen) => {
	const width = screen.resolution.width
	const height = screen.resolution.height

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

	return {
		width: newWidth,
		height: newHeight,
		top: top,
		left: left
	}
}


const Viewer = (props) => {

	// hooks
	const [dimensions, setDimensions] = useState(blankDimensions)

	// props.screen changes
	useEffect(() => {
		if (typeof props.screen !== 'undefined') { // if screen exists
			setDimensions(getDimensions(props.screen)) // set viewer initial dimensions
			window.addEventListener('resize', () => setDimensions(getDimensions(props.screen))) // add event listener that sets dimensions later
			document.body.style.overflow = 'hidden' // disable scrolling
		}
	}, [props.screen])


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