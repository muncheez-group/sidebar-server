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
  const record = generator.createCSVRecord();
  
  it('returns a string', () => {
    expect(typeof record).toEqual('string');
  })

  it('has column headers in the first row', () =>{
    expect(record.includes('id,name,address,url,phone,hours,lat,long\n'))
  }) 
})

describe('generateName', () => {
  it('returns a 2 word string', () => {
    const name = generator.generateName();
    expect(name).toMatch(/[A-Z][a-z]* [A-Z][a-z]*/);
  })
})