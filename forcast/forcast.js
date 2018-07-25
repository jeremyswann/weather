const request = require('request')

const toCelcius = temp => parseFloat((temp - 32) / 1.8).toFixed(2)

const forcastWeather = (lat, lng, callback) => {
	const key = 'your_darksky_API_key'
	const forcast = `https://api.darksky.net/forecast/${key}/${lat},${lng}`

	request(
		{
			url: forcast,
			json: true,
		},
		(err, res, body) => {
			if (!err && res.statusCode === 200) {
				callback(undefined, {
					temp: toCelcius(body.currently.temperature),
					feels: toCelcius(body.currently.apparentTemperature),
				})
			} else {
				callback('Unable to fetch weather')
			}
		}
	)
}

module.exports.forcastWeather = forcastWeather
