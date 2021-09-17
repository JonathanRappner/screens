import React from 'react'
import axios from 'axios'
import config from '../../config'
import Thumb from './thumb'
import './thumbs.scss'

export default class Thumbs extends React.Component {

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
		if (prevProps.gameCode !== this.props.gameCode)
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
			<section className='row g-0'>
				{this.state.items && this.state.items.map(item =>
					<Thumb key={item.id} screen={item} thumbClick={this.props.thumbClick} gameCode={this.props.gameCode} />
				)}
			</section>)
	}
}