const { Pool } = require('pg');

const config = {
  user: process.env.USER || 'postgres',
  host: 'localhost',
  database: 'muncheez',
  password: null,
  port: process.env.PORT || 5432,
};

const pool = new Pool(config);

const getRestaurant = (id, cb) => (
  pool.query(`SELECT * FROM restaurants WHERE id=${id}`)
  .then(res => cb(null, res.rows[0]))
  .catch(e => cb(e, null))
);

module.exports.getRestaurant = getRestaurant;
