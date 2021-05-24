import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Button from 'react-bootstrap/Button'
import ThumbList from './thumbList';

class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = { 
			items: [],
			thumbListLength: 100
		}
	}

	componentDidMount(){
		this.loadScreens()
	}
	
	foobarClick = () => {
		this.setState(
			{ thumbListLength: 10 },
			this.loadScreens
		)
	}

	loadScreens = () => {
		// console.log(`Loading ${this.state.thumbListLength} screens`);

		fetch(`https://screens-api.aeoah.se/screens/all/latest/${this.state.thumbListLength}`)
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
		return (
			<div className="App">
				<Button className="btn-success" onClick={this.foobarClick}>Foobar</Button>

				<ThumbList items={this.state.items} onLengthChange={this.loadScreens} />
			</div>
		)
	}

}

export default App;
