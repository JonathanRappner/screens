import React from 'react'
import Thumb from './thumb'

class Thumb_list extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			items: []
		};
	}

	// componentDidMount() {
	// }

	render() {
		const items = this.props.items

		return <section>
			<h1 style={{color: 'white'}}>Showing {items.length} screens</h1>
			{items.map(item => (
				<Thumb key={item.id} link={item.path.screen.path} thumb_src={item.path.thumb.path} />
			))}
			</section>
	}
}

export default Thumb_list;