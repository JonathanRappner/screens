import axios from 'axios'
import React from 'react'
import config from '../../config'
import Thumb from './thumb'
import './thumbList.scss'

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
				console.log(res);
				this.setState({items: res.data})
			})
	}

	render() {
		const items = this.state.items

		return (
			<section className='row m-0'>
				{items && items.map(item =>
					<Thumb key={item.id} screen={item} viewerChangeHandler={this.props.viewerChangeHandler} />
				)}
			</section>)
	}
}

export default ThumbList;