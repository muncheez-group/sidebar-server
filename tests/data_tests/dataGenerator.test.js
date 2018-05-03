const generator = require('../../data_generator/dataGenerator.js');


describe('createRecord', () => {

  it('makes a JSON object with the correct properties', () => {
    const record = JSON.parse(generator.createRecord(1));
    expect(record).toHaveProperty('id');
    expect(record).toHaveProperty('name');
    expect(record).toHaveProperty('address');
    expect(record).toHaveProperty('url');
    expect(record).toHaveProperty('phone');
    expect(record).toHaveProperty('hours');
    expect(record).toHaveProperty('coords');
  })

  it('makes a record with the correct id', () => {
    const record = JSON.parse(generator.createRecord(1));
    expect(record.id).toEqual(1);
  })

  it('makes an hours property as a string', () => {
    const record = JSON.parse(generator.createRecord(1));
    expect(typeof record.hours).toEqual('string');
  })

  it('makes a name property as a string', () => {
    const record = JSON.parse(generator.createRecord(1));
    expect(typeof record.name).toEqual('string');
  })
})

describe('generateName', () => {
  it('returns a 2 word string', () => {
    const name = generator.generateName();
    expect(name).toMatch(/[A-Z][a-z]* [A-Z][a-z]*/);
  })
})