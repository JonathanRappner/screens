import React from 'react'
import config from '../../config'
import Thumb from './thumb'
import './thumbList.scss'

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
		fetch(`${config.api_url}screens/all/latest/${this.props.thumbsLength}`)
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
			<section className='row m-0'>
				{items && items.map(item =>
					<Thumb key={item.id} screenId={item.id} screen={item} />
				)}
			</section>)
	}
}

export default Thumb_list;