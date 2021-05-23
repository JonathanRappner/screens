import React from 'react'
import Thumb from './thumb'

class Thumb_list extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: []
		};
	}

	componentDidMount() {
		fetch('https://screens-api.aeoah.se/screens/all/latest/500')
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						items: result
					})
				}
			)
	}

	render() {
		const items = this.state.items

		return <section>
			{items.map(item => (
				<Thumb key={item.id} link={item.path.screen.path} thumb_src={item.path.thumb.path} />
			))}
			
		</section>
	}
}

export default Thumb_list;