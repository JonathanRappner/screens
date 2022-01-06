import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
	Grid//, Box
} from '@mui/material'
import axios from 'axios'

import config from '../config'
import Header from '../components/header/header'
import Thumbs from '../components/thumbs/thumbs'
import Viewer from '../components/viewer/viewer'

const Main = () => {

	// hooks
	const { param1, param2 } = useParams()
	const navigate = useNavigate()
	const [screen, setScreen] = useState()
	const [thumbs, setThumbs] = useState([])

	// URL-parametrar
	const gameCode = param1 && param1.match(/[a-zA-Z]+/) ? param1 : undefined
	const screenId = param1 && param1.match(/\d{10}/) ? param1 : param2

	// gameCode changes
	useEffect(() => {
		axios.get(`${config.api_url}screens/${gameCode ?? 'all'}/latest/${100}`)////////////100
			.then(res => {
				setThumbs(res.data)
			}).catch(console.error)
	}, [gameCode])

	// screenId changes
	useEffect(() => {
		if (typeof screenId !== 'undefined') {
			
			// ladda screen info från api
			axios.get(`${config.api_url}screens/${screenId}`)
				.then(res => {
					setScreen(res.data) // state
					document.getElementById("favicon").href = res.data.game.icon48_url // favicon
					document.title = `${res.data.game.code.toUpperCase()}: ${res.data.date_time.format_long}` // title
				}).catch(console.error)
		}
	}, [screenId])

	const closeViewer = () => {
		navigate(`/${gameCode ?? ''}`)
		setScreen()
		document.body.style.overflow = 'auto' // enable scrolling
		document.getElementById("favicon").href = 'favicon.ico' // restore favicon
		document.title = 'Screens' // restore title
	}


	return (
		<Grid container direction='column'>
			<Viewer screen={screen} close={closeViewer} />
			<Grid item>
				<Header />
			</Grid>
			<Grid item>
				<Thumbs thumbs={thumbs} gameCode={gameCode} />
			</Grid>
		</Grid>
	)
}

export default Main