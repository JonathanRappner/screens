import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './foobar.scss'
import Foobar from './foobar'
import ThumbList from './thumbList';

function App() {
	return (
		<div className="App">
			<img src={logo} className="logo" alt="logo" />
			<Foobar text="Foobar" />

			<ThumbList />
		</div>
	);
}

export default App;
