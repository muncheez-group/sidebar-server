const request = require('request');
const initData = require('./ZagatData60.json');
const rp = require('request-promise')
const fs = require('fs');
const Places = require('./index.js');
const Promise = require('bluebird');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/places');


getFullData = (places) => {
  Promise.map(places, function(place) {
      var options = {
          uri: `https://maps.googleapis.com/maps/api/place/details/json?placeid=${place.place_id}&key=AIzaSyDkBAx39pJ0ccyXA-TWN-FmevHc87mznAM`,
          headers: {
              'User-Agent': 'Request-Promise'
        },
        json: true
    }
    return rp(options)
      .then((data) => {
        console.log(data)
        let temp = {
          id: data.result.place_id,
          name: data.result.name,
          menu_url: 'http://google.com',
          address: data.result.formatted_address,
          location: data.result.url,
          url: data.result.website,
          phone: data.result.international_phone_number,
          hours: data.result.opening_hours.weekday_text
        };

        let instance = new Places(temp);
        instance.save();
        })
        .catch(err => console.log(err));
  })
    .then(() => mongoose.connection.close())
    .catch(err => console.log(err));
}

getFullData(initData);


module.exports = getFullData;