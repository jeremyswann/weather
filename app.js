require('dotenv').config()
const yargs = require('yargs')
const axios = require('axios')

const mapKey = process.env.MAP_KEY
const forcastKey = process.env.FORCAST_KEY

const toCelcius = temp => parseFloat((temp - 32) / 1.8).toFixed(2)

const argv = yargs
	.options({
		address: {
			demand: true,
			alias: 'a',
			describe: 'Address to fetch weather for',
			string: true,
		},
	})
	.help()
	.alias('help', 'h')
	.version('1.0')
	.alias('version', 'v').argv

const encodedAddress = encodeURIComponent(argv.address)

const maps = 'https://maps.googleapis.com'
const geocode = '/maps/api/geocode/json'
const mapsUrl = `${maps}${geocode}?address=${encodedAddress}&key=${mapKey}`

axios
	.get(mapsUrl)
	.then(res => {
		if (res.data.status === 'ZERO_RESULTS') {
			throw new Error('Unable to find that address.')
		}
		const lat = res.data.results[0].geometry.location.lat
		const lng = res.data.results[0].geometry.location.lng
		const forcastUrl = `https://api.darksky.net/forecast/${forcastKey}/${lat},${lng}`
		console.log('Address: ', res.data.results[0].formatted_address)
		return axios.get(forcastUrl)
	})
	.then(res => {
		const temp = toCelcius(res.data.currently.temperature)
		const feel = toCelcius(res.data.currently.apparentTemperature)
		console.log(`Its currently ${temp}°C.\nIt feels like ${feel}°C.`)
	})
	.catch(err => {
		if (err.code === 'ENOTFOUND') {
			console.log('Unable to connect to API servers.')
		} else {
			console.log(err.message)
		}
	})
