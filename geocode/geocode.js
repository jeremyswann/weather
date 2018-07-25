const request = require('request')

const geocodeAddress = (address, callback) => {
	const encodedAddress = encodeURIComponent(address)

	const url = 'https://maps.googleapis.com'
	const geocode = '/maps/api/geocode/json'
	const key = 'your_geocode_API_key'
	const api = `${url}${geocode}?address=${encodedAddress}&key=${key}`

	request(
		{
			url: api,
			json: true,
		},
		(err, res, body) => {
			if (err) {
				callback('Unable to connect to Google servers.')
			} else if (body.status === 'ZERO_RESULTS') {
				callback('Unable to find that address.')
			} else if (body.status === 'OK') {
				callback(undefined, {
					address: body.results[0].formatted_address,
					latitude: body.results[0].geometry.location.lat,
					longitude: body.results[0].geometry.location.lng,
				})
			}
		}
	)
}

module.exports.geocodeAddress = geocodeAddress
