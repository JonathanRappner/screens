// config for development
const config_dev = {
	"api_url": "http://localhost:4000/"
}

// config for production
const config_prod  = {
	"api_url": "https://screens-api.aeoah.se/"
}

// choose the config object
module.exports = process.env.NODE_ENV === 'development' 
	? config_dev
	: config_prod