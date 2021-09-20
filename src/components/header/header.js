import React from 'react'
import { Link } from "react-router-dom";
import './header.scss'
import sun from './sun.svg'

const Header = () => {
	return (
		<header className="row g-0">
			<div className="col-12">
				<h1 className="text-light">
					<Link to='/'>
						<img src={sun} alt="Logo" />
					</Link>
					Screens
					<span className="date">2021-01-01</span>
					<span className="separator">-</span>
					<span className="date">2021-12-31</span>
				</h1>
			</div>
		</header>
	)
}
export default Header