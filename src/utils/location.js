const request = require('request')

const location = (address, callback) => {
  
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZnNvbyIsImEiOiJja25oYW9xYWwzZHBxMnhueHZxZmdsdDhtIn0.FmvCLrLMTUeWs1LsGs5sTQ&limit=1'

  request ({url: url, json: true}, (error,{body}= {}) => {
    if (error) {
      callback('Unable to connect to location services..',undefined)
    } else if (body.features.length === 0){ 
      callback('Location not found. Try another location',undefined)
    } else {
      callback(undefined,{
        location: body.features[0].place_name,
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0]
        
      })
    }
  })
}

module.exports = location