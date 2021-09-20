import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import './main.scss'
import config from '../config'
import Header from '../components/header/header'
import Thumbs from '../components/thumbs/thumbs'
import Viewer from '../components/viewer/viewer'

const Main = () => {

	// hooks
	const { gameCode, screenId } = useParams()
	const history = useHistory()
	const [screen, setScreen] = useState(undefined)
	const [thumbs, setThumbs] = useState([])

	// gameCode effect
	useEffect(() => {
		axios.get(`${config.api_url}screens/${gameCode ?? 'all'}/latest/${100}`)////////////100
			.then(res => {
				setThumbs(res.data)
			}).catch(console.error)
	}, [gameCode])

	// screenId effect
	useEffect(() => {
		if (typeof screenId !== 'undefined') {
			axios.get(`${config.api_url}screens/${screenId}`)
				.then(res => {
					setScreen(res.data)
					// document.getElementById("favicon").href = res.data.game.icon48_url // favicon
					// document.title = `${res.data.game.code.toUpperCase()}: ${res.data.date_time.format_long}` // title
				}).catch(console.error)
		}
	}, [screenId])

	const closeViewer = () => {
		history.push(`/${gameCode ?? ''}`)
		setScreen(undefined)
		// document.body.style.overflow = 'auto' // enable scrolling
		// document.getElementById("favicon").href = 'favicon.ico' // restore favicon
		// document.title = 'Screens' // restore title
	}


	return (
		<div className='App container-fluid gx-0' style={{ 'paddingRight': screenId ? '14px' : '' }}>
			<Viewer screen={screen} close={closeViewer} />
			<Header />
			<Thumbs thumbs={thumbs} gameCode={gameCode} />
		</div>
	)
}

export default Main