const request = require('request')




// request({ url: url, json: true}, (error, response)=> {
//     // console.log(response.body.current)

//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         const data = response.body.current
//         console.log(data.weather_descriptions[0])
//         console.log(`It is currently ${data.temperature} degrees out. Feeling temperature is ${data.feelslike} degrees.`)
//     }
// })

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f5a6f2883e38cf786079a68514a04d6d&query=' + latitude + ',' + longitude +'&units=m'

    request({url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `It is currently ${body.current.temperature} degrees out. Feeling temperature is ${body.current.feelslike} degrees.`) 
        }

    })
}

module.exports = forecast