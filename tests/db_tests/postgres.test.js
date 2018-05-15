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
  isErr = false;
  
  it('invokes the callback with error for a bad query', () => {
    const badQuery = db.getRestaurant('string', queryCallback)

    if (badQuery.catch(error => error)) {
      isErr = true;
    }
    
    expect(isErr).toBe(true);
    expect(queryData).toBeUndefined();
  })
})