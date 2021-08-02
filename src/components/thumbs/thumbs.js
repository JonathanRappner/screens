import axios from 'axios'
import React from 'react'
import config from '../../config'
import Thumb from './thumb'
import './thumbs.scss'

class ThumbList extends React.Component {

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
		if (prevProps.length !== this.props.length)
			this.loadScreens()
	}

	loadScreens = () => {
		const gameCode = this.props.gameCode ?? 'all'

		axios.get(`${config.api_url}screens/${gameCode}/latest/${this.props.length}`)
			.then(res => {
				this.setState({items: res.data})
			})
	}

	render() {
		return (
			<section className='row m-0'>
				{this.state.items && this.state.items.map(item =>
					<Thumb key={item.id} screen={item} viewerChangeHandler={this.props.viewerChangeHandler} />
				)}
			</section>)
	}
}

export default ThumbList;