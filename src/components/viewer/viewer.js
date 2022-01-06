import React, { useState, useEffect } from 'react'
import {
	Box
} from '@mui/material'

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

// Styles
// Viewer transparent backdrop
const backdropStyle = {
	width: '100%',
	height: '100%',
	cursor: 'pointer',
	backgroundColor: 'rgba(0, 0, 0, 0.5)',
	position: 'fixed',
	left: 0,
	top: 0,
	zIndex: 10,
}
// Viewer
const viewerStyle = {
	position: 'fixed',
	left: 0,
	top: 0,
	zIndex: 20,
	lineHeight: 0,
	backgroundSize: '100%',
}


const Viewer = (props) => {

	// hooks
	const [dimensions, setDimensions] = useState(blankDimensions)
	const [thumbURL, setThumbURL] = useState()

	// Dynamic styles
	const viewerDynamicStyle = {
		top: dimensions.top + 'px',
		left: dimensions.left + 'px',
		width: dimensions.width + 'px',
		height: dimensions.height + 'px',
	}
	// Viewer img
	const viewerImgDynamicStyle = {
		width: dimensions.width +'px',
		height: dimensions.height +'px',
	}
	const viewerThumbBackground = {backgroundImage: `url(${thumbURL})`}

	// props.screen changes
	useEffect(() => {
		if (typeof props.screen !== 'undefined') { // if screen exists
			setDimensions(getDimensions(props.screen)) // set viewer initial dimensions
			setThumbURL(props.screen.thumb.url) // 
			window.addEventListener('resize', () => setDimensions(getDimensions(props.screen))) // add event listener that sets dimensions later
			document.body.style.overflow = 'hidden' // disable scrolling
		}
	}, [props.screen])


	return (
		<section>
			{props.screen &&
				<React.Fragment>
					<Box sx={backdropStyle} onClick={props.close}></Box>
					<Box sx={[viewerStyle, viewerDynamicStyle, viewerThumbBackground]}>
						{props.screen &&
							<Box
								component='img'
								sx={viewerImgDynamicStyle}
								src={props.screen.screen.url}
								onClick={props.close}
								alt={props.screen.date_time.format_long}
							/>
						}
					</Box>
				</React.Fragment>
			}
		</section>
	)
}

export default Viewer