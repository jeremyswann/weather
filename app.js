const yargs = require('yargs')

const geocode = require('./geocode/geocode')
const forcast = require('./forcast/forcast')

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

geocode.geocodeAddress(argv.address, (err, res) => {
	if (err) {
		console.log(err)
	} else {
		console.log(res.address)
		forcast.forcastWeather(res.latitude, res.longitude, (err, res) => {
			if (err) {
				console.log(err)
			} else {
				console.log(
					`Its currently ${res.temp}°C.\nIt feels like ${res.feels}°C.`
				)
			}
		})
	}
})
