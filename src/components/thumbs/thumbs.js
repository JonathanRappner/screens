import {
	Box
} from '@mui/material'

import Thumb from './thumb'

// Style
const thumbsStyle = {
	display: 'flex',
	flexWrap: 'wrap',
	pl: '8px',

	backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(77,174,200,0.15), rgba(0,0,0,0))',
	backgroundSize: '100% 100vh'
}

const Thumbs = (props) => {
	return (
		<Box sx={thumbsStyle}>
			{props.thumbs && props.thumbs.map(thumb =>
				<Thumb key={thumb.id} screen={thumb} gameCode={props.gameCode} />
			)}
		</Box>
	)
}

export default Thumbs