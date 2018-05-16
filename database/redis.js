const redis = require('redis');
const pgClient = require('../database/postgres.js');

const client = redis.createClient();

client.on('error', (err) => {
  console.log(`Error ${err}`);
});

const cacheValue = (record) => {
  client.setex(record.id, 3600, JSON.stringify(record));
};

const retrieveValue = (id, cb) => {
  client.get(id, (err, reply) => {
    if (reply === null) {
      pgClient.getRestaurant(id, (dbErr, data) => {
        if (dbErr) {
          cb(dbErr, null);
        } else {
          cb(null, data);
          cacheValue(data);
        }
      });
    } else {
      cb(null, reply);
    }
  });
};

module.exports.retrieveValue = retrieveValue;
