import React from 'react'
import Thumb from './thumb'

class Thumb_list extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			items: []
		};
	}

	componentDidMount() {
		this.loadScreens()
	}

	componentDidUpdate(prevProps){
		if (prevProps.thumbsLength !== this.props.thumbsLength)
			this.loadScreens()
	}

	loadScreens = () => {
		fetch(`https://screens-api.aeoah.se/screens/all/latest/${this.props.thumbsLength}`)
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

		return (
			<section>
				(<h1 style={{color: 'white'}}>Showing {this.props.thumbsLength} screens</h1>)
				{items && items.map(item => <Thumb key={item.id} screenId={item.id} link={item.path.screen.path} thumb_src={item.path.thumb.path} />)}
			</section>)
	}
}

export default Thumb_list;