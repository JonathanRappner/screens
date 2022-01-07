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
	const [gameFilterIcon, setGameFilterIcon] = useState('favicon.ico') // Store current favicon based on game filter. Use 'favicon.ico' when no filter is active. The viewer overrides this and doesn't use it.
	const [thumbs, setThumbs] = useState([])

	// URL-parametrar
	const gameCode = param1 && param1.match(/[a-zA-Z]+/) ? param1 : undefined
	const screenId = param1 && param1.match(/\d{10}/) ? param1 : param2

	// gameCode changes
	useEffect(() => {
		// get thumbnails
		axios.get(`${config.api_url}screens/${gameCode ?? 'all'}/latest/${100}`)////////////100
			.then(res => {
				setThumbs(res.data)
			}).catch(console.error)

		// get game-info
		if (gameCode) {
			axios.get(`${config.api_url}games/${gameCode}`)
				.then(res => {
					const icon = 'data:image/png;base64,' + res.data.icon16
					setGameFilterIcon(icon)
					document.getElementById("favicon").href = icon
				}).catch(console.error)
		} else {
			setGameFilterIcon('favicon.ico') // if no filter, set to default
		}
	}, [gameCode])

	// screenId changes
	useEffect(() => {
		if (typeof screenId !== 'undefined') {

			// load screen info from api
			axios.get(`${config.api_url}screens/${screenId}`)
				.then(res => {
					setScreen(res.data) // state
					document.title = `${res.data.game.code.toUpperCase()}: ${res.data.date_time.format_long}` // title

					// get the screen's game's icon
					axios.get(`${config.api_url}games/${res.data.game.code}`)
						.then(res => {
							document.getElementById("favicon").href = 'data:image/png;base64,' + res.data.icon16
						}).catch(console.error)

				}).catch(console.error)
		}
	}, [screenId])

	const closeViewer = () => {
		navigate(`/${gameCode ?? ''}`)
		setScreen()
		document.body.style.overflow = 'auto' // enable scrolling
		document.getElementById("favicon").href = gameFilterIcon // restore favicon
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