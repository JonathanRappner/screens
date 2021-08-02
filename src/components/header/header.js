import React from 'react'
import './header.scss'
import sun from './sun.svg'

class Header extends React.Component {
	render(){
		return(
			<header className="row">
				<div className="col-12">
					<h1 className="text-light">
						<img src={sun} alt="Logo" />
						Screens
						<span className="date">2021-01-01</span>
						<span className="separator">-</span>
						<span className="date">2021-12-31</span>
					</h1>
				</div>
			</header>
		)
	}
}

export default Header