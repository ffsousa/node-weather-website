const request = require('request')

const forecast = ({latitude,longitude}, callback) => {

  const url = 'http://api.weatherstack.com/current?access_key=3428ec68c5af5f9363b5251cabca4a88&query='+ latitude +','+longitude 
 
  request({url: url, json: true}, (error,{body}) =>{
    if (error) {
      callback('Unable to connect to weather services..',undefined)
    } else if (body.error) {
      callback('Weather not found. Try later',undefined)
    } else {
      callback(undefined,
          body.current.weather_descriptions[0] +'.   \n'+
          'Its currently ' + body.current.temperature + 'ºC. ' +'\n'+
          'It feels like ' + body.current.feelslike + 'ºC.\n'
        )
    }
  })
}
module.exports = forecast