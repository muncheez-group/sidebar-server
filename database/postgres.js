const { Pool } = require('pg');

const config = {
  user: process.env.USER || 'postgres',
  host: 'localhost',
  database: 'muncheez',
  password: null,
  port: process.env.PORT || 5432,
};

const pool = new Pool(config);

const getRestaurant = function (id, cb) {
  pool.query(`SELECT * FROM restaurants WHERE id=${id}`, (err, data) => {
    if (err) {
      console.log(err);
    }
    cb(data.rows[0]);
  })
}

module.exports.getRestaurant = getRestaurant;