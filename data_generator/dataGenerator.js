const dict = require('./dictionary.js');
const faker = require('faker');
const fs = require('fs');

faker.locale = 'en_US';

/*
 *  If the script was run with --csv output data as a csv,
 *  otherwise data will be output as JSON
 */
const args = process.argv.slice(2);
const outputCSV = args.includes('--csv');

/*
 * If a number was passed in on the command line,
 * generate that many records, otherwise generate 10
 */
const numberToGenerate = args.find(elem => /\b\d+\b/.test(elem)) || 10;

const stream = fs.createWriteStream(`./data.${outputCSV ? 'csv' : 'json'}`);

const hours = 'Monday: 9:00 AM – 9:00 PM, ' +
              'Tuesday: 9:00 AM – 9:00 PM, ' +
              'Wednesday: 9:00 AM – 9:00 PM, ' +
              'Thursday: 9:00 AM – 9:00 PM, ' +
              'Friday: 9:00 AM – 9:00 PM, ' +
              'Saturday: 9:00 AM – 9:00 PM, ' +
              'Sunday: 9:00 AM – 9:00 PM';

function generateName() {
  let adj = dict.adjectives[Math.floor(Math.random() * dict.adjectives.length)];
  adj = adj.charAt(0).toUpperCase() + adj.slice(1);

  let noun = dict.nouns[Math.floor(Math.random() * dict.nouns.length)];
  noun = noun.charAt(0).toUpperCase() + noun.slice(1);

  return `${adj} ${noun}`;
}

function createJSONRecord(i) {
  faker.seed(i);
  const restaurant = {};
  restaurant.id = i; // generate incrementing id
  restaurant.name = generateName();
  restaurant.address = faker.address.streetAddress();
  restaurant.url = faker.internet.url();
  restaurant.phone = faker.phone.phoneNumberFormat(0);
  restaurant.hours = hours;
  restaurant.lat = faker.address.latitude();
  restaurant.long = faker.address.longitude();
  return JSON.stringify(restaurant);
}

function createCSVRecord(i) {
  faker.seed(i);
  let restaurant = '';
  restaurant += `${i},`;
  restaurant += `${generateName()},`;
  restaurant += `${faker.address.streetAddress()},`;
  restaurant += `${faker.internet.url()},`;
  restaurant += `${faker.phone.phoneNumberFormat(0)},`;
  restaurant += `"${hours}",`;
  restaurant += `${faker.address.latitude()},`;
  restaurant += `${faker.address.longitude()}\n`;
  return restaurant;
}

/*
 * Taken from the Node.js docs
 * https://nodejs.org/api/stream.html#stream_event_drain
 */
function writer() {
  let i = numberToGenerate;
  function write() {
    let ok = true;
    if (outputCSV) stream.write('id,name,address,url,phone,hours,lat,long\n');
    do {
      i -= 1;
      if (i === 0) {
        // last time!
        outputCSV ? stream.write(createCSVRecord(i)) : stream.write(createJSONRecord(i));
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = outputCSV ? stream.write(createCSVRecord(i)) : stream.write(createJSONRecord(i));
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
  createCSVRecord,
  createJSONRecord,
  generateName,
};
