const generator = require('../../data_generator/dataGenerator.js');

describe('createJSONRecord', () => {

  const record = JSON.parse(generator.createJSONRecord(1));

  it('makes a JSON object with the correct properties', () => {
    expect(record).toHaveProperty('id');
    expect(record).toHaveProperty('name');
    expect(record).toHaveProperty('address');
    expect(record).toHaveProperty('url');
    expect(record).toHaveProperty('phone');
    expect(record).toHaveProperty('hours');
    expect(record).toHaveProperty('lat');
    expect(record).toHaveProperty('long');
  })
  
  it('makes a record with the correct id', () => {
    expect(record.id).toEqual(1);
  })

  it('makes an hours property as a string', () => {
    expect(typeof record.hours).toEqual('string');
  })

  it('makes a name property as a string', () => {
    expect(typeof record.name).toEqual('string');
  })
})

describe('createCSVRecord',  () => {
  const record = generator.createCSVRecord(0);
  
  it('returns a string', () => {
    expect(typeof record).toEqual('string');
  })

  it('makes a record in the expected form', () =>{
    const pattern = /\d+,\b[A-Z][a-z]*('s)?\b \b[A-Z][a-z]*,\d+ [a-zA-z ']+,https?:\/\/\w+.\w+,\d{3}-\d{3}-\d{4},"[a-zA-z :\d–,]+",-?\d+(.\d+)?,-?\d+(.\d+)?/
    expect(pattern.test(record)).toBe(true);
  }) 
})

describe('generateName', () => {
  it('returns a 2 word string', () => {
    const name = generator.generateName();
    expect(name).toMatch(/[A-Z][a-z]* [A-Z][a-z]*/);
  })
})