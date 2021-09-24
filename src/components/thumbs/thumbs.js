import {
	Box
} from '@mui/material'

import Thumb from './thumb'

// Style
const thumbsSx = {
	display: 'flex',
	flexWrap: 'wrap',
	lineHeight: 0
}

const Thumbs = (props) => {
	return (
		<Box container sx={thumbsSx}>
			{props.thumbs && props.thumbs.map(thumb =>
				<Box item>
					<Thumb key={thumb.id} screen={thumb} gameCode={props.gameCode} />
				</Box>
			)}
		</Box>
	)
}

export default Thumbs