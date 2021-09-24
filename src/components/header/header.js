/** @jsxImportSource @emotion/react */
import React from 'react'
import { Link } from "react-router-dom";
import { css } from '@emotion/react'

import sun from './sun.svg'

// Styles
const headerStyle = css`
	display: flex;
	align-items: center;
`
const dateStyle = (theme) => css`
	color: #7696d2;
	margin-left: ${theme.spacing(1)}
`
const sunStyle = (theme) => css`
	width: 100px;
	margin-right: ${theme.spacing(1)}
`

const Header = () => {
	return (
		<header>
			<div>
				<h1 css={headerStyle}>
					<Link to='/'>
						<img src={sun} alt="Logo" css={sunStyle} />
					</Link>
					Screens
					<span css={dateStyle}>2021-01-01</span>
					<span css={(theme) => css`margin-left:${theme.spacing(1)}`}>-</span>
					<span css={dateStyle}>2021-12-31</span>
				</h1>
			</div>
		</header>
	)
}
export default Header