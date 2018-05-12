const db = require('../../database/postgres.js');

let isErr = false;
let queryData;

const queryCallback = (err, data) => {
  if (err) {
    isErr = true;
  } else if (data) {
    queryData = data;
  }
}

describe('getRestaurant', () => {
  
  it('invokes the callback with data for a successful query', () => {
    const goodQuery = db.getRestaurant(1, queryCallback);
    expect(queryData).toBeDefined
  })

  queryData = undefined;
  
  it('invokes the callback with data for a successful query', () => {
    const goodQuery = db.getRestaurant(1, queryCallback);
    expect(isErr).toBe(true);
    expect(queryData).toBeUndefined();
  })
})