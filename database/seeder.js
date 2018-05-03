const initData = require('./195-Zagat-AllData.json');
const Places = require('./index.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://database/apateez-sidebar');

const getFullData = (places) => {
  let counter = 0;
  console.log('GET FULL DATA CALLED');
  const seedData = () => {
    const temp = {
      id: places[counter].result.place_id,
      name: places[counter].result.name,
      menu_url: 'http://google.com',
      address: places[counter].result.formatted_address,
      location: places[counter].result.url,
      url: places[counter].result.website,
      phone: places[counter].result.international_phone_number,
      hours: places[counter].result.opening_hours ?
        places[counter].result.opening_hours.weekday_text : null,
      coords: {
        lat: places[counter].result.geometry.location.lat,
        lng: places[counter].result.geometry.location.lng,
      },
    };
    console.log(temp);

    Places.create(temp, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        counter += 1;
        if (counter < places.length) {
          seedData();
        }
      }
    });
  };

  seedData();
};

getFullData(initData);

module.exports = getFullData;
