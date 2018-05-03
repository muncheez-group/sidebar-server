const dict = require('./dictionary.js');
const faker = require('faker');
const fs = require('fs');

faker.locale = 'en_US';

const stream = fs.createWriteStream('./data.json');

const hours = `Monday: 9:00 AM – 9:00 PM,
               Tuesday: 9:00 AM – 9:00 PM,
               Wednesday: 9:00 AM – 9:00 PM,
               Thursday: 9:00 AM – 9:00 PM,
               Friday: 9:00 AM – 9:00 PM,
               Saturday: 9:00 AM – 9:00 PM,
               Sunday: 9:00 AM – 9:00 PM`;

function generateName() {
  let adj = dict.adjectives[Math.floor(Math.random() * dict.adjectives.length)];
  adj = adj.charAt(0).toUpperCase() + adj.slice(1);

  let noun = dict.nouns[Math.floor(Math.random() * dict.nouns.length)];
  noun = noun.charAt(0).toUpperCase() + noun.slice(1);

  return `${adj} ${noun}`;
}

function createRecord(i) {
  faker.seed(i);
  const restaurant = {};
  restaurant.id = i; // generate incrementing id
  restaurant.name = generateName();
  restaurant.address = faker.address.streetAddress();
  restaurant.url = faker.internet.url();
  restaurant.phone = faker.phone.phoneNumberFormat(0);
  restaurant.hours = hours;
  restaurant.coords = {
    lat: faker.address.latitude(),
    long: faker.address.longitude(),
  };
  return JSON.stringify(restaurant);
}

/*
 * Taken from the Node.js docs
 * https://nodejs.org/api/stream.html#stream_event_drain
 */
function writer(numberToGenerate = 10000000) {
  let i = numberToGenerate;
  function write() {
    let ok = true;
    do {
      i -= 1;
      if (i === 0) {
        // last time!
        stream.write(createRecord(i));
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = stream.write(createRecord(i));
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      stream.once('drain', write);
    }
  }
  write();
}

writer();

module.exports = {
  createRecord,
  generateName,
};
