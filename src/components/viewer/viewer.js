import React from 'react'

class Viewer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			screen: null
		};
	}

	componentDidMount(){
		this.loadScreen()
	}

	componentDidUpdate(prevProps){
		if (prevProps.screenId !== this.props.screenId)
			this.loadScreen()
	}

	loadScreen = () => {
		fetch(`https://screens-api.aeoah.se/screens/${this.props.screenId}`)
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						screen: result
					})
				}
			)
	}

	render() {
		const screen = this.state.screen

		return ( screen && // display if screen is set
			<section>
				<h1 className='text-light'>Viewing screen {this.props.screenId}</h1>
				<a href={screen.path.screen.path}>
					<img src={screen.path.screen.path} alt='' style={{height: '30vh'}} />
				</a>
			</section>
		)
	}
}

export default Viewer;