import React from 'react'
import Thumb from './thumb'
import './thumbs.scss'

const Thumbs = (props) => {

	return (
		<section className='row g-0'>
			{props.thumbs && props.thumbs.map(thumb =>
				<Thumb key={thumb.id} screen={thumb} gameCode={props.gameCode} />
			)}
		</section>)
}

export default Thumbs