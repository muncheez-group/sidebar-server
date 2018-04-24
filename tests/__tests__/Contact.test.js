import React from 'react';
import Enzyme from 'enzyme';
import {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Contact from '../../client/src/components/Contact';

Enzyme.configure({ adapter: new Adapter() });



describe('Contact', () => {
  let wrapper;
  let mounted;
  beforeEach(() => { 
    wrapper = shallow(<Contact />)
    mounted = mount(<Contact />)
  });

  it('should be defined', () => {
    expect(Contact).toBeDefined();
  });
  it('should render one Contact component', () => {
    expect(mounted).toHaveLength(1);
  });
});