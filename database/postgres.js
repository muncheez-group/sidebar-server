const { Pool } = require('pg');

const config = {
  user: process.env.USER || 'postgres',
  host: 'localhost',
  database: 'muncheez',
  password: null,
  port: process.env.PORT || 5432,
};

const pool = new Pool(config);

// const getRestaurant = function (id, cb) {
//   pool.query(`SELECT * FROM restaurants WHERE id=${id}`, (err, data) => {
//     if (err) {
//       cb(err);
//     } else {
//       cb(null, data.rows[0]);
//     }
//   });
// };


const getRestaurant = (id) => (
  pool.query(`SELECT * FROM restaurants WHERE id=${id}`)
);

module.exports.getRestaurant = getRestaurant;
