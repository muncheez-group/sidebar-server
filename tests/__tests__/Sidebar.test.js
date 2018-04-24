import React from 'react';
import Enzyme from 'enzyme';
import {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Sidebar from '../../client/src/components/Sidebar';

Enzyme.configure({ adapter: new Adapter() });



describe('Sidebar', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<Sidebar name="sidebar" />)});

  it('should be defined', () => {
    expect(Sidebar).toBeDefined();
  });
  it('should render one Sidebar component', () => {
    expect(wrapper).toHaveLength(1);
  });
  it('should render props correctly', () => {
    expect(wrapper.instance().props.name).toBe('sidebar');
  });
});