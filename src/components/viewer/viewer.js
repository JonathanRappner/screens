/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'

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
const backdropStyle = css`
	width: 100%;
	height: 100%;
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	left: 0;
	top: 0;
	z-index: 10;`
// Viewer
const viewerStyle = css`
	position: fixed;
	left: 0;
	top: 0;
	z-index: 20;
	line-height: 0;
	background-size: 100%;`


const Viewer = (props) => {

	// hooks
	const [dimensions, setDimensions] = useState(blankDimensions)
	const [thumbURL, setThumbURL] = useState()

	// Dynamic styles
	const viewerDynamicStyle = css`
		top: ${dimensions.top}px;
		left: ${dimensions.left}px;
		width: ${dimensions.width}px;
		height: ${dimensions.height}px`
	// Viewer img
	const viewerImgDynamicStyle = css`
		width: ${dimensions.width}px;
		height: ${dimensions.height}px;`
	const viewerThumbBackground = css`background-image: url(${thumbURL});` // 

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
					<div css={backdropStyle} onClick={props.close}></div>
					<div css={[viewerStyle, viewerDynamicStyle, viewerThumbBackground]}>
						{props.screen &&
							<img
								css={viewerImgDynamicStyle}
								src={props.screen.screen.url}
								onClick={props.close}
								alt={props.screen.date_time.format_long}
							/>
						}
					</div>
				</React.Fragment>
			}
		</section>
	)
}

export default Viewer