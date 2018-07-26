# Weather App :cloud:
A **very** basic command line weather app
**Created with :heart: in ⬢[Node.js][] by [Jeremy Swanborough][]**

## Requirements:
* ⎇ [Git][]
* ⬢ [Node.js][]
* ⬤_[Yarn][]
* ☁ [Dark Sky API][]
* 🌏[Geocode API][]

## Installation:
1. Clone the repo using `git` and open the notebook `dir`
```console
λ git clone https://github.com/jeremyswann/weather.git weather
λ cd weather
```
2. Install the app using `yarn`
```console
λ yarn install
```
3. Create a `.env` using the `.env.example` file replaceing the strings with your own API keys

## How to use:
Run `--help` to get a list of possible commands

```console
λ node app --help
Options:
  --address, -a  Address to fetch weather for
  --help, -h     Show help
  --version, -v  Show version number
```

Have fun! :tada:

[Node.js]: https://nodejs.org/en/
[Yarn]: https://yarnpkg.com
[Git]: https://help.github.com/articles/set-up-git/
[Dark Sky API]: https://darksky.net/dev
[Geocode API]:https://developers.google.com/maps/documentation/geocoding/intro
[Jeremy Swanborough]: https://github.com/jeremyswann